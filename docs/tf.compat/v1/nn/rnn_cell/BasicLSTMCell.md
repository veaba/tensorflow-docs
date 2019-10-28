## Class BasicLSTMCell
DEPRECATED: Please use `tf.compat.v1.nn.rnn_cell.LSTMCell` instead.
Basic LSTM recurrent network cell.
The implementation is based on: http://arxiv.org/abs/1409.2329.
We add forget_bias (default: 1) to the biases of the forget gate in order to reduce the scale of forgetting in the beginning of the training.
It does not allow cell clipping, a projection layer, and does not use peep-hole connections: it is the basic baseline.
For advanced models, please use the full `tf.compat.v1.nn.rnn_cell.LSTMCell` that follows.
Note that this cell is not optimized for performance. Please use `tf.contrib.cudnn_rnn.CudnnLSTM` for better performance on GPU, or `tf.contrib.rnn.LSTMBlockCell` and `tf.contrib.rnn.LSTMBlockFusedCell` for better performance on CPU.
## __init__
View source

```
 __init__(
    num_units,
    forget_bias=1.0,
    state_is_tuple=True,
    activation=None,
    reuse=None,
    name=None,
    dtype=None,
    **kwargs
)
```
Initialize the basic LSTM cell. (deprecated)
#### Args:
- `num_units`: int, The number of units in the LSTM cell.
- `forget_bias`: float, The bias added to forget gates (see above). Must set to `0.0` manually when restoring from CudnnLSTM-trained checkpoints.
- `state_is_tuple`: If True, accepted and returned states are 2-tuples of the `c_state` and `m_state`. If False, they are concatenated along the column axis. The latter behavior will soon be deprecated.
- `activation`: Activation function of the inner states. Default: `tanh`. It could also be string that is within Keras `activation` function names.
- `reuse`: (optional) Python boolean describing whether to `reuse` variables in an existing scope. If not `True`, and the existing scope already has the given variables, an error is raised.
- `name`: String, the `name` of the layer. Layers with the same `name` will share weights, but to avoid mistakes we require reuse=True in such cases.
- `dtype`: Default `dtype` of the layer (default of `None` means use the type of the first input). Required when `build` is `call`ed before `call`.
## Properties
### graph
DEPRECATED FUNCTION
### output_size
Integer or TensorShape: size of outputs produced by this cell.
### scope_name
### state_size
size(s) of state(s) used by this cell.
It can be represented by an Integer, a TensorShape or a tuple of Integers or TensorShapes.
## Methods
### get_initial_state
View source

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
### zero_state
View source

```
 zero_state(
    batch_size,
    dtype
)
```
Return zero-filled state tensor(s).
#### Args:
- `batch_size`: int, float, or unit Tensor representing the batch size.
- `dtype`: the data type to use for the state.
#### Returns:
If `state_size` is an int or TensorShape, then the return value is a `N-D` tensor of shape `[batch_size, state_size]` filled with zeros.
If `state_size` is a nested list or tuple, then the return value is a nested list or tuple (of the same structure) of `2-D` tensors with the shapes `[batch_size, s]` for each s in `state_size`.
