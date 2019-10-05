
Extract patches from images and put them in the "depth" output dimension.
### Aliases:
- `tf.compat.v1.image.extract_image_patches`

```
 tf.compat.v1.extract_image_patches(
    images,
    ksizes=None,
    strides=None,
    rates=None,
    padding=None,
    name=None,
    sizes=None
)
```
#### Args:
- `images`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` ``o``n``e`` ``o`f` ``t``h``e`` `f`o``l``l``o``w``i``n`g` ``t`y`p``e``s`:` ``float32``,`` ``float64``,`` ``int32``,`` ``uint8``,`` ``int16``,`` ``int8``,`` ``int64``,`` ``bfloat16``,`` ``uint16``,`` ``half``,`` ``uint32``,`` ``uint64`.` `4-D` ``Tensor`` ``w``i``t``h`` ``s``h``a``p``e`` `[`b``a``t``c``h``,`` ``i``n``_``r``o``w``s``,`` ``i``n``_``c``o``l``s``,`` ``d``e``p``t``h`].
- `ksizes`:` `A` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``>= 4`.` `T`h``e`` ``s``i`z`e`` ``o`f` ``t``h``e`` ``s``l``i``d``i``n`g` ``w``i``n``d``o``w`` `f`o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o`f` ``images`.
- `s``t``r``i``d``e``s`:` `A` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``>= 4`.` `H`o``w`` `f`a``r`` ``t``h``e`` ``c``e``n``t``e``r``s`` ``o`f` ``t``w``o`` ``c``o``n``s``e``c`u`t``i`v`e`` ``p``a``t``c``h``e``s`` ``a``r``e`` ``i``n`` ``t``h``e`` ``images`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``s``t``r``i``d``e``_``r``o``w``s``,`` ``s``t``r``i``d``e``_``c``o``l``s``,`` ``1`].
- `r``a``t``e``s`:` `A` ``l``i``s``t`` ``o`f` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n`g`t``h`` ``>= 4`.` `Mu`s``t`` ``b``e`:` `[`1``,`` ``r``a``t``e``_``r``o``w``s``,`` ``r``a``t``e``_``c``o``l``s``,`` ``1`].` `T`h``i``s`` ``i``s`` ``t``h``e`` ``i``n``p`u`t`` ``s``t``r``i``d``e``,`` ``s``p``e``c``i`fy`i``n`g` ``h``o``w`` `f`a``r`` ``t``w``o`` ``c``o``n``s``e``c`u`t``i`v`e`` ``p``a``t``c``h`` ``s``a`m`p``l``e``s`` ``a``r``e`` ``i``n`` ``t``h``e`` ``i``n``p`u`t`.` `Equ`i`v`a``l``e``n``t`` ``t``o`` ``e`x`t``r``a``c``t``i``n`g` ``p``a``t``c``h``e``s`` ``w``i``t``h`` ``p``a``t``c``h``_``s``i`z`e``s``_``e`ff` `=` ``p``a``t``c``h``_``s``i`z`e``s`` `+` `(`p``a``t``c``h``_``s``i`z`e``s`` `-` ``1`)` `*` `(`r``a``t``e``s`` `-` ``1`)`,`` `f`o``l``l``o``w``e``d`` ``b`y` ``s`u`b``s``a`m`p``l``i``n`g` ``t``h``e`m` ``s``p``a``t``i``a``l``l`y` ``b`y` ``a`` `f`a``c``t``o``r`` ``o`f` ``r``a``t``e``s`.` `T`h``i``s`` ``i``s`` ``e`qu`i`v`a``l``e``n``t`` ``t``o`` ``r``a``t``e`` ``i``n`` ``d``i``l``a``t``e``d`` `(`a`.k.`a`.` `A`t``r``o`u`s`)` ``c``o``n`v`o``l`u`t``i``o``n``s`.
- `p``a``d``d``i``n`g:` `A` ``s``t``r``i``n`g` `f`r``o`m:` ``"SAME", "VALID"`.` `T`h``e`` ``t`y`p``e`` ``o`f` ``p``a``d``d``i``n`g` ``a``l`g`o``r``i``t``h`m` ``t``o`` `u`s``e`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `f`o``r`` ``t``h``e`` ``o``p``e``r``a``t``i``o``n`` `(`o``p``t``i``o``n``a``l`).
#### Returns:

A Tensor. Has the same type as images.
