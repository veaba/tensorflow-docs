

## Class  `SequenceFeatures` 
A layer for sequence input.



### Aliases:

- Class [ `tf.compat.v1.keras.experimental.SequenceFeatures` ](/api_docs/python/tf/keras/experimental/SequenceFeatures)

- Class [ `tf.compat.v2.keras.experimental.SequenceFeatures` ](/api_docs/python/tf/keras/experimental/SequenceFeatures)

All  `feature_columns`  must be sequence dense columns with the same
 `sequence_length` . The output of this method can be fed into sequence
networks, such as RNN.

The output of this method is a 3D  `Tensor`  of shape  `[batch_size, T, D]` .
 `T`  is the maximum sequence length for this batch, which could differ from
batch to batch.

If multiple  `feature_columns`  are given with  `Di`   `num_elements`  each, their
outputs are concatenated. So, the final  `Tensor`  has shape
 `[batch_size, T, D0 + D1 + ... + Dn]` .



#### Example:


```
 rating = sequence_numeric_column('rating')
watches = sequence_categorical_column_with_identity(
    'watches', num_buckets=1000)
watches_embedding = embedding_column(watches, dimension=10)
columns = [rating, watches_embedding]

sequence_input_layer = SequenceFeatures(columns)
features = tf.io.parse_example(...,
                               features=make_parse_example_spec(columns))
sequence_input, sequence_length = sequence_input_layer(features)
sequence_length_mask = tf.sequence_mask(sequence_length)

rnn_cell = tf.keras.layers.SimpleRNNCell(hidden_size)
rnn_layer = tf.keras.layers.RNN(rnn_cell)
outputs, state = rnn_layer(sequence_input, mask=sequence_length_mask)
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/feature_column/sequence_feature_column.py#L81-L107)



```
 __init__(
    feature_columns,
    trainable=True,
    name=None,
    **kwargs
)
 
```

"Constructs a SequenceFeatures layer.



#### Args:

- **`feature_columns`** : An iterable of dense sequence columns. Valid columns are


- **`trainable`** : Boolean, whether the layer's variables will be updated via
gradient descent during training.

- **`name`** : Name to give to the SequenceFeatures.

- **`**kwargs`** : Keyword arguments to construct a layer.


    -  `embedding_column`  that wraps a  `sequence_categorical_column_with_*` 

    -  `sequence_numeric_column` .



#### Raises:

- **`ValueError`** : If any of the  `feature_columns`  is not a
 `SequenceDenseColumn` .

