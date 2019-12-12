

## Class  `MaxPooling3D` 
3D输入的最大池层（如卷）。

Inherits From: [ `MaxPool3D` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/MaxPool3D), [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

#### 参数：
- **`pool_size`** : An integer or tuple/list of 3 integers:(pool_depth, pool_height, pool_width)specifying the size of the pooling window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 3 integers,specifying the strides of the pooling operation.Can be a single integer to specify the same value forall spatial dimensions.
- **`padding`** : A string. The padding method, either 'valid' or 'same'.Case-insensitive.
- **`data_format`** : A string. The ordering of the dimensions in the inputs. `channels_last`  (default) and  `channels_first`  are supported. `channels_last`  corresponds to inputs with shape `(batch, depth, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, depth, height, width)` .
- **`name`** : A string, the name of the layer.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L416-L423)

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
