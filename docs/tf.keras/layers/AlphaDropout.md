

## Class  `AlphaDropout` 
对输入应用Alpha Dropout。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.AlphaDropout` ](/api_docs/python/tf/keras/layers/AlphaDropout), [ `tf.compat.v2.keras.layers.AlphaDropout` ](/api_docs/python/tf/keras/layers/AlphaDropout)

Alpha Dropout is a  `Dropout`  that keeps mean and variance of inputsto their original values, in order to ensure the self-normalizing propertyeven after this dropout.Alpha Dropout fits well to Scaled Exponential Linear Unitsby randomly setting activations to the negative saturation value.

#### 参数：
- **`rate`** : float, drop probability (as with  `Dropout` ).The multiplicative noise will havestandard deviation  `sqrt(rate / (1 - rate))` .
- **`seed`** : A Python integer to use as random seed.


#### 调用参数：
- **`inputs`** : Input tensor (of any rank).
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/noise.py#L163-L168)

```
 __init__(
    rate,
    noise_shape=None,
    seed=None,
    **kwargs
)
 
```

