## Class TfLiteRNNCell
The most basic RNN cell.
This is used only for TfLite, it provides hints and it also makes the variables in the desired for the tflite ops.
## __init__
View source

```
 __init__(
    num_units,
    activation=None,
    reuse=None,
    name=None,
    dtype=None,
    **kwargs
)
```
Initializes the parameters for an RNN cell.
#### Args:
- `num_units`: int, The number of units in the RNN cell.
- `activation`: Nonlinearity to use. Default: `tanh`. It could also be string that is within Keras `activation` function names.
- `reuse`: (optional) Python boolean describing whether to `reuse` variables in an existing scope. Raises an error if not `True` and the existing scope already has the given variables.
- `name`: String, the `name` of the layer. Layers with the same `name` will share weights, but to avoid mistakes we require reuse=True in such cases.
- `dtype`: Default `dtype` of the layer (default of `None` means use the type of the first input). Required when `build` is `call`ed before `call`.
#### Raises:
- `ValueError`: If the existing scope already has the given variables.
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
