

## Class  `ELU` 
指数线性单位。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.ELU` ](/api_docs/python/tf/keras/layers/ELU), [ `tf.compat.v2.keras.layers.ELU` ](/api_docs/python/tf/keras/layers/ELU)

#### 它如下：
 `f(x) =  alpha * (exp(x) - 1.) for x < 0` , `f(x) = x for x >= 0` .

#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

#### 参数：
- **`alpha`** : Scale for the negative factor.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L181-L184)

```
 __init__(
    alpha=1.0,
    **kwargs
)
 
```

