A sequence of categorical terms where ids use an in-memory list.



### Aliases:

- [ `tf.compat.v1.feature_column.sequence_categorical_column_with_vocabulary_list` ](/api_docs/python/tf/feature_column/sequence_categorical_column_with_vocabulary_list)

- [ `tf.compat.v2.feature_column.sequence_categorical_column_with_vocabulary_list` ](/api_docs/python/tf/feature_column/sequence_categorical_column_with_vocabulary_list)



```
 tf.feature_column.sequence_categorical_column_with_vocabulary_list(
    key,
    vocabulary_list,
    dtype=None,
    default_value=-1,
    num_oov_buckets=0
)
 
```

Pass this to  `embedding_column`  or  `indicator_column`  to convert sequence
categorical data into dense representation for input to sequence NN, such as
RNN.



#### Example:


```
 colors = sequence_categorical_column_with_vocabulary_list(
    key='colors', vocabulary_list=('R', 'G', 'B', 'Y'),
    num_oov_buckets=2)
colors_embedding = embedding_column(colors, dimension=3)
columns = [colors_embedding]

features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
sequence_feature_layer = SequenceFeatures(columns)
sequence_input, sequence_length = sequence_feature_layer(features)
sequence_length_mask = tf.sequence_mask(sequence_length)

rnn_cell = tf.keras.layers.SimpleRNNCell(hidden_size)
rnn_layer = tf.keras.layers.RNN(rnn_cell)
outputs, state = rnn_layer(sequence_input, mask=sequence_length_mask)
 
```



#### Args:

- **`key`** : A unique string identifying the input feature.

- **`vocabulary_list`** : An ordered iterable defining the vocabulary. Each feature
is mapped to the index of its value (if present) in  `vocabulary_list` .
Must be castable to  `dtype` .

- **`dtype`** : The type of features. Only string and integer types are supported.
If  `None` , it will be inferred from  `vocabulary_list` .

- **`default_value`** : The integer ID value to return for out-of-vocabulary feature
values, defaults to  `-1` . This can not be specified with a positive
 `num_oov_buckets` .

- **`num_oov_buckets`** : Non-negative integer, the number of out-of-vocabulary
buckets. All out-of-vocabulary inputs will be assigned IDs in the range
 `[len(vocabulary_list), len(vocabulary_list)+num_oov_buckets)`  based on a
hash of the input value. A positive  `num_oov_buckets`  can not be specified
with  `default_value` .



#### Returns:
A  `SequenceCategoricalColumn` .



#### Raises:

- **`ValueError`** : if  `vocabulary_list`  is empty, or contains duplicate keys.

- **`ValueError`** :  `num_oov_buckets`  is a negative integer.

- **`ValueError`** :  `num_oov_buckets`  and  `default_value`  are both specified.

- **`ValueError`** : if  `dtype`  is not integer or string.

