
Performs fractional average pooling on the input. (deprecated)

```
 tf.compat.v1.nn.fractional_avg_pool(
    value,
    pooling_ratio,
    pseudo_random=False,
    overlapping=False,
    deterministic=False,
    seed=0,
    seed2=0,
    name=None
)
```

This is a deprecated version of fractional_avg_pool.

Fractional average pooling is similar to Fractional max pooling in the pooling region generation step. The only difference is that after pooling regions are generated, a mean operation is performed instead of a max operation in each pooling region.
#### Args:
- `value`:` `A` ``Tensor`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `pooling_ratio`:` `A` ``l``i``s``t`` `of` ``floats`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` `>=` `4.` `Poo`l``i``n``g`` `r`a``t``i`o` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``value``,`` ``c`urr`e``n``t``l`y` `o`n``l`y` ``s`uppor`t``s`` `ro`w`` ``a``n``d`` ``c`o`l`` ``d``i`m`e``n``s``i`o`n`` ``a``n``d`` ``s``h`ou`l``d`` ``b``e`` `>=` `1.0.` `For` ``e`x`a`mp`l``e``,`` ``a`` `v`a``l``i``d`` `poo`l``i``n``g`` `r`a``t``i`o` ``l`ook`s`` ``l``i`k`e`` `[1.0`,`` `1.44`,`` `1.73`,`` `1.0].` `T`h``e`` `f`i`r`s``t`` ``a``n``d`` ``l``a``s``t`` ``e``l``e`m`e``n``t``s`` `mu`s``t`` ``b``e`` `1.0` ``b``e``c``a`u`s``e`` ``w``e`` ``d`o`n`'`t`` ``a``l``l`o`w`` `poo`l``i``n``g`` `o`n`` ``b``a``t``c``h`` ``a``n``d`` ``c``h``a``n``n``e``l``s`` ``d``i`m`e``n``s``i`o`n``s`.` `1.44` ``a``n``d`` `1.73` ``a`r`e`` `poo`l``i``n``g`` `r`a``t``i`o` `o`n`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i`m`e``n``s``i`o`n``s`` `r`e``s`p`e``c``t``i`v`e``l`y.
- `pseudo_random`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `W`h``e``n`` ``s``e``t`` ``t`o` ``True``,`` ``g``e``n``e`r`a``t``e``s`` ``t``h``e`` `poo`l``i``n``g`` ``s``e`qu`e``n``c``e`` ``i``n`` ``a`` `p`s``e`u`d`or`a``n``d`om` `f`a``s``h``i`o`n``,`` `o`t``h``e`r`w``i``s``e``,`` ``i``n`` ``a`` `r`a``n``d`om` `f`a``s``h``i`o`n`.` `C`h``e``c`k` `p`a`p`e`r` `B`e``n`j`a`m`i``n`` `Gr`a``h``a`m`,`` `Fr`a``c``t``i`o`n``a``l`` `M`a`x-Poo`l``i``n``g`` `for` ``d``i`ff`e`r`e``n``c``e`` ``b``e``t``w``e``e``n`` `p`s``e`u`d`or`a``n``d`om` ``a``n``d`` `r`a``n``d`om.
- `overlapping`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `W`h``e``n`` ``s``e``t`` ``t`o` ``True``,`` ``i``t`` `m`e``a``n``s`` ``w``h``e``n`` `poo`l``i``n``g``,`` ``t``h``e`` ``value``s`` ``a``t`` ``t``h``e`` ``b`ou`n``d``a`ry` `of` ``a``d`j`a``c``e``n``t`` `poo`l``i``n``g`` ``c``e``l``l``s`` ``a`r`e`` `u`s``e``d`` ``b`y` ``b`o`t``h`` ``c``e``l``l``s`.` `For` ``e`x`a`mp`l``e`:` ``i``n``d``e`x` `0` `1` `2` `3` `4` ``value`` `20` `5` `16` `3` `7` `If` ``t``h``e`` `poo`l``i``n``g`` ``s``e`qu`e``n``c``e`` ``i``s`` `[0`,`` `2`,`` `4]`,`` ``t``h``e``n`` `16`,`` ``a``t`` ``i``n``d``e`x` `2` ``w``i``l``l`` ``b``e`` `u`s``e``d`` ``t``w``i``c``e`.` `T`h``e`` `r`e``s`u`l``t`` ``w`ou`l``d`` ``b``e`` `[20`,`` `16]` `for` `fr`a``c``t``i`o`n``a``l`` ``a`v`g`` `poo`l``i``n``g`.
- `d``e``t``e`rm`i``n``i``s``t``i``c`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`pr`e``c``a``t``e``d`;` `u`s``e`` ``fractional_avg_pool_v2`` ``i``n``s``t``e``a``d`.
- `s``e``e``d`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``0`.` `If` ``s``e``t`` ``t`o` ``b``e`` ``n`o`n`-z`e`ro`,`` ``t``h``e`` `r`a``n``d`om` ``n`um`b``e`r` ``g``e``n``e`r`a``t`or` ``i``s`` ``s``e``e``d``e``d`` ``b`y` ``t``h``e`` ``g``i`v`e``n`` ``s``e``e``d`.` `O`t``h``e`r`w``i``s``e`` ``i``t`` ``i``s`` ``s``e``e``d``e``d`` ``b`y` ``a`` `r`a``n``d`om` ``s``e``e``d`.
- `s``e``e``d`2:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`pr`e``c``a``t``e``d`;` `u`s``e`` ``fractional_avg_pool_v2`` ``i``n``s``t``e``a``d`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A tuple of Tensor objects (output, row_pooling_sequence, col_pooling_sequence). output: Output Tensor after fractional avg pooling. Has the same type as value. row_pooling_sequence: A Tensor of type int64. col_pooling_sequence: A Tensor of type int64.
