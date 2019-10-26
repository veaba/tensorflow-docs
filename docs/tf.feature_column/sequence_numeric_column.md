Returns a feature column that represents sequences of numeric data.
### Aliases:
- tf.compat.v1.feature_column.sequence_numeric_column
- tf.compat.v2.feature_column.sequence_numeric_column

```
 tf.feature_column.sequence_numeric_column(
    key,
    shape=(1,),
    default_value=0.0,
    dtype=tf.dtypes.float32,
    normalizer_fn=None
)
```
#### Example:

```
 temperature = sequence_numeric_column('temperature')
columns = [temperature]

features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
sequence_feature_layer = SequenceFeatures(columns)
sequence_input, sequence_length = sequence_feature_layer(features)
sequence_length_mask = tf.sequence_mask(sequence_length)

rnn_cell = tf.keras.layers.SimpleRNNCell(hidden_size)
rnn_layer = tf.keras.layers.RNN(rnn_cell)
outputs, state = rnn_layer(sequence_input, mask=sequence_length_mask)
```
#### Args:
- key: A unique string identifying the input features.
- shape: The shape of the input data per sequence id. E.g. if shape=(2,), each example must contain 2 * sequence_length values.
- default_value: A single value compatible with dtype that is used for padding the sparse data into a dense Tensor.
- dtype: The type of values.
- normalizer_fn: If not None, a function that can be used to normalize the value of the tensor after default_value is applied for parsing. Normalizer function takes the input Tensor as its argument, and returns the output Tensor. (e.g. lambda x: (x - 3.0) / 4.2). Please note that even though the most common use case of this function is normalization, it can be used for any kind of Tensorflow transformations.
#### Returns:
A SequenceNumericColumn.
#### Raises:
- TypeError: if any dimension in shape is not an int.
- ValueError: if any dimension in shape is not a positive integer.
- ValueError: if dtype is not convertible to tf.float32.
