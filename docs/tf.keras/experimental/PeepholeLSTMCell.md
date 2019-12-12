

## Class  `PeepholeLSTMCell` 
Equivalent to LSTMCell class but adds peephole connections.

Inherits From: [ `LSTMCell` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/layers/LSTMCell)

**Aliases** : [ `tf.compat.v1.keras.experimental.PeepholeLSTMCell` ](/api_docs/python/tf/keras/experimental/PeepholeLSTMCell), [ `tf.compat.v2.keras.experimental.PeepholeLSTMCell` ](/api_docs/python/tf/keras/experimental/PeepholeLSTMCell)

Peephole connections allow the gates to utilize the previous internal state aswell as the previous hidden state (which is what LSTMCell is limited to).This allows PeepholeLSTMCell to better learn precise timings over LSTMCell.

From [Gers et al.](http://www.jmlr.org/papers/volume3/gers02a/gers02a.pdf):

"We find that LSTM augmented by 'peephole connections' from its internalcells to its multiplicative gates can learn the fine distinction betweensequences of spikes spaced either 50 or 49 time steps apart without the helpof any short training exemplars."

The peephole implementation is based on:

[Long short-term memory recurrent neural network architectures for large scale acoustic modeling.](https://research.google.com/pubs/archive/43905.pdf)

#### Example:


```
 # Create 2 PeepholeLSTMCells
peephole_lstm_cells = [PeepholeLSTMCell(size) for size in [128, 256]]
# Create a layer composed sequentially of the peephole LSTM cells.
layer = RNN(peephole_lstm_cells)
input = keras.Input((timesteps, input_dim))
output = layer(input)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L2100-L2148)

```
 __init__(
    units,
    activation='tanh',
    recurrent_activation='hard_sigmoid',
    use_bias=True,
    kernel_initializer='glorot_uniform',
    recurrent_initializer='orthogonal',
    bias_initializer='zeros',
    unit_forget_bias=True,
    kernel_regularizer=None,
    recurrent_regularizer=None,
    bias_regularizer=None,
    kernel_constraint=None,
    recurrent_constraint=None,
    bias_constraint=None,
    dropout=0.0,
    recurrent_dropout=0.0,
    implementation=1,
    **kwargs
)
 
```

## Methods


###  `get_dropout_mask_for_cell` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1033-L1067)

```
 get_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
 
```

Get the dropout mask for RNN cell's input.

It will create mask based on context if there isn't any existing cachedmask. If a new mask is generated, it will update the cache in the cell.

#### Args:
- **`inputs`** : the input tensor whose shape will be used to generate dropoutmask.
- **`training`** : boolean tensor, whether its in training mode, dropout will beignored in non-training mode.
- **`count`** : int, how many dropout mask will be generated. It is useful for cellthat has internal weights fused together.


#### Returns:
List of mask tensor, generated or cached mask based on context.

###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L2312-L2314)

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
 
```

###  `get_recurrent_dropout_mask_for_cell` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1069-L1105)

```
 get_recurrent_dropout_mask_for_cell(
    inputs,
    training,
    count=1
)
 
```

Get the recurrent dropout mask for RNN cell.

It will create mask based on context if there isn't any existing cachedmask. If a new mask is generated, it will update the cache in the cell.

#### Args:
- **`inputs`** : the input tensor whose shape will be used to generate dropoutmask.
- **`training`** : boolean tensor, whether its in training mode, dropout will beignored in non-training mode.
- **`count`** : int, how many dropout mask will be generated. It is useful for cellthat has internal weights fused together.


#### Returns:
List of mask tensor, generated or cached mask based on context.

###  `reset_dropout_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1009-L1019)

```
 reset_dropout_mask()
 
```

Reset the cached dropout masks if any.

This is important for the RNN layer to invoke this in it call() method sothat the cached mask is cleared before calling the cell.call(). The maskshould be cached across the timestep within the same batch, but shouldn'tbe cached between batches. Otherwise it will introduce unreasonable biasagainst certain index of data within the batch.

###  `reset_recurrent_dropout_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L1021-L1031)

```
 reset_recurrent_dropout_mask()
 
```

Reset the cached recurrent dropout masks if any.

This is important for the RNN layer to invoke this in it call() method sothat the cached mask is cleared before calling the cell.call(). The maskshould be cached across the timestep within the same batch, but shouldn'tbe cached between batches. Otherwise it will introduce unreasonable biasagainst certain index of data within the batch.

