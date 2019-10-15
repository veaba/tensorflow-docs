## Class SpatialDropout1D

Spatial 1D version of Dropout.
[Dropout](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dropout)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.SpatialDropout1D`
- Class `tf.compat.v2.keras.layers.SpatialDropout1D`

This version performs the same function as Dropout, however it drops entire 1D feature maps instead of individual elements. If adjacent frames within feature maps are strongly correlated (as is normally the case in early convolution layers) then regular dropout will not regularize the activations and will otherwise just result in an effective learning rate decrease. In this case, SpatialDropout1D will help promote independence between feature maps and should be used instead.
#### Arguments:
- `rate`: Float between 0 and 1. Fraction of the input units to drop.
#### Call arguments:
- `inputs`: A 3D tensor.
- `training`: Python boolean indicating whether the layer should behave in `training` mode (adding dropout) or in inference mode (doing nothing).
#### Input shape:

3D tensor with shape: (samples, timesteps, channels)
#### Output shape:

Same as input.
#### References:
- ``E``f``f``i``c``i``e``n``t`` ``O``b``j``e``c``t`` ``L``o``c``a``l``i``z``a``t``i``o``n`` ``U``s``i``n``g`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``N``e``t``w``o``r``k``s``
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L214-L216)


```
 __init__(
    rate,
    **kwargs
)
```
