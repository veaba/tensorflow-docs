

## Class  `GaussianNoise` 
Apply additive zero-centered Gaussian noise.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.GaussianNoise` ](/api_docs/python/tf/keras/layers/GaussianNoise), [ `tf.compat.v2.keras.layers.GaussianNoise` ](/api_docs/python/tf/keras/layers/GaussianNoise)

This is useful to mitigate overfitting(you could see it as a form of random data augmentation).Gaussian Noise (GS) is a natural choice as corruption processfor real valued inputs.

As it is a regularization layer, it is only active at training time.

#### 参数：
- **`stddev`** : Float, standard deviation of the noise distribution.


#### 调用参数：
- **`inputs`** : Input tensor (of any rank).
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding noise) or in inference mode (doing nothing).


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/noise.py#L59-L62)

```
 __init__(
    stddev,
    **kwargs
)
 
```

