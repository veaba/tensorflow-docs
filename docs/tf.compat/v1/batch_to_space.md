
BatchToSpace for 4-D tensors of type T.

```
 tf.compat.v1.batch_to_space(
    input,
    crops,
    block_size,
    name=None,
    block_shape=None
)
```

This is a legacy version of the more general BatchToSpaceND.

Rearranges (permutes) data from batch into blocks of spatial data, followed by cropping. This is the reverse transformation of SpaceToBatch. More specifically, this op outputs a copy of the input tensor where values from the batch dimension are moved in spatial blocks to the height and width dimensions, followed by cropping along the height and width dimensions.
#### Args:
- `input`:` `A` ``Tensor`.` `4-D` ``t``e`n`s``o`r` ``w``i``t``h`` ``s``h``a``p``e`` `[`b``a``t``c``h``*``b``l``o``c``k``_``s``i``z``e``*``b``l``o``c``k``_``s``i``z``e``,`` ``h``e``i``g``h``t``_``p``a``d``/``b``l``o``c``k``_``s``i``z``e``,`` ``w``i``d``t``h``_``p``a``d``/``b``l``o``c``k``_``s``i``z``e``,`` ``d``e``p``t``h`].` `N`o``t``e`` ``t``h``a``t`` ``t``h``e`` ``b``a``t``c``h`` ``s``i``z``e`` ``o`f` ``t``h``e`` ``input`` ``t``e`n`s``o`r` `mu`s``t`` ``b``e`` ``d``i`v`i``s``i``b``l``e`` ``b`y` ``b``l``o``c``k``_``s``i``z``e`` ``*`` ``b``l``o``c``k``_``s``i``z``e`.
- `c`r`o``p``s`:` `A` ``Tensor`.` `Mu`s``t`` ``b``e`` ``o`n`e`` ``o`f` ``t``h``e`` `f`o``l``l``o``w``i`n`g`` ``t`y`p``e``s`:` ``i`n`t`3`2``,`` ``i`n`t`64.` ``2`-D` ``t``e`n`s``o`r` ``o`f` `n`o`n-n`e``g``a``t``i`v`e`` ``i`n`t``e``g``e`r`s`` ``w``i``t``h`` ``s``h``a``p``e`` `[`2``,`` ``2`].` `I`t`` ``s``p``e``c``i`f`i``e``s`` ``h``o``w`` `m`a`ny` ``e``l``e`m`e`n`t``s`` ``t``o`` ``c`r`o``p`` `fr`o`m` ``t``h``e`` ``i`n`t``e`rm`e``d``i``a``t``e`` `r`e``s`u`l``t`` ``a``c`r`o``s``s`` ``t``h``e`` ``s``p``a``t``i``a``l`` ``d``i`m`e`n`s``i``o`n`s`` ``a``s`` `f`o``l``l``o``w``s`:
`c`r`o``p``s`` `=` `[[`c`r`o``p``_``t``o``p``,`` ``c`r`o``p``_``b``o``t``t``o`m]`,`` `[`c`r`o``p``_``l``e`f`t``,`` ``c`r`o``p``_`r`i``g``h``t`]]
- `b``l``o``c``k``_``s``i``z``e`:` `An` ``i`n`t`` ``t``h``a``t`` ``i``s`` ``>= 2`.
- `name`:` `A` ``name`` `f`o`r` ``t``h``e`` ``o``p``e`r`a``t``i``o`n` `(`o``p``t``i``o`n`a``l`).
#### Returns:

A Tensor. Has the same type as input.
