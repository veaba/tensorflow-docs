## Class GRUCell
Gated Recurrent Unit cell (cf.
http://arxiv.org/abs/1406.1078).
Note that this cell is not optimized for performance. Please use tf.contrib.cudnn_rnn.CudnnGRU for better performance on GPU, or tf.contrib.rnn.GRUBlockCellV2 for better performance on CPU.
#### Args:
- num_units: int, The number of units in the GRU cell.
- activation: Nonlinearity to use. Default: tanh.
- reuse: (optional) Python boolean describing whether to reuse variables in an existing scope. If not True, and the existing scope already has the given variables, an error is raised.
- kernel_initializer: (optional) The initializer to use for the weight and projection matrices.
- bias_initializer: (optional) The initializer to use for the bias.
- name: String, the name of the layer. Layers with the same name will share weights, but to avoid mistakes we require reuse=True in such cases.
- dtype: Default dtype of the layer (default of None means use the type of the first input). Required when build is called before call.
- **kwargs: Dict, keyword named properties for common layer attributes, like trainable etc when constructing the cell from configs of get_config().
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L510-L539)


```
 __init__(
    num_units,
    activation=None,
    reuse=None,
    kernel_initializer=None,
    bias_initializer=None,
    name=None,
    dtype=None,
    **kwargs
)
```
DEPRECATED FUNCTION
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)


```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
### zero_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L311-L340)


```
 zero_state(
    batch_size,
    dtype
)
```
Return zero-filled state tensor(s).
#### Args:
- batch_size: int, float, or unit Tensor representing the batch size.
- dtype: the data type to use for the state.
#### Returns:
If state_size is an int or TensorShape, then the return value is a N-D tensor of shape [batch_size, state_size] filled with zeros.
If state_size is a nested list or tuple, then the return value is a nested list or tuple (of the same structure) of 2-D tensors with the shapes [batch_size, s] for each s in state_size.
