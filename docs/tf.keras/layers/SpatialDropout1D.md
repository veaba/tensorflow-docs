

## Class  `SpatialDropout1D` 
辍学的空间1D版本。

Inherits From: [ `Dropout` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dropout)

**别名** : [ `tf.compat.v1.keras.layers.SpatialDropout1D` ](/api_docs/python/tf/keras/layers/SpatialDropout1D), [ `tf.compat.v2.keras.layers.SpatialDropout1D` ](/api_docs/python/tf/keras/layers/SpatialDropout1D)

This version performs the same function as Dropout, however it dropsentire 1D feature maps instead of individual elements. If adjacent frameswithin feature maps are strongly correlated (as is normally the case inearly convolution layers) then regular dropout will not regularize theactivations and will otherwise just result in an effective learning ratedecrease. In this case, SpatialDropout1D will help promote independencebetween feature maps and should be used instead.

#### 参数：
- **`rate`** : Float between 0 and 1. Fraction of the input units to drop.


#### 调用参数：
- **`inputs`** : A 3D tensor.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


#### 输入形状：
3D tensor with shape: `(samples, timesteps, channels)` 

#### 输出形状：
与输入相同。

#### 参考文献：
- [Efficient Object Localization Using ConvolutionalNetworks](https://arxiv.org/abs/1411.4280)


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L214-L216)

```
 __init__(
    rate,
    **kwargs
)
 
```

