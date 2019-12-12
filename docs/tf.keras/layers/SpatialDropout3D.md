

## Class  `SpatialDropout3D` 
空间三维版本的辍学。

Inherits From: [ `Dropout` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dropout)

**别名** : [ `tf.compat.v1.keras.layers.SpatialDropout3D` ](/api_docs/python/tf/keras/layers/SpatialDropout3D), [ `tf.compat.v2.keras.layers.SpatialDropout3D` ](/api_docs/python/tf/keras/layers/SpatialDropout3D)

This version performs the same function as Dropout, however it dropsentire 3D feature maps instead of individual elements. If adjacent voxelswithin feature maps are strongly correlated (as is normally the case inearly convolution layers) then regular dropout will not regularize theactivations and will otherwise just result in an effective learning ratedecrease. In this case, SpatialDropout3D will help promote independencebetween feature maps and should be used instead.

#### 参数：
- **`rate`** : Float between 0 and 1. Fraction of the input units to drop.
- **`data_format`** : 'channels_first' or 'channels_last'.In 'channels_first' mode, the channels dimension (the depth)is at index 1, in 'channels_last' mode is it at index 4.It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### 调用参数：
- **`inputs`** : A 5D tensor.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


#### 输入形状：
5D tensor with shape: `(samples, channels, dim1, dim2, dim3)`  if data_format='channels_first'or 5D tensor with shape: `(samples, dim1, dim2, dim3, channels)`  if data_format='channels_last'.

#### 输出形状：
与输入相同。

#### 参考文献：
- [Efficient Object Localization Using ConvolutionalNetworks](https://arxiv.org/abs/1411.4280)


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L323-L331)

```
 __init__(
    rate,
    data_format=None,
    **kwargs
)
 
```

