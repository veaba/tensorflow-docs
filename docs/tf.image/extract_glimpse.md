
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

Returns a set of windows called glimpses extracted at location offsets from the input tensor. If the windows only partially overlaps the inputs, the non overlapping areas will be filled with random noise.

The result is a 4-D tensor of shape [batch_size, glimpse_height, glimpse_width, channels]. The channels and batch dimensions are the same as that of the input tensor. The height and width of the output windows are specified in the size parameter.

The argument normalized and centered controls how the windows are built:
- ``I``f`` ``t``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``a``r``e`` ``n``o``r``m``a``l``i``z``e``d`` ``b``u``t`` ``n``o``t`` ``c``e``n``t``e``r``e``d``,`` ``0``.``0`` ``a``n``d`` ``1``.``0`` ``c``o``r``r``e``s``p``o``n``d`` ``t``o`` ``t``h``e`` ``m``i``n``i``m``u``m`` ``a``n``d`` ``m``a``x``i``m``u``m`` ``o``f`` ``e``a``c``h`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i``m``e``n``s``i``o``n``.``
- ``I``f`` ``t``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``a``r``e`` ``b``o``t``h`` ``n``o``r``m``a``l``i``z``e``d`` ``a``n``d`` ``c``e``n``t``e``r``e``d``,`` ``t``h``e``y`` ``r``a``n``g``e`` ``f``r``o``m`` ``-``1``.``0`` ``t``o`` ``1``.``0``.`` ``T``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``(``-``1``.``0``,`` ``-``1``.``0``)`` ``c``o``r``r``e``s``p``o``n``d`` ``t``o`` ``t``h``e`` ``u``p``p``e``r`` ``l``e``f``t`` ``c``o``r``n``e``r``,`` ``t``h``e`` ``l``o``w``e``r`` ``r``i``g``h``t`` ``c``o``r``n``e``r`` ``i``s`` ``l``o``c``a``t``e``d`` ``a``t`` ``(``1``.``0``,`` ``1``.``0``)`` ``a``n``d`` ``t``h``e`` ``c``e``n``t``e``r`` ``i``s`` ``a``t`` ``(``0``,`` ``0``)``.``
- ``I``f`` ``t``h``e`` ``c``o``o``r``d``i``n``a``t``e``s`` ``a``r``e`` ``n``o``t`` ``n``o``r``m``a``l``i``z``e``d`` ``t``h``e``y`` ``a``r``e`` ``i``n``t``e``r``p``r``e``t``e``d`` ``a``s`` ``n``u``m``b``e``r``s`` ``o``f`` ``p``i``x``e``l``s``.``
#### Args:
- `input`:` `A` ``Tensor`` `of` ``t`yp`e`` ``float32`.` `A` `4-D` `f`l`o`a``t`` ``t``e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `s``i``z``e`:` `A` ``Tensor`` `of` ``t`yp`e`` ``i``n``t`32.` `A` `1-D` ``t``e``n``s`or` `of` `2` ``e``l``e`m`e``n``t``s`` ``c`o`n``t``a``i``n``i``n``g`` ``t``h``e`` ``s``i``z``e`` `of` ``t``h``e`` ``g``l``i`mp`s``e``s`` ``t`o` ``e`x`t`r`a``c``t`.` `T`h``e`` ``g``l``i`mp`s``e`` ``h``e``i``g``h``t`` `mu`s``t`` ``b``e`` ``s`p`e``c``i`f`i``e``d`` `f`i`r`s``t``,`` `fo`l``l`o`w``i``n``g`` ``b`y` ``t``h``e`` ``g``l``i`mp`s``e`` ``w``i``d``t``h`.
- `offsets`:` `A` ``Tensor`` `of` ``t`yp`e`` ``float32`.` `A` ``2`-D` ``i``n``t``e``g``e`r` ``t``e``n``s`or` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``2`]` ``c`o`n``t``a``i``n``i``n``g`` ``t``h``e`` `y`,`` `x` ``l`o`c``a``t``i`o`n``s`` `of` ``t``h``e`` ``c``e``n``t``e`r` `of` ``e``a``c``h`` ``w``i``n``d`o`w`.
- `c``e``n``t``e`r`e``d`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``True`.` ``i``n``d``i``c``a``t``e``s`` ``i`f` ``t``h``e`` `off`s``e``t`` ``c`oor`d``i``n``a``t``e``s`` ``a`r`e`` ``c``e``n``t``e`r`e``d`` `r`e``l``a``t``i`v`e`` ``t`o` ``t``h``e`` ``i`m`a``g``e``,`` ``i``n`` ``w``h``i``c``h`` ``c``a``s``e`` ``t``h``e`` `(0`,`` `0)` `off`s``e``t`` ``i``s`` `r`e``l``a``t``i`v`e`` ``t`o` ``t``h``e`` ``c``e``n``t``e`r` `of` ``t``h``e`` ``input`` ``i`m`a``g``e``s`.` `If` `f`a``l``s``e``,`` ``t``h``e`` `(0`,`0)` `off`s``e``t`` ``c`orr`e``s`po`n``d``s`` ``t`o` ``t``h``e`` `upp`e`r` ``l``e`f`t`` ``c`or`n``e`r` `of` ``t``h``e`` ``input`` ``i`m`a``g``e``s`.
- `n`orm`a``l``i``z``e``d`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``True`.` ``i``n``d``i``c``a``t``e``s`` ``i`f` ``t``h``e`` `off`s``e``t`` ``c`oor`d``i``n``a``t``e``s`` ``a`r`e`` ``n`orm`a``l``i``z``e``d`.
- `n`o`i``s``e`:` `A`n`` `op`t``i`o`n``a``l`` ``s``t`r`i``n``g`.` `D`e`f`a`u`l``t``s`` ``t`o` ``uniform`.` ``i``n``d``i``c``a``t``e``s`` ``i`f` ``t``h``e`` ``n`o`i``s``e`` ``s``h`ou`l``d`` ``b``e`` ``uniform`` `(`uniform`` ``d``i``s``t`r`i``b`u`t``i`o`n`)`,`` ``g``a`u`s``s``i``a``n`` `(`g``a`u`s``s``i``a``n`` ``d``i``s``t`r`i``b`u`t``i`o`n`)`,`` `or` ``z``e`ro` `(`z``e`ro` `p`a``d``d``i``n``g`).
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A Tensor of type float32.
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
