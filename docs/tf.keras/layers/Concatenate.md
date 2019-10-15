## Class Concatenate

Layer that concatenates a list of inputs.
### Aliases:
- Class `tf.compat.v1.keras.layers.Concatenate`
- Class `tf.compat.v2.keras.layers.Concatenate`
### Used in the tutorials:
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``P``i``x``2``P``i``x``

It takes as input a list of tensors, all of the same shape except for the concatenation axis, and returns a single tensor, the concatenation of all inputs.
#### Arguments:
- `axis`: Axis along which to concatenate.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L368-L372)


```
 __init__(
    axis=-1,
    **kwargs
)
```
