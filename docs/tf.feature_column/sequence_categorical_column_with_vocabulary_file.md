ids使用词汇表文件的一系列分类术语。

**别名** : [ `tf.compat.v1.feature_column.sequence_categorical_column_with_vocabulary_file` ](/api_docs/python/tf/feature_column/sequence_categorical_column_with_vocabulary_file), [ `tf.compat.v2.feature_column.sequence_categorical_column_with_vocabulary_file` ](/api_docs/python/tf/feature_column/sequence_categorical_column_with_vocabulary_file)

```
 tf.feature_column.sequence_categorical_column_with_vocabulary_file(
    key,
    vocabulary_file,
    vocabulary_size=None,
    num_oov_buckets=0,
    default_value=None,
    dtype=tf.dtypes.string
)
 
```

Pass this to  `embedding_column`  or  `indicator_column`  to convert sequencecategorical data into dense representation for input to sequence NN, such asRNN.

#### 示例：


```
 states = sequence_categorical_column_with_vocabulary_file(
    key='states', vocabulary_file='/us/states.txt', vocabulary_size=50,
    num_oov_buckets=5)
states_embedding = embedding_column(states, dimension=10)
columns = [states_embedding]

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
- **`vocabulary_file`** : The vocabulary file name.
- **`vocabulary_size`** : Number of the elements in the vocabulary. This must be nogreater than length of  `vocabulary_file` , if less than length, latervalues are ignored. If None, it is set to the length of  `vocabulary_file` .
- **`num_oov_buckets`** : Non-negative integer, the number of out-of-vocabularybuckets. All out-of-vocabulary inputs will be assigned IDs in the range `[vocabulary_size, vocabulary_size+num_oov_buckets)`  based on a hash ofthe input value. A positive  `num_oov_buckets`  can not be specified with `default_value` .
- **`default_value`** : The integer ID value to return for out-of-vocabulary featurevalues, defaults to  `-1` . This can not be specified with a positive `num_oov_buckets` .
- **`dtype`** : The type of features. Only string and integer types are supported.


#### 返回：
A  `SequenceCategoricalColumn` .

#### 加薪：
- **`ValueError`** :  `vocabulary_file`  is missing or cannot be opened.
- **`ValueError`** :  `vocabulary_size`  is missing or < 1.
- **`ValueError`** :  `num_oov_buckets`  is a negative integer.
- **`ValueError`** :  `num_oov_buckets`  and  `default_value`  are both specified.
- **`ValueError`** :  `dtype`  is neither string nor integer.
