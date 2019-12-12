

## Class  `AveragePooling1D` 
1D输入的平均池层。

Inherits From: [ `AveragePooling1D` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/AveragePooling1D), [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

#### 参数：
- **`pool_size`** : An integer or tuple/list of a single integer,representing the size of the pooling window.
- **`strides`** : An integer or tuple/list of a single integer, specifying thestrides of the pooling operation.
- **`padding`** : A string. The padding method, either 'valid' or 'same'.Case-insensitive.
- **`data_format`** : A string, one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, length, channels)`  while  `channels_first`  corresponds toinputs with shape  `(batch, channels, length)` .
- **`name`** : A string, the name of the layer.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L47-L58)

```
 __init__(
    pool_size,
    strides,
    padding='valid',
    data_format='channels_last',
    name=None,
    **kwargs
)
 
```

## 属性


###  `graph` 
不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `scope_name` 
