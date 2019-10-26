## Class DenseFeatures
A layer that produces a dense Tensor based on given feature_columns.
Generally a single example in training data is described with FeatureColumns. At the first layer of the model, this column oriented data should be converted to a single Tensor.
This layer can be called multiple times with different features.
This is the V1 version of this layer that uses variable_scope's to create variables which works well with PartitionedVariables. Variable scopes are deprecated in V2, so the V2 version uses name_scopes instead. But currently that lacks support for partitioned variables. Use this if you need partitioned variables.
#### Example:

```
 price = numeric_column('price')
keywords_embedded = embedding_column(
    categorical_column_with_hash_bucket("keywords", 10K), dimensions=16)
columns = [price, keywords_embedded, ...]
feature_layer = DenseFeatures(columns)

features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = feature_layer(features)
for units in [128, 64, 32]:
  dense_tensor = tf.compat.v1.keras.layers.Dense(
                     units, activation='relu')(dense_tensor)
prediction = tf.compat.v1.keras.layers.Dense(1)(dense_tensor)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/feature_column/dense_features.py#L63-L86)


```
 __init__(
    feature_columns,
    trainable=True,
    name=None,
    **kwargs
)
```
Constructs a DenseFeatures layer.
#### Args:
- feature_columns: An iterable containing the FeatureColumns to use as inputs to your model. All items should be instances of classes derived from DenseColumn such as numeric_column, embedding_column, bucketized_column, indicator_column. If you have categorical features, you can wrap them with an embedding_column or indicator_column.
- trainable: Boolean, whether the layer's variables will be updated via gradient descent during training.
- name: Name to give to the DenseFeatures.
- **kwargs: Keyword arguments to construct a layer.
#### Raises:
- ValueError: if an item in feature_columns is not a DenseColumn.
