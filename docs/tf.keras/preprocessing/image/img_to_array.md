
Converts a PIL Image instance to a Numpy array.
### Aliases:
- `tf.compat.v1.keras.preprocessing.image.img_to_array`
- `tf.compat.v2.keras.preprocessing.image.img_to_array`

```
 tf.keras.preprocessing.image.img_to_array(
    img,
    data_format=None,
    dtype=None
)
```
### Used in the guide:
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
### Used in the tutorials:
- ``D``e``e``p``D``r``e``a``m``
#### Arguments:
- `img`: PIL Image instance.
- `data_format`: Image data format, either "channels_first" or "channels_last".
- `dtype`: Dtype to use for the returned array.
#### Returns:

A 3D Numpy array.
#### Raises:
- `ValueError`: if invalid `img` or `data_format` is passed.
