Returns a dense `Tensor` as input layer based on given `feature_columns`.

```
 tf.compat.v1.feature_column.input_layer(
    features,
    feature_columns,
    weight_collections=None,
    trainable=True,
    cols_to_vars=None,
    cols_to_output_tensors=None
)
```
Generally a single example in training data is described with FeatureColumns. At the first layer of the model, this column oriented data should be converted to a single `Tensor`.
#### Example:

```
 price = numeric_column('price')
keywords_embedded = embedding_column(
    categorical_column_with_hash_bucket("keywords", 10K), dimensions=16)
columns = [price, keywords_embedded, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)
for units in [128, 64, 32]:
  dense_tensor = tf.compat.v1.layers.dense(dense_tensor, units, tf.nn.relu)
prediction = tf.compat.v1.layers.dense(dense_tensor, 1)
```
#### Args:
#### Returns:
A `Tensor` which represents input layer of a model. Its shape is (batch_size, first_layer_dimension) and its dtype is `float32`. first_layer_dimension is determined based on given `feature_columns`.
#### Raises:
- `ValueError`: if an item in `feature_columns` is not a `_DenseColumn`.
