
Defined in generated file: python/ops/gen_array_ops.py

Extract patches from input and put them in the "depth" output dimension. 3D extension of extract_image_patches.
### Aliases:
- `tf.compat.v1.extract_volume_patches`
- `tf.compat.v2.extract_volume_patches`

```
 tf.extract_volume_patches(
    input,
    ksizes,
    strides,
    padding,
    name=None
)
```
#### Args:
- `input`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` ``o``n``e`` ``o`f` ``t``h``e`` `f`o``l``l``o``w``i``n`g` ``t`y`p``e``s`:` ``float32``,`` ``float64``,`` ``int32``,`` ``uint8``,`` ``int16``,`` ``int8``,`` ``int64``,`` ``bfloat16``,`` ``uint16``,`` ``half``,`` ``uint32``,`` ``uint64`.` `5-D` ``Tensor`` ``w``i``t``h`` ``s``h``a``p``e`` `[`b``a``t``c``h``,`` ``i``n``_``p``l``a``n``e``s``,`` ``i``n``_``r``o``w``s``,`` ``i``n``_``c``o``l``s``,`` ``d``e``p``t``h`].
- `ksizes`:` `A` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``>= 5`.` `T`h``e`` ``s``i`z`e`` ``o`f` ``t``h``e`` ``s``l``i``d``i``n`g` ``w``i``n``d``o``w`` `f`o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o`f` ``input`.
- `s``t``r``i``d``e``s`:` `A` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``>= 5`.` ``1`-D` ``o`f` ``l``e``n`g`t``h`` `5.` `H`o``w`` `f`a``r`` ``t``h``e`` ``c``e``n``t``e``r``s`` ``o`f` ``t``w``o`` ``c``o``n``s``e``c`u`t``i`v`e`` ``p``a``t``c``h``e``s`` ``a``r``e`` ``i``n`` ``input`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``s``t``r``i``d``e``_``p``l``a``n``e``s``,`` ``s``t``r``i``d``e``_``r``o``w``s``,`` ``s``t``r``i``d``e``_``c``o``l``s``,`` ``1`].
- `p``a``d``d``i``n`g:` `A` ``s``t``r``i``n`g` `f`r``o`m:` ``"SAME", "VALID"`.` `T`h``e`` ``t`y`p``e`` ``o`f` ``p``a``d``d``i``n`g` ``a``l`g`o``r``i``t``h`m` ``t``o`` `u`s``e`.
W`e`` ``s``p``e``c``i`fy` ``t``h``e`` ``s``i`z`e`-`r``e``l``a``t``e``d`` ``a``t``t``r``i``b`u`t``e``s`` ``a``s`:
#### Returns:

A Tensor. Has the same type as input.
