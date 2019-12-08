

## Class  `DropoutWrapper` 
Operator adding dropout to inputs and outputs of the given cell.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1170-L1171)



```
 __init__(
    *args,
    **kwargs
)
 
```

Create a cell with added input, state, and/or output dropout.

If  `variational_recurrent`  is set to  `True`  (**NOT**  the default behavior),
then the same dropout mask is applied at every step, as described in:
<a href="https://arxiv.org/abs/1512.05287">A Theoretically Grounded Application of Dropout in Recurrent
Neural Networks. Y. Gal, Z. Ghahramani</a>.

Otherwise a different dropout mask is applied at every time step.

Note, by default (unless a custom  `dropout_state_filter`  is provided),
the memory state ( `c`  component of any  `LSTMStateTuple` ) passing through
a  `DropoutWrapper`  is never modified.  This behavior is described in the
above article.



#### Args:

- **`cell`** : an RNNCell, a projection to output_size is added to it.

- **`input_keep_prob`** : unit Tensor or float between 0 and 1, input keep
probability; if it is constant and 1, no input dropout will be added.

- **`output_keep_prob`** : unit Tensor or float between 0 and 1, output keep
probability; if it is constant and 1, no output dropout will be added.

- **`state_keep_prob`** : unit Tensor or float between 0 and 1, output keep
probability; if it is constant and 1, no output dropout will be added.
State dropout is performed on the outgoing states of the cell. **Note** 
the state components to which dropout is applied when  `state_keep_prob` 
is in  `(0, 1)`  are also determined by the argument
 `dropout_state_filter_visitor`  (e.g. by default dropout is never applied
to the  `c`  component of an  `LSTMStateTuple` ).

- **`variational_recurrent`** : Python bool.  If  `True` , then the same dropout
pattern is applied across all time steps per run call. If this parameter
is set,  `input_size`  **must**  be provided.

- **`input_size`** : (optional) (possibly nested tuple of)  `TensorShape`  objects
containing the depth(s) of the input tensors expected to be passed in to
the  `DropoutWrapper` .  Required and used **iff**  <code translate="no" dir="ltr">variational_recurrent
= True</code> and  `input_keep_prob < 1` .

- **`dtype`** : (optional) The  `dtype`  of the input, state, and output tensors.
Required and used **iff**   `variational_recurrent = True` .

- **`seed`** : (optional) integer, the randomness seed.

- **`dropout_state_filter_visitor`** : (optional), default: (see below).  Function
that takes any hierarchical level of the state and returns a scalar or
depth=1 structure of Python booleans describing which terms in the state
should be dropped out.  In addition, if the function returns  `True` ,
dropout is applied across this sublevel.  If the function returns
 `False` , dropout is not applied across this entire sublevel.
Default behavior: perform dropout on all terms except the memory ( `c` )
state of  `LSTMCellState`  objects, and don't try to apply dropout to
 `TensorArray`  objects: <code translate="no" dir="ltr">def dropout_state_filter_visitor(s):
if isinstance(s, LSTMCellState): # Never perform dropout on the c
  state. return LSTMCellState(c=False, h=True)
elif isinstance(s, TensorArray): return False return True</code>

- **`**kwargs`** : dict of keyword arguments for base layer.



#### Raises:

- **`TypeError`** : if  `cell`  is not an  `RNNCell` , or  `keep_state_fn`  is provided
but not  `callable` .

- **`ValueError`** : if any of the keep_probs are not between 0 and 1.



## Properties


###  `graph` 
DEPRECATED FUNCTION


<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Stop using this property because tf.layers layers no longer track their graph.</aside>


###  `output_size` 


###  `scope_name` 


###  `state_size` 


###  `wrapped_cell` 


## Methods


###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)



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

