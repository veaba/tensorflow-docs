## Class LSTMStateTuple
Tuple used by LSTM Cells for `state_size`, `zero_state`, and output state.
Stores two elements: `c, h)`, in t`h`at order. W`h`ere `c` is t`h`e `h`idden state and `h` is t`h`e output.
Only used when `state_is_tuple=True`.
## __new__

```
 __new__(
    _cls,
    c,
    h
)
```
Create new instance of LSTMStateTuple(c, h)
## Properties
### c
### h
### dtype
