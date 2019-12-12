

## Class  `SpatialDropout1D` 
Spatial 1D version of Dropout.

Inherits From: [ `Dropout` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dropout)

**Aliases** : [ `tf.compat.v1.keras.layers.SpatialDropout1D` ](/api_docs/python/tf/keras/layers/SpatialDropout1D), [ `tf.compat.v2.keras.layers.SpatialDropout1D` ](/api_docs/python/tf/keras/layers/SpatialDropout1D)

This version performs the same function as Dropout, however it dropsentire 1D feature maps instead of individual elements. If adjacent frameswithin feature maps are strongly correlated (as is normally the case inearly convolution layers) then regular dropout will not regularize theactivations and will otherwise just result in an effective learning ratedecrease. In this case, SpatialDropout1D will help promote independencebetween feature maps and should be used instead.

#### Arguments:
- **`rate`** : Float between 0 and 1. Fraction of the input units to drop.


#### Call arguments:
- **`inputs`** : A 3D tensor.
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


#### Input shape:
3D tensor with shape: `(samples, timesteps, channels)` 

#### Output shape:
Same as input.

#### References:
- [Efficient Object Localization Using ConvolutionalNetworks](https://arxiv.org/abs/1411.4280)


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L214-L216)

```
 __init__(
    rate,
    **kwargs
)
 
```

