## Class Cropping1D
Cropping layer for 1D input (e.g. temporal sequence).
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Cropping1D`
- Class `tf.compat.v2.keras.layers.Cropping1D`
It crops along the time dimension (axis 1).
#### Arguments:
- `cropping`: Int or tuple of int (length 2) How many units should be trimmed off at the beginning and end of the `cropping` dimension (axis 1). If a single int is provided, the same value will be used for both.
#### Input shape:
3D tensor with shape `batch, axis_to_crop, features)`
#### Output shape:
3D tensor with shape `batch, cropped_axis, features)`
## __init__
View source

```
 __init__(
    cropping=(1, 1),
    **kwargs
)
```
