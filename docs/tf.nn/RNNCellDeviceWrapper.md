

## Class  `RNNCellDeviceWrapper` 
确保RNNCell在特定设备上运行的运算符。

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

#### 参数：
- **`cell`** : An instance of  `RNNCell` .
- **`device`** : A device string or function, for passing to [ `tf.device` ](https://tensorflow.google.cn/api_docs/python/tf/device).
- **`**kwargs`** : dict of keyword arguments for base layer.


## 属性


###  `output_size` 


###  `state_size` 


## 方法


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

