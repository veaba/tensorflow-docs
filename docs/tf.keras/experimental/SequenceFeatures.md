

## Class  `SequenceFeatures` 
A layer for sequence input.

**别名** : [ `tf.compat.v1.keras.experimental.SequenceFeatures` ](/api_docs/python/tf/keras/experimental/SequenceFeatures), [ `tf.compat.v2.keras.experimental.SequenceFeatures` ](/api_docs/python/tf/keras/experimental/SequenceFeatures)

All  `feature_columns`  must be sequence dense columns with the same `sequence_length` . The output of this method can be fed into sequencenetworks, such as RNN.

The output of this method is a 3D  `Tensor`  of shape  `[batch_size, T, D]` . `T`  is the maximum sequence length for this batch, which could differ frombatch to batch.

If multiple  `feature_columns`  are given with  `Di`   `num_elements`  each, theiroutputs are concatenated. So, the final  `Tensor`  has shape `[batch_size, T, D0 + D1 + ... + Dn]` .

#### 示例：


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

#### 参数：
- **`feature_columns`** : An iterable of dense sequence columns. Valid columns are
- **`trainable`** : Boolean, whether the layer's variables will be updated viagradient descent during training.
- **`name`** : Name to give to the SequenceFeatures.
- **`**kwargs`** : Keyword arguments to construct a layer.
    -  `embedding_column`  that wraps a  `sequence_categorical_column_with_*` 
    -  `sequence_numeric_column` .


#### 加薪：
- **`ValueError`** : If any of the  `feature_columns`  is not a `SequenceDenseColumn` .
