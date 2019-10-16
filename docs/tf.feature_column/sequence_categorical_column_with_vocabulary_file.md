
A sequence of categorical terms where ids use a vocabulary file.
### Aliases:
- `tf.compat.v1.feature_column.sequence_categorical_column_with_vocabulary_file`
- `tf.compat.v2.feature_column.sequence_categorical_column_with_vocabulary_file`

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

Pass this to embedding_column or indicator_column to convert sequence categorical data into dense representation for input to sequence NN, such as RNN.
#### Example:

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
#### Args:
- `key`: A unique string identifying the input feature.
- `vocabulary_file`: The vocabulary file name.
- `vocabulary_size`: Number of the elements in the vocabulary. This must be no greater than length of `vocabulary_file`, if less than length, later values are ignored. If None, it is set to the length of `vocabulary_file`.
#### Returns:

A SequenceCategoricalColumn.
#### Raises:
- `ValueError`: `vocabulary_file` is missing or cannot be opened.
- `ValueError`: `vocabulary_size` is missing or < 1.
- `ValueError`: `num_oov_buckets` is a negative integer.
- `ValueError`: `num_oov_buckets` and `default_value` are both specified.
- `ValueError`: `dtype` is neither string nor integer.
