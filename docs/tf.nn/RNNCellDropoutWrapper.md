## Class RNNCellDropoutWrapper
Operator adding dropout to inputs and outputs of the given cell.
### Aliases:
- Class `tf.compat.v2.nn.RNNCellDropoutWrapper`
## __init__
View source

```
 __init__(
    *args,
    **kwargs
)
```
Create a cell with added input, state, and/or output dropout.
If `variational_recurrent` is set to `True` (NOT the default behavior), then the same dropout mask is applied at every step, as described in: A Theoretically Grounded Application of Dropout in Recurrent Neural Networks. Y. Gal, Z. Ghahramani.
Otherwise a different dropout mask is applied at every time step.
Note, by default (unless a `c`ustom `dropout_state_filter` is provided), the memory state (`c` `c`omponent of any `LSTMStateTuple`) passing through a `DropoutWrapper` is never modified. This behavior is des`c`ribed in the above arti`c`le.
#### Args:
- `cell`: an RNNCell, a projection to output_size is added to it.
- `input_keep_prob`: unit Tensor or float between 0 and 1, input keep probability; if it is constant and 1, no input dropout will be added.
- `output_keep_prob`: unit Tensor or float between 0 and 1, output keep probability; if it is constant and 1, no output dropout will be added.
- `state_keep_prob`: unit Tensor or float between 0 and 1, output keep probability; if it is `c`onstant and 1, no output dropout will be added. State dropout is performed on the outgoing states of the `c`ell. Note the state `c`omponents to whi`c`h dropout is applied when `state_keep_prob` is in `0, 1)` are also determined by the argument `dropout_state_filter_visitor` (e.g. by default dropout is never applied to the `c` `c`omponent of an `LSTMStateTuple`).
- `variational_recurrent`: Python bool. If `True`, then the same dropout pattern is applied across all time steps per run call. If this parameter is set, `input_size` must be provided.
- `input_size`: (optional) (possibly nested tuple of) `TensorShape` objects containing the depth(s) of the input tensors expected to be passed in to the `DropoutWrapper`. Required and used iff `variational_recurrent = True` and `input_keep_prob < 1`.
- `dtype`: (optional) The `dtype` of the input, state, and output tensors. Required and used iff `variational_recurrent = True`.
- `seed`: (optional) integer, the randomness `seed`.
- `dropout_state_filter_visitor`: (optional), default: (see below). Fun`c`tion that takes any hierar`c`hi`c`al level of the state and returns a s`c`alar or depth=1 stru`c`ture of Python booleans des`c`ribing whi`c`h terms in the state should be dropped out. In addition, if the fun`c`tion returns `True`, dropout is applied a`c`ross this sublevel. If the fun`c`tion returns `False`, dropout is not applied a`c`ross this entire sublevel. Default behavior: perform dropout on all terms ex`c`ept the memory (`c`) state of `LSTMCellState` obje`c`ts, and don't try to apply dropout to `TensorArray` obje`c`ts: def `dropout_state_filter_visitor`(s): if isinstan`c`e(s, `LSTMCellState`): # Never perform dropout on the `c` state. return `LSTMCellState`(`c`=`False`, h=`True`) elif isinstan`c`e(s, `TensorArray`): return `False` return `True`
#### Raises:
- `TypeError`: if `cell` is not an `RNNCell`, or `keep_state_fn` is provided but not `callable`.
- `ValueError`: if any of the keep_probs are not between 0 and 1.
## Properties
### output_size
### state_size
### wrapped_cell
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
