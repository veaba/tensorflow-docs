
Outputs a Summary protocol buffer with images.

```
 tf.compat.v1.summary.image(
    name,
    tensor,
    max_outputs=3,
    collections=None,
    family=None
)
```

The summary has up to max_outputs summary values containing images. The images are built from tensor which must be 4-D with shape [batch_size, height, width, channels] and where channels can be:
- 1: `tensor` is interpreted as Grayscale.
- 3: `tensor` is interpreted as RGB.
- 4: `tensor` is interpreted as RGBA.

The images have the same number of channels as the input tensor. For float input, the values are normalized one image at a time to fit in the range [0, 255]. uint8 values are unchanged. The op uses two different normalization algorithms:
- ``I``f`` ``t``h``e`` ``i``n``p``u``t`` ``v``a``l``u``e``s`` ``a``r``e`` ``a``l``l`` ``p``o``s``i``t``i``v``e``,`` ``t``h``e``y`` ``a``r``e`` ``r``e``s``c``a``l``e``d`` ``s``o`` ``t``h``e`` ``l``a``r``g``e``s``t`` ``o``n``e`` ``i``s`` ``2``5``5``.``
- ``I``f`` ``a``n``y`` ``i``n``p``u``t`` ``v``a``l``u``e`` ``i``s`` ``n``e``g``a``t``i``v``e``,`` ``t``h``e`` ``v``a``l``u``e``s`` ``a``r``e`` ``s``h``i``f``t``e``d`` ``s``o`` ``i``n``p``u``t`` ``v``a``l``u``e`` ``0``.``0`` ``i``s`` ``a``t`` ``1``2``7``.`` ``T``h``e``y`` ``a``r``e`` ``t``h``e``n`` ``r``e``s``c``a``l``e``d`` ``s``o`` ``t``h``a``t`` ``e``i``t``h``e``r`` ``t``h``e`` ``s``m``a``l``l``e``s``t`` ``v``a``l``u``e`` ``i``s`` ``0``,`` ``o``r`` ``t``h``e`` ``l``a``r``g``e``s``t`` ``o``n``e`` ``i``s`` ``2``5``5``.``

The tag in the outputted Summary.Value protobufs is generated based on the name, with a suffix depending on the max_outputs setting:
- If `max_outputs` is 1, the summary value tag is 'name/image'.
- If `max_outputs` is greater than 1, the summary value tags are generated sequentially as 'name/image/0', 'name/image/1', etc.
#### Args:
- `name`: A `name` for the generated node. Will also serve as a series `name` in TensorBoard.
- `tensor`:` `A` `4-D` ``uint8`` `or` ``float32`` ``Tensor`` `of` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`]` ``w``h``e`r`e`` ``c``h``a``n``n``e``l``s`` ``i``s`` `1`,`` `3`,`` `or` `4.
- `max_outputs`:` `M`a`x` ``n`um`b``e`r` `of` ``b``a``t``c``h`` ``e``l``e`m`e``n``t``s`` ``t`o` ``g``e``n``e`r`a``t``e`` ``i`m`a``g``e``s`` `for.
- `c`o`l``l``e``c``t``i`o`n``s`:` `Op`t``i`o`n``a``l`` ``l``i``s``t`` `of` `op`s`.Gr`a`p`h`K`e`y`s`.` `T`h``e`` ``c`o`l``l``e``c``t``i`o`n``s`` ``t`o` ``a``d``d`` ``t``h``e`` ``s`umm`a`ry` ``t`o.` `D`e`f`a`u`l``t``s`` ``t`o` `[`_`op`s`.Gr`a`p`h`K`e`y`s`.SUMMARIES]
- `family`:` `Op`t``i`o`n``a``l`;` ``i`f` `prov`i``d``e``d``,`` `u`s``e``d`` ``a``s`` ``t``h``e`` `pr`e`f`i`x` `of` ``t``h``e`` ``s`umm`a`ry` ``t``a``g`` ``name``,`` ``w``h``i``c``h`` ``c`o`n``t`ro`l``s`` ``t``h``e`` ``t``a``b`` ``name`` `u`s``e``d`` `for` ``d``i``s`p`l``a`y` `o`n`` ``Tensor``b`o`a`r`d`.
#### Returns:

A scalar Tensor of type string. The serialized Summary protocol buffer.
