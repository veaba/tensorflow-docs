Extracts a glimpse from the input tensor.
### Aliases:
- `tf.compat.v2.image.extract_glimpse`

```
 tf.image.extract_glimpse(
    input,
    size,
    offsets,
    centered=True,
    normalized=True,
    noise='uniform',
    name=None
)
```
Returns a set of windows called glimpses extracted at location `offsets` from the input tensor. If the windows only partially overlaps the inputs, the non overlapping areas will be filled with random noise.
The result is a 4-D tensor of shape `[batch_size, glimpse_height, glimpse_width, channels]`. The channels and batch dimensions are the same as that of the input tensor. The height and width of the output windows are specified in the `size` parameter.
The argument `normalized` and `centered` controls how the windows are built:
- ``I``f`` ``t``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``a``r``e`` ``n``o``r``m``a``l``i``z``e``d`` ``b``u``t`` ``n``o``t`` ``c``e``n``t``e``r``e``d``,`` ``0``.``0`` ``a``n``d`` ``1``.``0`` ``c``o``r``r``e``s``p``o``n``d`` ``t``o`` ``t``h``e`` ``m``i``n``i``m``u``m`` ``a``n``d`` ``m``a``x``i``m``u``m`` ``o``f`` ``e``a``c``h`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i``m``e``n``s``i``o``n``.``
- ``I``f`` ``t``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``a``r``e`` ``b``o``t``h`` ``n``o``r``m``a``l``i``z``e``d`` ``a``n``d`` ``c``e``n``t``e``r``e``d``,`` ``t``h``e``y`` ``r``a``n``g``e`` ``f``r``o``m`` ``-``1``.``0`` ``t``o`` ``1``.``0``.`` ``T``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``(``-``1``.``0``,`` ``-``1``.``0``)`` ``c``o``r``r``e``s``p``o``n``d`` ``t``o`` ``t``h``e`` ``u``p``p``e``r`` ``l``e``f``t`` ``c``o``r``n``e``r``,`` ``t``h``e`` ``l``o``w``e``r`` ``r``i``g``h``t`` ``c``o``r``n``e``r`` ``i``s`` ``l``o``c``a``t``e``d`` ``a``t`` ``(``1``.``0``,`` ``1``.``0``)`` ``a``n``d`` ``t``h``e`` ``c``e``n``t``e``r`` ``i``s`` ``a``t`` ``(``0``,`` ``0``)``.``
- ``I``f`` ``t``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``a``r``e`` ``n``o``t`` ``n``o``r``m``a``l``i``z``e``d`` ``t``h``e``y`` ``a``r``e`` ``i``n``t``e``r``p``r``e``t``e``d`` ``a``s`` ``n``u``m``b``e``r``s`` ``o``f`` ``p``i``x``e``l``s``.``
#### Args:
- `input`: A `Tensor` of type `float32`. A 4-D float tensor of shape `[batch_size, height, width, channels]`.
- `size`: A `Tensor` of type `int32`. A 1-D tensor of 2 elements containing the `size` of the glimpses to extract. The glimpse height must be specified first, following by the glimpse width.
- `offsets`: A `Tensor` of type `float32`. A 2-D integer tensor of shape `[batch_size, 2]` containing the y, x locations of the center of each window.
- `centered`: An optional `bool`. Defaults to `True`. indicates if the offset coordinates are `centered` relative to the image, in which case the (0, 0) offset is relative to the center of the input images. If false, the (0,0) offset corresponds to the upper left corner of the input images.
- `normalized`: An optional `bool`. Defaults to `True`. indicates if the offset coordinates are `normalized`.
- `noise`: An optional `string`. Defaults to `uniform`. indicates if the `noise` should be `uniform` (`uniform` distribution), `gaussian` (`gaussian` distribution), or `zero` (`zero` padding).
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `float32`.
#### Usage Example:

```
 BATCH_SIZE = 1
IMAGE_HEIGHT = 3
IMAGE_WIDTH = 3
CHANNELS = 1
GLIMPSE_SIZE = (2, 2)
image = tf.reshape(tf.range(9, delta=1, dtype=tf.float32),
  shape=(BATCH_SIZE, IMAGE_HEIGHT, IMAGE_WIDTH, CHANNELS))
output = tf.image.extract_glimpse(image, size=GLIMPSE_SIZE,
  offsets=[[1, 1]], centered=False, normalized=False)
 ```
```
