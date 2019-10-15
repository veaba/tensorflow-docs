
Generates parsing spec for tf.parse_example to be used with regressors.

```
 tf.compat.v1.estimator.regressor_parse_example_spec(
    feature_columns,
    label_key,
    label_dtype=tf.dtypes.float32,
    label_default=None,
    label_dimension=1,
    weight_column=None
)
```

If users keep data in tf.Example format, they need to call tf.parse_example with a proper feature spec. There are two main things that this utility helps:
- ``U``s``e``r``s`` ``n``e``e``d`` ``t``o`` ``c``o``m``b``i``n``e`` ``p``a``r``s``i``n``g`` ``s``p``e``c`` ``o``f`` ``f``e``a``t``u``r``e``s`` ``w``i``t``h`` ``l``a``b``e``l``s`` ``a``n``d`` ``w``e``i``g``h``t``s`` ``(``i``f`` ``a``n``y``)`` ``s``i``n``c``e`` ``t``h``e``y`` ``a``r``e`` ``a``l``l`` ``p``a``r``s``e``d`` ``f``r``o``m`` ``s``a``m``e`` ``t``f``.``E``x``a``m``p``l``e`` ``i``n``s``t``a``n``c``e``.`` ``T``h``i``s`` ``u``t``i``l``i``t``y`` ``c``o``m``b``i``n``e``s`` ``t``h``e``s``e`` ``s``p``e``c``s``.``
- It is difficult to map expected label by a regressor such as `DNNRegressor` to corresponding tf.parse_example spec. This utility encodes it by getting related information from users (key, dtype).

Example output of parsing spec:

```
 # Define features and transformations
feature_b = tf.feature_column.numeric_column(...)
feature_c_bucketized = tf.feature_column.bucketized_column(
  tf.feature_column.numeric_column("feature_c"), ...)
feature_a_x_feature_c = tf.feature_column.crossed_column(
    columns=["feature_a", feature_c_bucketized], ...)

feature_columns = [feature_b, feature_c_bucketized, feature_a_x_feature_c]
parsing_spec = tf.estimator.regressor_parse_example_spec(
    feature_columns, label_key='my-label')

# For the above example, regressor_parse_example_spec would return the dict:
assert parsing_spec == {
  "feature_a": parsing_ops.VarLenFeature(tf.string),
  "feature_b": parsing_ops.FixedLenFeature([1], dtype=tf.float32),
  "feature_c": parsing_ops.FixedLenFeature([1], dtype=tf.float32)
  "my-label" : parsing_ops.FixedLenFeature([1], dtype=tf.float32)
}
```

Example usage with a regressor:

```
 feature_columns = # define features via tf.feature_column
estimator = DNNRegressor(
    hidden_units=[256, 64, 16],
    feature_columns=feature_columns,
    weight_column='example-weight',
    label_dimension=3)
# This label configuration tells the regressor the following:
# * weights are retrieved with key 'example-weight'
# * label is a 3 dimension tensor with float32 dtype.


# Input builders
def input_fn_train():  # Returns a tuple of features and labels.
  features = tf.contrib.learn.read_keyed_batch_features(
      file_pattern=train_files,
      batch_size=batch_size,
      # creates parsing configuration for tf.parse_example
      features=tf.estimator.classifier_parse_example_spec(
          feature_columns,
          label_key='my-label',
          label_dimension=3,
          weight_column='example-weight'),
      reader=tf.RecordIOReader)
   labels = features.pop('my-label')
   return features, labels

estimator.train(input_fn=input_fn_train)
```
#### Args:
- `feature_columns`: An iterable containing all feature columns. All items should be instances of classes derived from `_FeatureColumn`.
- `label_key`: A string identifying the label. It means tf.Example stores labels with this key.
- `label_dtype`: A `tf.dtype` identifies the type of labels. By default it is `tf.float32`.
- `label_default`: used as label if `label_key` does not exist in given tf.Example. By default default_value is none, which means `tf.parse_example` will error out if there is any missing label.
- `label_dimension`:` `Nu`m``b``e`r` ``o`f` `r`e`gr`e``s``s``i``o``n`` ``t``a`rg`e``t``s`` `p`e`r` ``e`x`a``m`p`l``e`.` `T`h``i``s`` ``i``s`` ``t``h``e`` ``s``i``z``e`` ``o`f` ``t``h``e`` ``l``a``s``t`` ``d``i``m``e``n``s``i``o``n`` ``o`f` ``t``h``e`` ``l``a``b``e``l``s`` ``a``n``d`` ``l``o`g`i``t``s`` ``Tensor`` ``o``b`j`e``c``t``s`` `(`t`yp`i``c``a``l``l`y`,`` ``t``h``e``s``e`` ``h``a`v`e`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``label_dimension`]).
- `weight_column`:` `A` ``s``t`r`i``n`g` ``o`r` ``a`` ``NumericColumn`` ``c`r`e``a``t``e``d`` ``b`y` ``t`f.f`e``a``t`ur`e``_``c``o``l`u`m``n`.`n`u`m``e`r`i``c``_``c``o``l`u`m``n`` ``d``e`f`i``n``i``n`g` `f`e``a``t`ur`e`` ``c``o``l`u`m``n`` `r`e`pr`e``s``e``n``t``i``n`g` `w`e``i`g`h``t``s`.` `I`t`` ``i``s`` `u`s``e``d`` ``t``o`` ``d``o`w`n`` `w`e``i`g`h``t`` ``o`r` ``b``o``o``s``t`` ``e`x`a``m`p`l``e``s`` ``d`ur`i``n`g` ``t`r`a``i``n``i``n`g.` `I`t`` `w`i``l``l`` ``b``e`` ``m`u`l``t``i`p`l``i``e``d`` ``b`y` ``t``h``e`` ``l``o``s``s`` ``o`f` ``t``h``e`` ``e`x`a``m`p`l``e`.` `If` ``i``t`` ``i``s`` ``a`` ``s``t`r`i``n`g`,`` ``i``t`` ``i``s`` `u`s``e``d`` ``a``s`` ``a`` `k`e`y` ``t``o`` `f`e``t``c``h`` `w`e``i`g`h``t`` ``t``e``n``s``o`r` `fr`o``m`` ``t``h``e`` ``features`.` `If` ``i``t`` ``i``s`` ``a`` ``NumericColumn``,`` `r`a`w` ``t``e``n``s``o`r` ``i``s`` `f`e``t``c``h``e``d`` ``b`y` `k`e`y` ``weight_column`.k`e`y`,`` ``t``h``e``n`` ``weight_column`.`n``o`r`m``a``l``i``z``e`r`_`f`n`` ``i``s`` ``a`pp`l``i``e``d`` ``o``n`` ``i``t`` ``t``o`` `g`e``t`` `w`e``i`g`h``t`` ``t``e``n``s``o`r.
#### Returns:

A dict mapping each feature key to a FixedLenFeature or VarLenFeature value.
#### Raises:
- `ValueError`: If label is used in `feature_columns`.
- `ValueError`: If weight_column is used in `feature_columns`.
- `ValueError`: If any of the given `feature_columns` is not a `_FeatureColumn` instance.
- `ValueError`: If `weight_column` is not a `NumericColumn` instance.
- `ValueError`: if label_key is None.
