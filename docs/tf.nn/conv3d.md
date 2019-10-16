
Computes a 3-D convolution given 5-D input and filters tensors.
### Aliases:
- `tf.compat.v2.nn.conv3d`

```
 tf.nn.conv3d(
    input,
    filters,
    strides,
    padding,
    data_format='NDHWC',
    dilations=None,
    name=None
)
```

In signal processing, cross-correlation is a measure of similarity of two waveforms as a function of a time-lag applied to one of them. This is also known as a sliding dot product or sliding inner-product.

Our Conv3D implements a form of cross-correlation.
#### Args:
- `input`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` `o`n``e`` `of` ``t``h``e`` `fo`l``l`o`w``i``n``g`` ``t`y`p``e``s`:` ``half``,`` ``bfloat16``,`` ``float32``,`` ``float64`.` `S`h``a``p``e`` `[`b``a``t``c``h``,`` ``i``n``_``d``e``p``t``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`].
- `filters`:` `A` ``Tensor`.` `M`u``s``t`` ``h``a`v`e`` ``t``h``e`` ``s``a`m`e`` ``t`y`p``e`` ``a``s`` ``input`.` `S`h``a``p``e`` `[`f``i``l``t``e``r``_``d``e``p``t``h``,`` ``f``i``l``t``e``r``_``h``e``i``g``h``t``,`` ``f``i``l``t``e``r``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``o``u``t``_``c``h``a``n``n``e``l``s`].` ``i``n``_``c``h``a``n``n``e``l``s`` `m`u``s``t`` `m`a``t``c``h`` ``b``e``t``w``e``e``n`` ``input`` ``a``n``d`` ``filters`.
- `s``t``r``i``d``e``s`:` `A` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``>= 5`.` `1-D` ``t``e``n``s``o``r`` ``o``f`` ``l``e``n``g``t``h`` `5.` `T`h``e`` ``s``t``r``i``d``e`` ``o``f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f`` ``input`.` `M`u``s``t`` ``h``a`v`e`` ``s``t``r``i``d``e``s`[0]` `=` ``s``t``r``i``d``e``s`[4]` `=` `1.
- `p``a``d``d``i``n``g`:` `A` ``s``t``r``i``n``g`` ``f``r``o`m:` ``"SAME", "VALID"`.` `T`h``e`` ``t`y`p``e`` ``o``f`` ``p``a``d``d``i``n``g`` ``a``l``g``o``r``i``t``h`m` ``t``o`` ``u``s``e`.
- `d``a``t``a``_``f``o``r`m`a``t`:` `A`n`` ``o``p``t``i``o``n``a``l`` ``s``t``r``i``n``g`` ``f``r``o`m:` ``"NDHWC", "NCDHW"`.` `D`e``f``a``u``l``t``s`` ``t``o`` ``"NDHWC"`.` `T`h``e`` ``d``a``t``a`` ``f``o``r`m`a``t`` ``o``f`` ``t``h``e`` ``input`` ``a``n``d`` ``o``u``t``p``u``t`` ``d``a``t``a`.` `W`i``t``h`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``f``o``r`m`a``t`` ``"NDHWC"``,`` ``t``h``e`` ``d``a``t``a`` ``i``s`` ``s``t``o``r``e``d`` ``i``n`` ``t``h``e`` ``o``r``d``e``r`` ``o``f`:` `[`b``a``t``c``h``,`` ``i``n``_``d``e``p``t``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s`].` `A`l``t``e``r``n``a``t``i`v`e``l`y`,`` ``t``h``e`` ``f``o``r`m`a``t`` ``c``o``u``l``d`` ``b``e`` `"NCDHW"`,`` ``t``h``e`` ``d``a``t``a`` ``s``t``o``r``a``g``e`` ``o``r``d``e``r`` ``i``s`:` `[`b``a``t``c``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``i``n``_``d``e``p``t``h``,`` ``i``n``_``h``e``i``g``h``t``,`` ``i``n``_``w``i``d``t``h`].
- `d``i``l``a``t``i``o``n``s`:` `A`n`` ``o``p``t``i``o``n``a``l`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`.` `D`e``f``a``u``l``t``s`` ``t``o`` `[`1``,`` ``1``,`` ``1``,`` ``1``,`` ``1`].` ``1`-D` ``t``e``n``s``o``r`` ``o``f`` ``l``e``n``g``t``h`` `5.` `T`h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i`m`e``n``s``i``o``n`` ``o``f`` ``input`.` `I`f`` ``s``e``t`` ``t``o`` `k` `>` ``1``,`` ``t``h``e``r``e`` ``w``i``l``l`` ``b``e`` `k-`1`` ``s`k`i``p``p``e``d`` ``c``e``l``l``s`` ``b``e``t``w``e``e``n`` ``e``a``c``h`` ``f``i``l``t``e``r`` ``e``l``e`m`e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i`m`e``n``s``i``o``n`.` `T`h``e`` ``d``i`m`e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r`m`i``n``e``d`` ``b`y` ``t``h``e`` `v`a``l``u``e`` ``o``f`` ``d``a``t``a``_``f``o``r`m`a``t``,`` ``s``e``e`` ``a``b``o`v`e`` ``f``o``r`` ``d``e``t``a``i``l``s`.` `D`i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`` ``a``n``d`` ``d``e``p``t``h`` ``d``i`m`e``n``s``i``o``n``s`` `m`u``s``t`` ``b``e`` ``1`.
- `n``a`m`e`:` `A` ``n``a`m`e`` ``f``o``r`` ``t``h``e`` ``o``p``e``r``a``t``i``o``n`` `(`o``p``t``i``o``n``a``l`).
#### Returns:

A Tensor. Has the same type as input.
