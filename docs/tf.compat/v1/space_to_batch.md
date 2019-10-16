
SpaceToBatch for 4-D tensors of type T.
### Aliases:
- `tf.compat.v1.nn.space_to_batch`

```
 tf.compat.v1.space_to_batch(
    input,
    paddings,
    block_size=None,
    name=None,
    block_shape=None
)
```

This is a legacy version of the more general SpaceToBatchND.

Zero-pads and then rearranges (permutes) blocks of spatial data into batch. More specifically, this op outputs a copy of the input tensor where values from the height and width dimensions are moved to the batch dimension. After the zero-padding, both height and width of the input must be divisible by the block size.
#### Args:
- `input`:` `A` ``Tensor`.` `4-D` ``w``i``t``h`` `s`h``a``p``e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``d``e``p``t``h`].
- `p``a``d``d``i`n`g`s:` `A` ``Tensor`.` `Mus`t`` ``b``e`` `on`e`` `of` ``t``h``e`` `follo`w``i`n`g`` ``t`y`p``e`s:` ``i`n`t`3`2``,`` ``i`n`t`64.` ``2`-D` ``t``e`nsor` `of` `non-n`e``g``a``t``i`v`e`` ``i`n`t``e``g``e`rs` ``w``i``t``h`` `s`h``a``p``e`` `[`2``,`` ``2`].` `I`t`` `s`p``e``c``i`f`i``e`s` ``t``h``e`` ``p``a``d``d``i`n`g`` `of` ``t``h``e`` ``input`` ``w``i``t``h`` `z`e`ros` ``a``c`ross` ``t``h``e`` `s`p``a``t``i``a`l` ``d``i`m`e`ns`i`ons` ``a`s` `follo`w`s:
`p``a``d``d``i`n`g`s` `=` `[[`p``a``d`_`t`o`p``,`` ``p``a``d`_`b`o`t``t`om]`,`` `[`p``a``d`_l`e`f`t``,`` ``p``a``d`_r`i``g``h``t`]]
T`h``e`` ``e`ff`e``c``t``i`v`e`` `s`p``a``t``i``a`l` ``d``i`m`e`ns`i`ons` `of` ``t``h``e`` `z`e`ro-`p``a``d``d``e``d`` ``input`` ``t``e`nsor` ``w``i`ll` ``b``e`:
`h``e``i``g``h``t`_`p``a``d`` `=` ``p``a``d`_`t`o`p`` `+` ``h``e``i``g``h``t`` `+` ``p``a``d`_`b`o`t``t`om
`w``i``d``t``h`_`p``a``d`` `=` ``p``a``d`_l`e`f`t`` `+` ``w``i``d``t``h`` `+` ``p``a``d`_r`i``g``h``t`
T`h``e`` ``a``t``t`r` ``b`lo`c`k_s`i`z`e`` `mus`t`` ``b``e`` ``g`r`e``a``t``e`r` ``t``h``a`n` `on`e`.` `I`t`` ``i`n`d``i``c``a``t``e`s` ``t``h``e`` ``b`lo`c`k` `s`i`z`e`.
Non-ov`e`rl`a``p``p``i`n`g`` ``b`lo`c`ks` `of` `s`i`z`e`` ``b`lo`c`k_s`i`z`e`` `x` ``b`lo`c`k` `s`i`z`e`` ``i`n` ``t``h``e`` ``h``e``i``g``h``t`` ``a`n`d`` ``w``i``d``t``h`` ``d``i`m`e`ns`i`ons` ``a`r`e`` `r`e``a`rr`a`n`g``e``d`` ``i`n`t`o` ``t``h``e`` ``b``a``t``c``h`` ``d``i`m`e`ns`i`on` ``a``t`` ``e``a``c``h`` `lo`c``a``t``i`on.
T`h``e`` ``b``a``t``c``h`` `of` ``t``h``e`` `ou`t``p`u`t`` ``t``e`nsor` ``i`s` ``b``a``t``c``h`` `*` ``b`lo`c`k_s`i`z`e`` `*` ``b`lo`c`k_s`i`z`e`.
Bo`t``h`` ``h``e``i``g``h``t`_`p``a``d`` ``a`n`d`` ``w``i``d``t``h`_`p``a``d`` `mus`t`` ``b``e`` ``d``i`v`i`s`i``b`l`e`` ``b`y` ``b`lo`c`k_s`i`z`e`.
T`h``e`` `s`h``a``p``e`` `of` ``t``h``e`` `ou`t``p`u`t`` ``w``i`ll` ``b``e`:
[`b``a``t``c``h``b`lo`c`k_s`i`z`e``b`lo`c`k_s`i`z`e``,`` ``h``e``i``g``h``t`_`p``a``d`/`b`lo`c`k_s`i`z`e``,`` ``w``i``d``t``h`_`p``a``d`/`b`lo`c`k_s`i`z`e``,`` ``d``e``p``t``h`]
Som`e`` ``e`x`a`m`p`l`e`s:
(`1`)` `For` ``t``h``e`` `follo`w``i`n`g`` ``input`` `of` `s`h``a``p``e`` `[`1``,`` ``2``,`` ``2``,`` ``1`]` ``a`n`d`` ``b`lo`c`k_s`i`z`e`` `of` ``2`:
- Non-ov`e`rl`a``p``p``i`n`g`` ``b`lo`c`ks` `of` `s`i`z`e`` ``b`lo`c`k_s`i`z`e`` `x` ``b`lo`c`k` `s`i`z`e`` ``i`n` ``t``h``e`` ``h``e``i``g``h``t`` ``a`n`d`` ``w``i``d``t``h`` ``d``i`m`e`ns`i`ons` ``a`r`e`` `r`e``a`rr`a`n`g``e``d`` ``i`n`t`o` ``t``h``e`` ``b``a``t``c``h`` ``d``i`m`e`ns`i`on` ``a``t`` ``e``a``c``h`` `lo`c``a``t``i`on.
- T`h``e`` ``b``a``t``c``h`` `of` ``t``h``e`` `ou`t``p`u`t`` ``t``e`nsor` ``i`s` ``b``a``t``c``h`` `*` ``b`lo`c`k_s`i`z`e`` `*` ``b`lo`c`k_s`i`z`e`.
- Bo`t``h`` ``h``e``i``g``h``t`_`p``a``d`` ``a`n`d`` ``w``i``d``t``h`_`p``a``d`` `mus`t`` ``b``e`` ``d``i`v`i`s`i``b`l`e`` ``b`y` ``b`lo`c`k_s`i`z`e`.

The output tensor has shape [4, 1, 1, 1] and value:

(2) For the following input of shape [1, 2, 2, 3] and block_size of 2:

The output tensor has shape [4, 1, 1, 3] and value:

(3) For the following input of shape [1, 4, 4, 1] and block_size of 2:

The output tensor has shape [4, 2, 2, 1] and value:

(4) For the following input of shape [2, 2, 4, 1] and block_size of 2:

The output tensor has shape [8, 1, 2, 1] and value:

Among others, this operation is useful for reducing atrous convolution into regular convolution. * block_size: An int that is >= 2. * name: A name for the operation (optional).
#### Returns:

A Tensor. Has the same type as input.
