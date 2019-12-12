Returns a linear prediction  `Tensor`  based on given  `feature_columns` .

```
 tf.compat.v1.feature_column.linear_model(
    features,
    feature_columns,
    units=1,
    sparse_combiner='sum',
    weight_collections=None,
    trainable=True,
    cols_to_vars=None
)
 
```

This function generates a weighted sum based on output dimension  `units` .Weighted sum refers to logits in classification problems. It refers to theprediction itself for linear regression problems.

Note on supported columns:  `linear_model`  treats categorical columns as `indicator_column` s. To be specific, assume the input as  `SparseTensor`  lookslike:

```
   shape = [2, 2]
  {
      [0, 0]: "a"
      [1, 0]: "b"
      [1, 1]: "c"
  }
 
```

 `linear_model`  assigns weights for the presence of "a", "b", "c' implicitly,just like  `indicator_column` , while  `input_layer`  explicitly requires wrappingeach of categorical columns with an  `embedding_column`  or an `indicator_column` .

#### Example of usage:


```
 price = numeric_column('price')
price_buckets = bucketized_column(price, boundaries=[0., 10., 100., 1000.])
keywords = categorical_column_with_hash_bucket("keywords", 10K)
keywords_price = crossed_column('keywords', price_buckets, ...)
columns = [price_buckets, keywords, keywords_price ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
prediction = linear_model(features, columns)
 
```

The  `sparse_combiner`  argument works as followsFor example, for two features represented as the categorical columns:

```
   # Feature 1

  shape = [2, 2]
  {
      [0, 0]: "a"
      [0, 1]: "b"
      [1, 0]: "c"
  }

  # Feature 2

  shape = [2, 3]
  {
      [0, 0]: "d"
      [1, 0]: "e"
      [1, 1]: "f"
      [1, 2]: "f"
  }
 
```

with  `sparse_combiner`  as "mean", the linear model outputs consequentlyare:

```
   y_0 = 1.0 / 2.0 * ( w_a + w_b ) + w_d + b
  y_1 = w_c + 1.0 / 3.0 * ( w_e + 2.0 * w_f ) + b
 
```

where  `y_i`  is the output,  `b`  is the bias, and  `w_x`  is the weightassigned to the presence of  `x`  in the input features.

#### Args:
- **`features`** : A mapping from key to tensors.  `_FeatureColumn` s look up via thesekeys. For example  `numeric_column('price')`  will look at 'price' key inthis dict. Values are  `Tensor`  or  `SparseTensor`  depending oncorresponding  `_FeatureColumn` .
- **`feature_columns`** : An iterable containing the FeatureColumns to use as inputsto your model. All items should be instances of classes derived from `_FeatureColumn` s.
- **`units`** : An integer, dimensionality of the output space. Default value is 1.
- **`sparse_combiner`** : A string specifying how to reduce if a categorical columnis multivalent. Except  `numeric_column` , almost all columns passed to `linear_model`  are considered as categorical columns.  It combines eachcategorical column independently. Currently "mean", "sqrtn" and "sum" aresupported, with "sum" the default for linear model. "sqrtn" often achievesgood accuracy, in particular with bag-of-words columns.
- **`weight_collections`** : A list of collection names to which the Variable will beadded. Note that, variables will also be added to collections `tf.GraphKeys.GLOBAL_VARIABLES`  and  `ops.GraphKeys.MODEL_VARIABLES` .
- **`trainable`** : If  `True`  also add the variable to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
- **`cols_to_vars`** : If not  `None` , must be a dictionary that will be filled with amapping from  `_FeatureColumn`  to associated list of  `Variable` s.  Forexample, after the call, we might have cols_to_vars = {_NumericColumn(  key='numeric_feature1', shape=(1,):[<tf.variable 'linear_model="" price2="" weights:0'="" shape="(1," 1)="">],'bias': [<tf.variable 'linear_model="" bias_weights:0'="" shape="(1,)">],_NumericColumn(  key='numeric_feature2', shape=(2,)):[<tf.variable 'linear_model="" price1="" weights:0'="" shape="(2," 1)="">]}If a column creates no variables, its value will be an empty list. Notethat cols_to_vars will also contain a string key 'bias' that maps to alist of Variables.</tf.variable></tf.variable></tf.variable>
    - "sum": do not normalize features in the column
    - "mean": do l1 normalization on features in the column
    - "sqrtn": do l2 normalization on features in the column


#### Returns:
A  `Tensor`  which represents predictions/logits of a linear model. Its shapeis (batch_size, units) and its dtype is  `float32` .

#### Raises:
- **`ValueError`** : if an item in  `feature_columns`  is neither a  `_DenseColumn` nor  `_CategoricalColumn` .
