## Class MultiRNNCell
RNN cell composed sequentially of multiple simple cells.
Inherits From: `RNNCell`
#### Example:

```
 num_units = [128, 64]
cells = [BasicLSTMCell(num_units=n) for n in num_units]
stacked_rnn_cell = MultiRNNCell(cells)
```
## __init__
View source

```
 __init__(
    cells,
    state_is_tuple=True
)
```
Create a RNN cell composed sequentially of a number of RNNCells. (deprecated)
#### Args:
- `cells`: list of RNNCells that will be composed in this order.
#### Raises:
- `ValueError`: if cells is empty (not allowed), or at least one of the cells returns a state tuple but the flag `state_is_tuple` is `False`.
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
