`DenseColumn` that converts from sparse, categorical input.
### Aliases:
- `tf.compat.v1.feature_column.embedding_column`
- `tf.compat.v2.feature_column.embedding_column`

```
 tf.feature_column.embedding_column(
    categorical_column,
    dimension,
    combiner='mean',
    initializer=None,
    ckpt_to_load_from=None,
    tensor_name_in_ckpt=None,
    max_norm=None,
    trainable=True
)
```
### Used in the tutorials:
- ``C``l``a``s``s``i``f``y`` ``s``t``r``u``c``t``u``r``e``d`` ``d``a``t``a`` ``w``i``t``h`` ``f``e``a``t``u``r``e`` ``c``o``l``u``m``n``s``
Use this when your inputs are sparse, but you want to convert them to a dense representation (e.g., to feed to a DNN).
Inputs must be a `CategoricalColumn` created by any of the `categorical_column_`* function. Here is an example of using `embedding_column` with `DNNClassifier`:

```
 video_id = categorical_column_with_identity(
    key='video_id', num_buckets=1000000, default_value=0)
columns = [embedding_column(video_id, 9),...]

estimator = tf.estimator.DNNClassifier(feature_columns=columns, ...)

label_column = ...
def input_fn():
  features = tf.io.parse_example(
      ..., features=make_parse_example_spec(columns + [label_column]))
  labels = features.pop(label_column.name)
  return features, labels

estimator.train(input_fn=input_fn, steps=100)
```
Here is an example using `embedding_column` with model_fn:

```
 def model_fn(features, ...):
  video_id = categorical_column_with_identity(
      key='video_id', num_buckets=1000000, default_value=0)
  columns = [embedding_column(video_id, 9),...]
  dense_tensor = input_layer(features, columns)
  # Form DNN layers, calculate loss, and return EstimatorSpec.
  ...
```
#### Args:
- `categorical_column`: A `CategoricalColumn` created by a `categorical_column`_with_* function. This column produces the sparse IDs that are inputs to the embedding lookup.
- `dimension`: An integer specifying `dimension` of the embedding, must be > 0.
- `combiner`: A string specifying how to reduce if there are multiple entries in a single row. Currently 'mean', 'sqrtn' and 'sum' are supported, with 'mean' the default. 'sqrtn' often achieves good accuracy, in particular with bag-of-words columns. Each of this can be thought as example level normalizations on the column. For more information, see `tf.embedding_lookup_sparse`.
#### Returns:
`DenseColumn` that converts from sparse input.
#### Raises:
- `ValueError`: if `dimension` not > 0.
- `ValueError`: if exactly one of `ckpt_to_load_from` and `tensor_name_in_ckpt` is specified.
- `ValueError`: if `initializer` is specified and is not callable.
- `RuntimeError`: If eager execution is enabled.
