

## Class  `LSTMStateTuple` 
Tuple used by LSTM Cells for  `state_size` ,  `zero_state` , and output state.

Stores two elements:  `(c, h)` , in that order. Where  `c`  is the hidden stateand  `h`  is the output.

Only used when  `state_is_tuple=True` .

##  `__new__` 


```
 __new__(
    _cls,
    c,
    h
)
 
```

Create new instance of LSTMStateTuple(c, h)

## 属性


###  `c` 


###  `h` 


###  `dtype` 
