TPU version of [ `tf.compat.v1.feature_column.shared_embedding_columns` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/shared_embedding_columns).

```
 tf.compat.v1.tpu.experimental.shared_embedding_columns(
    categorical_columns,
    dimension,
    combiner='mean',
    initializer=None,
    shared_embedding_collection_name=None,
    max_sequence_lengths=None
)
 
```

Note that the interface for  `tf.tpu.experimental.shared_embedding_columns`  isdifferent from that of [ `tf.compat.v1.feature_column.shared_embedding_columns` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/feature_column/shared_embedding_columns):The following arguments are NOT supported:  `ckpt_to_load_from` , `tensor_name_in_ckpt` ,  `max_norm`  and  `trainable` .

Use this function in place oftf.compat.v1.feature_column.shared_embedding_columns` when you want to use theTPU to accelerate your embedding lookups via TPU embeddings.

```
 column_a = tf.feature_column.categorical_column_with_identity(...)
column_b = tf.feature_column.categorical_column_with_identity(...)
tpu_columns = tf.tpu.experimental.shared_embedding_columns(
    [column_a, column_b], 10)
...
def model_fn(features):
  dense_feature = tf.keras.layers.DenseFeature(tpu_columns)
  embedded_feature = dense_feature(features)
  ...

estimator = tf.estimator.tpu.TPUEstimator(
    model_fn=model_fn,
    ...
    embedding_config_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
        column=tpu_columns,
        ...))
 
```

#### 参数：
- **`categorical_columns`** : A list of categorical columns returned from `categorical_column_with_identity` ,  `weighted_categorical_column` , `categorical_column_with_vocabulary_file` , `categorical_column_with_vocabulary_list` , `sequence_categorical_column_with_identity` , `sequence_categorical_column_with_vocabulary_file` , `sequence_categorical_column_with_vocabulary_list` 
- **`dimension`** : An integer specifying dimension of the embedding, must be > 0.
- **`combiner`** : A string specifying how to reduce if there are multiple entriesin a single row for a non-sequence column. For more information, see[ `tf.feature_column.embedding_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/embedding_column).
- **`initializer`** : A variable initializer function to be used in embeddingvariable initialization. If not specified, defaults to `tf.truncated_normal_initializer`  with mean  `0.0`  and standard deviation `1/sqrt(dimension)` .
- **`shared_embedding_collection_name`** : Optional name of the collection whereshared embedding weights are added. If not given, a reasonable name willbe chosen based on the names of  `categorical_columns` . This is also usedin  `variable_scope`  when creating shared embedding weights.
- **`max_sequence_lengths`** : An list of non-negative integers, either None orempty or the same length as the argument categorical_columns. Entriescorresponding to non-sequence columns must be 0 and entries correspondingto sequence columns specify the max sequence length for the column. Anysequence shorter then this will be padded with 0 embeddings and anysequence longer will be truncated.


#### 返回：
A  list of  `_TPUSharedEmbeddingColumnV2` .

#### 加薪：
- **`ValueError`** : if  `dimension`  not > 0.
- **`ValueError`** : if  `initializer`  is specified but not callable.
- **`ValueError`** : if  `max_sequence_lengths`  is specified and not the same lengthas  `categorical_columns` .
- **`ValueError`** : if  `max_sequence_lengths`  is positive for a non sequence columnor 0 for a sequence column.
