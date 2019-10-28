Converts a 3D Numpy array to a PIL Image instance.
### Aliases:
- `tf.compat.v1.keras.preprocessing.image.array_to_img`
- `tf.compat.v2.keras.preprocessing.image.array_to_img`

```
 tf.keras.preprocessing.image.array_to_img(
    x,
    data_format=None,
    scale=True,
    dtype=None
)
```
### Used in the tutorials:
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
#### Arguments:
- `x`: Input Numpy array.
- `data_format`: Image data format. either "channels_first" or "channels_last".
- `scale`: Whether to re`scale` image values to be within `[0, 255]`.
- `dtype`: Dtype to use.
#### Returns:
A PIL Image instance.
#### Raises:
- `ImportError`: if PIL is not available.
- `ValueError`: if invalid `x` or `data_format` is passed.
