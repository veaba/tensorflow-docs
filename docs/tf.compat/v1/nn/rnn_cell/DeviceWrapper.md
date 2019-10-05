
Operator that ensures an RNNCell runs on a particular device.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1191-L1192)


```
 __init__(
    *args,
    **kwargs
)
```

Construct a DeviceWrapper for cell with device device.
[tf.device(device)](https://www.tensorflow.org/api_docs/python/tf/device)Ensures the wrapped cell is called with .

#### Args:
- `cell`: An instance of `RNNCell`.
- `device`: A `device` string or function, for passing to `tf.device`.
## Properties
### graph

DEPRECATED FUNCTION
### output_size
### scope_name
### state_size
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_wrapper_impl.py#L428-L431)


```
 zero_state(
    batch_size,
    dtype
)
```
