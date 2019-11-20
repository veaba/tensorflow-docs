[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L616-L632)  
---  
  
## Class `LSTMStateTuple`

Tuple used by LSTM Cells for `state_size`, `zero_state`, and output state.

Stores two elements: `(c, h)`, in that order. Where `c` is the hidden state
and `h` is the output.

Only used when `state_is_tuple=True`.

## `__new__`

    
    
    __new__(
        _cls,
        c,
        h
    )
    

Create new instance of LSTMStateTuple(c, h)

## Properties

### `c`

### `h`

### `dtype`

