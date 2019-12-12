

## Class  `RNNCellDropoutWrapper` 
Operator adding dropout to inputs and outputs of the given cell.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/rnn_cell_wrapper_v2.py#L97-L98)

```
 __init__(
    *args,
    **kwargs
)
 
```

Create a cell with added input, state, and/or output dropout.

If  `variational_recurrent`  is set to  `True`  (**NOT**  the default behavior),then the same dropout mask is applied at every step, as described in:[A Theoretically Grounded Application of Dropout in RecurrentNeural Networks. Y. Gal, Z. Ghahramani](https://arxiv.org/abs/1512.05287).

Otherwise a different dropout mask is applied at every time step.

Note, by default (unless a custom  `dropout_state_filter`  is provided),the memory state ( `c`  component of any  `LSTMStateTuple` ) passing througha  `DropoutWrapper`  is never modified.  This behavior is described in theabove article.

#### Args:
- **`cell`** : an RNNCell, a projection to output_size is added to it.
- **`input_keep_prob`** : unit Tensor or float between 0 and 1, input keepprobability; if it is constant and 1, no input dropout will be added.
- **`output_keep_prob`** : unit Tensor or float between 0 and 1, output keepprobability; if it is constant and 1, no output dropout will be added.
- **`state_keep_prob`** : unit Tensor or float between 0 and 1, output keepprobability; if it is constant and 1, no output dropout will be added.State dropout is performed on the outgoing states of the cell. **Note** the state components to which dropout is applied when  `state_keep_prob` is in  `(0, 1)`  are also determined by the argument `dropout_state_filter_visitor`  (e.g. by default dropout is never appliedto the  `c`  component of an  `LSTMStateTuple` ).
- **`variational_recurrent`** : Python bool.  If  `True` , then the same dropoutpattern is applied across all time steps per run call. If this parameteris set,  `input_size`  **must**  be provided.
- **`input_size`** : (optional) (possibly nested tuple of)  `TensorShape`  objectscontaining the depth(s) of the input tensors expected to be passed in tothe  `DropoutWrapper` .  Required and used **iff**   `variational_recurrent= True`  and  `input_keep_prob < 1` .
- **`dtype`** : (optional) The  `dtype`  of the input, state, and output tensors.Required and used **iff**   `variational_recurrent = True` .
- **`seed`** : (optional) integer, the randomness seed.
- **`dropout_state_filter_visitor`** : (optional), default: (see below).  Functionthat takes any hierarchical level of the state and returns a scalar ordepth=1 structure of Python booleans describing which terms in the stateshould be dropped out.  In addition, if the function returns  `True` ,dropout is applied across this sublevel.  If the function returns `False` , dropout is not applied across this entire sublevel.Default behavior: perform dropout on all terms except the memory ( `c` )state of  `LSTMCellState`  objects, and don't try to apply dropout to `TensorArray`  objects:  `def dropout_state_filter_visitor(s):if isinstance(s, LSTMCellState): # Never perform dropout on the c  state. return LSTMCellState(c=False, h=True)elif isinstance(s, TensorArray): return False return True` 
- **`**kwargs`** : dict of keyword arguments for base layer.


#### Raises:
- **`TypeError`** : if  `cell`  is not an  `RNNCell` , or  `keep_state_fn`  is providedbut not  `callable` .
- **`ValueError`** : if any of the keep_probs are not between 0 and 1.


## Properties


###  `output_size` 


###  `state_size` 


###  `wrapped_cell` 


## Methods


###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L976-L977)

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
 
```

###  `zero_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_wrapper_impl.py#L197-L199)

```
 zero_state(
    batch_size,
    dtype
)
 
```

