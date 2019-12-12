

## Class  `Wrapper` 
抽象包装基类。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Wrapper` ](/api_docs/python/tf/keras/layers/Wrapper), [ `tf.compat.v2.keras.layers.Wrapper` ](/api_docs/python/tf/keras/layers/Wrapper)

Wrappers take another layer and augment it in various ways.Do not use this class as a layer, it is only an abstract base class.Two usable wrappers are the  `TimeDistributed`  and  `Bidirectional`  wrappers.

#### 参数：
- **`layer`** : The layer to be wrapped.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/wrappers.py#L50-L57)

```
 __init__(
    layer,
    **kwargs
)
 
```

