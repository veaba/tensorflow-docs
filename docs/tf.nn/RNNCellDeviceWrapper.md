

## Class  `RNNCellDeviceWrapper` 
Operator that ensures an RNNCell runs on a particular device.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/rnn_cell_wrapper_v2.py#L119-L120)

```
 __init__(
    *args,
    **kwargs
)
 
```

Construct a  `DeviceWrapper`  for  `cell`  with device  `device` .

Ensures the wrapped  `cell`  is called with [ `tf.device(device)` ](https://tensorflow.google.cn/api_docs/python/tf/device).

#### Args:
- **`cell`** : An instance of  `RNNCell` .
- **`device`** : A device string or function, for passing to [ `tf.device` ](https://tensorflow.google.cn/api_docs/python/tf/device).
- **`**kwargs`** : dict of keyword arguments for base layer.


## Properties


###  `output_size` 


###  `state_size` 


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_wrapper_impl.py#L428-L431)

```
 zero_state(
    batch_size,
    dtype
)
 
```

