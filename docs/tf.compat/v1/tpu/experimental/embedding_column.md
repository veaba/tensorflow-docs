TPU version of [ `tf.compat.v1.feature_column.embedding_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/embedding_column).

```
 tf.compat.v1.tpu.experimental.embedding_column(
    categorical_column,
    dimension,
    combiner='mean',
    initializer=None,
    max_sequence_length=0
)
 
```

Note that the interface for  `tf.tpu.experimental.embedding_column`  isdifferent from that of [ `tf.compat.v1.feature_column.embedding_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/embedding_column): Thefollowing arguments are NOT supported:  `ckpt_to_load_from` , `tensor_name_in_ckpt` ,  `max_norm`  and  `trainable` .

Use this function in place of [ `tf.compat.v1.feature_column.embedding_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/embedding_column)when you want to use the TPU to accelerate your embedding lookups via TPUembeddings.

```
 column = tf.feature_column.categorical_column_with_identity(...)
tpu_column = tf.tpu.experimental.embedding_column(column, 10)
...
def model_fn(features):
  dense_feature = tf.keras.layers.DenseFeature(tpu_column)
  embedded_feature = dense_feature(features)
  ...

estimator = tf.estimator.tpu.TPUEstimator(
    model_fn=model_fn,
    ...
    embedding_config_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
      column=[tpu_column],
      ...))
 
```

#### Args:
- **`categorical_column`** : A categorical column returned from `categorical_column_with_identity` ,  `weighted_categorical_column` , `categorical_column_with_vocabulary_file` , `categorical_column_with_vocabulary_list` , `sequence_categorical_column_with_identity` , `sequence_categorical_column_with_vocabulary_file` , `sequence_categorical_column_with_vocabulary_list` 
- **`dimension`** : An integer specifying dimension of the embedding, must be > 0.
- **`combiner`** : A string specifying how to reduce if there are multiple entriesin a single row for a non-sequence column. For more information, see[ `tf.feature_column.embedding_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/embedding_column).
- **`initializer`** : A variable initializer function to be used in embeddingvariable initialization. If not specified, defaults to[ `tf.compat.v1.truncated_normal_initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/truncated_normal_initializer) with mean  `0.0`  andstandard deviation  `1/sqrt(dimension)` .
- **`max_sequence_length`** : An non-negative integer specifying the max sequencelength. Any sequence shorter then this will be padded with 0 embeddingsand any sequence longer will be truncated. This must be positive forsequence features and 0 for non-sequence features.


#### Returns:
A   `_TPUEmbeddingColumnV2` .

#### Raises:
- **`ValueError`** : if  `dimension`  not > 0.
- **`ValueError`** : if  `initializer`  is specified but not callable.
