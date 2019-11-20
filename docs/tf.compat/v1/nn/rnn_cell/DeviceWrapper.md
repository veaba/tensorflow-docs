[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1188-L1194)  
---  
  
## Class `DeviceWrapper`

Operator that ensures an RNNCell runs on a particular device.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L1191-L1192)

    
    
    __init__(
        *args,
        **kwargs
    )
    

Construct a `DeviceWrapper` for `cell` with device `device`.

Ensures the wrapped `cell` is called with
[`tf.device(device)`](https://tensorflow.google.cn/api_docs/python/tf/device).

#### Args:

  * **`cell`** : An instance of `RNNCell`.
  * **`device`** : A device string or function, for passing to [`tf.device`](https://tensorflow.google.cn/api_docs/python/tf/device).
  * **`**kwargs`** : dict of keyword arguments for base layer.

## Properties

### `graph`

DEPRECATED FUNCTION

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Stop using this property because tf.layers
layers no longer track their graph.

### `output_size`

### `scope_name`

### `state_size`

## Methods

### `get_initial_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)

    
    
    get_initial_state(
        inputs=None,
        batch_size=None,
        dtype=None
    )
    

### `zero_state`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_wrapper_impl.py#L428-L431)

    
    
    zero_state(
        batch_size,
        dtype
    )
    

