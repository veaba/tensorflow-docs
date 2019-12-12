

## Class  `Softmax` 
SoftMax激活功能。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Softmax` ](/api_docs/python/tf/keras/layers/Softmax), [ `tf.compat.v2.keras.layers.Softmax` ](/api_docs/python/tf/keras/layers/Softmax)

#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

#### 参数：
- **`axis`** : Integer, axis along which the softmax normalization is applied.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L254-L257)

```
 __init__(
    axis=-1,
    **kwargs
)
 
```

