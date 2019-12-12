

## Class  `GaussianDropout` 
Apply multiplicative 1-centered Gaussian noise.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.GaussianDropout` ](/api_docs/python/tf/keras/layers/GaussianDropout), [ `tf.compat.v2.keras.layers.GaussianDropout` ](/api_docs/python/tf/keras/layers/GaussianDropout)

As it is a regularization layer, it is only active at training time.

#### 参数：
- **`rate`** : Float, drop probability (as with  `Dropout` ).The multiplicative noise will havestandard deviation  `sqrt(rate / (1 - rate))` .


#### 调用参数：
- **`inputs`** : Input tensor (of any rank).
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/noise.py#L107-L110)

```
 __init__(
    rate,
    **kwargs
)
 
```

