

## Class  `LeakyReLU` 
校正线性单元的泄漏版本。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.LeakyReLU` ](/api_docs/python/tf/keras/layers/LeakyReLU), [ `tf.compat.v2.keras.layers.LeakyReLU` ](/api_docs/python/tf/keras/layers/LeakyReLU)

### 在教程中使用：
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
It allows a small gradient when the unit is not active: `f(x) = alpha * x for x < 0` , `f(x) = x for x >= 0` .

#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

#### 参数：
- **`alpha`** : Float >= 0. Negative slope coefficient.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L53-L56)

```
 __init__(
    alpha=0.3,
    **kwargs
)
 
```

