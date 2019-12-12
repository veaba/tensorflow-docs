通过哈希设置id的一系列分类术语。

**别名** : [ `tf.compat.v1.feature_column.sequence_categorical_column_with_hash_bucket` ](/api_docs/python/tf/feature_column/sequence_categorical_column_with_hash_bucket), [ `tf.compat.v2.feature_column.sequence_categorical_column_with_hash_bucket` ](/api_docs/python/tf/feature_column/sequence_categorical_column_with_hash_bucket)

```
 tf.feature_column.sequence_categorical_column_with_hash_bucket(
    key,
    hash_bucket_size,
    dtype=tf.dtypes.string
)
 
```

Pass this to  `embedding_column`  or  `indicator_column`  to convert sequencecategorical data into dense representation for input to sequence NN, such asRNN.

#### 示例：


```
 tokens = sequence_categorical_column_with_hash_bucket(
    'tokens', hash_bucket_size=1000)
tokens_embedding = embedding_column(tokens, dimension=10)
columns = [tokens_embedding]

features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
sequence_feature_layer = SequenceFeatures(columns)
sequence_input, sequence_length = sequence_feature_layer(features)
sequence_length_mask = tf.sequence_mask(sequence_length)

rnn_cell = tf.keras.layers.SimpleRNNCell(hidden_size)
rnn_layer = tf.keras.layers.RNN(rnn_cell)
outputs, state = rnn_layer(sequence_input, mask=sequence_length_mask)
 
```

#### 参数：
- **`key`** : A unique string identifying the input feature.
- **`hash_bucket_size`** : An int > 1. The number of buckets.
- **`dtype`** : The type of features. Only string and integer types are supported.


#### 返回：
A  `SequenceCategoricalColumn` .

#### 加薪：
- **`ValueError`** :  `hash_bucket_size`  is not greater than 1.
- **`ValueError`** :  `dtype`  is neither string nor integer.
