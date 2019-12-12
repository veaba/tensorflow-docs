

## Class  `Activation` 
对输出应用激活函数。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Activation` ](/api_docs/python/tf/keras/layers/Activation), [ `tf.compat.v2.keras.layers.Activation` ](/api_docs/python/tf/keras/layers/Activation)

### 在指南中使用：
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)


#### 参数：
- **`activation`** : Activation function, such as [ `tf.nn.relu` ](https://tensorflow.google.cn/api_docs/python/tf/nn/relu), or string name ofbuilt-in activation function, such as "relu".


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L358-L361)

```
 __init__(
    activation,
    **kwargs
)
 
```

