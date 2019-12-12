

## Class  `SpatialDropout2D` 
辍学的空间二维版本。

Inherits From: [ `Dropout` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dropout)

**别名** : [ `tf.compat.v1.keras.layers.SpatialDropout2D` ](/api_docs/python/tf/keras/layers/SpatialDropout2D), [ `tf.compat.v2.keras.layers.SpatialDropout2D` ](/api_docs/python/tf/keras/layers/SpatialDropout2D)

This version performs the same function as Dropout, however it dropsentire 2D feature maps instead of individual elements. If adjacent pixelswithin feature maps are strongly correlated (as is normally the case inearly convolution layers) then regular dropout will not regularize theactivations and will otherwise just result in an effective learning ratedecrease. In this case, SpatialDropout2D will help promote independencebetween feature maps and should be used instead.

#### 参数：
- **`rate`** : Float between 0 and 1. Fraction of the input units to drop.
- **`data_format`** : 'channels_first' or 'channels_last'.In 'channels_first' mode, the channels dimension(the depth) is at index 1,in 'channels_last' mode is it at index 3.It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### 调用参数：
- **`inputs`** : A 4D tensor.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


#### 输入形状：
4D tensor with shape: `(samples, channels, rows, cols)`  if data_format='channels_first'or 4D tensor with shape: `(samples, rows, cols, channels)`  if data_format='channels_last'.

#### 输出形状：
与输入相同。

#### 参考文献：
- [Efficient Object Localization Using ConvolutionalNetworks](https://arxiv.org/abs/1411.4280)


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L265-L273)

```
 __init__(
    rate,
    data_format=None,
    **kwargs
)
 
```

