
Performs fractional max pooling on the input.
### Aliases:
- `tf.compat.v2.nn.fractional_max_pool`

```
 tf.nn.fractional_max_pool(
    value,
    pooling_ratio,
    pseudo_random=False,
    overlapping=False,
    seed=0,
    name=None
)
```

Fractional max pooling is slightly different than regular max pooling. In regular max pooling, you downsize an input set by taking the maximum value of smaller N x N subsections of the set (often 2x2), and try to reduce the set by a factor of N, where N is an integer. Fractional max pooling, as you might expect from the word "fractional", means that the overall reduction ratio N does not have to be an integer.

The sizes of the pooling regions are generated randomly but are fairly uniform. For example, let's look at the height dimension, and the constraints on the list of rows that will be pool boundaries.

First we define the following:

Then, row_pooling_sequence should satisfy:
[Benjamin Graham, Fractional Max-Pooling](http://arxiv.org/abs/1412.6071)For more details on fractional max pooling, see this paper: 

#### Args:
- `value`:` `A` ``Tensor`.` `4-D` ``w``i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s`].
- `pooling_ratio`:` `A`n`` ``i``n``t`` `or` ``l``i``s``t`` `of` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` `or` ``4`.` `Poo`l``i``n``g`` `r`a``t``i`o` `for` ``e``a``c``h`` ``d``i`m`e``n``s``i`o`n`` `of` ``value``,`` ``c`urr`e``n``t``l`y` `o`n``l`y` ``s`uppor`t``s`` `ro`w`` ``a``n``d`` ``c`o`l`` ``d``i`m`e``n``s``i`o`n`` ``a``n``d`` ``s``h`ou`l``d`` ``b``e`` `>=` ``1`.0.` `For` ``e`x`a`mp`l``e``,`` ``a`` `v`a``l``i``d`` `poo`l``i``n``g`` `r`a``t``i`o` ``l`ook`s`` ``l``i`k`e`` `[`1`.0`,`` ``1`.`4``4``,`` ``1`.73`,`` ``1`.0].` `T`h``e`` `f`i`r`s``t`` ``a``n``d`` ``l``a``s``t`` ``e``l``e`m`e``n``t``s`` `mu`s``t`` ``b``e`` ``1`.0` ``b``e``c``a`u`s``e`` ``w``e`` ``d`o`n`'`t`` ``a``l``l`o`w`` `poo`l``i``n``g`` `o`n`` ``b``a``t``c``h`` ``a``n``d`` ``c``h``a``n``n``e``l``s`` ``d``i`m`e``n``s``i`o`n``s`.` ``1`.`4``4`` ``a``n``d`` ``1`.73` ``a`r`e`` `poo`l``i``n``g`` `r`a``t``i`o` `o`n`` ``h``e``i``g``h``t`` ``a``n``d`` ``w``i``d``t``h`` ``d``i`m`e``n``s``i`o`n``s`` `r`e``s`p`e``c``t``i`v`e``l`y.
- `pseudo_random`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `W`h``e``n`` ``s``e``t`` ``t`o` ``True``,`` ``g``e``n``e`r`a``t``e``s`` ``t``h``e`` `poo`l``i``n``g`` ``s``e`qu`e``n``c``e`` ``i``n`` ``a`` `p`s``e`u`d`or`a``n``d`om` `f`a``s``h``i`o`n``,`` `o`t``h``e`r`w``i``s``e``,`` ``i``n`` ``a`` `r`a``n``d`om` `f`a``s``h``i`o`n`.` `C`h``e``c`k` `p`a`p`e`r` `B`e``n`j`a`m`i``n`` `Gr`a``h``a`m`,`` `Fr`a``c``t``i`o`n``a``l`` `M`a`x-Poo`l``i``n``g`` `for` ``d``i`ff`e`r`e``n``c``e`` ``b``e``t``w``e``e``n`` `p`s``e`u`d`or`a``n``d`om` ``a``n``d`` `r`a``n``d`om.
- `overlapping`:` `A`n`` `op`t``i`o`n``a``l`` ``b`oo`l`.` `D`e`f`a`u`l``t``s`` ``t`o` ``False`.` `W`h``e``n`` ``s``e``t`` ``t`o` ``True``,`` ``i``t`` `m`e``a``n``s`` ``w``h``e``n`` `poo`l``i``n``g``,`` ``t``h``e`` ``value``s`` ``a``t`` ``t``h``e`` ``b`ou`n``d``a`ry` `of` ``a``d`j`a``c``e``n``t`` `poo`l``i``n``g`` ``c``e``l``l``s`` ``a`r`e`` `u`s``e``d`` ``b`y` ``b`o`t``h`` ``c``e``l``l``s`.` `For` ``e`x`a`mp`l``e`:` ``i``n``d``e`x` `0` ``1`` ``2`` `3` ``4`` ``value`` ``2`0` `5` ``1`6` `3` `7` `If` ``t``h``e`` `poo`l``i``n``g`` ``s``e`qu`e``n``c``e`` ``i``s`` `[0`,`` ``2``,`` ``4`]`,`` ``t``h``e``n`` ``1`6`,`` ``a``t`` ``i``n``d``e`x` ``2`` ``w``i``l``l`` ``b``e`` `u`s``e``d`` ``t``w``i``c``e`.` `T`h``e`` `r`e``s`u`l``t`` ``w`ou`l``d`` ``b``e`` `[`2`0`,`` ``1`6]` `for` `fr`a``c``t``i`o`n``a``l`` `m`a`x` `poo`l``i``n``g`.
- `s``e``e``d`:` `A`n`` `op`t``i`o`n``a``l`` ``i``n``t`.` `D`e`f`a`u`l``t``s`` ``t`o` ``0`.` `If` ``s``e``t`` ``t`o` ``b``e`` ``n`o`n`-z`e`ro`,`` ``t``h``e`` `r`a``n``d`om` ``n`um`b``e`r` ``g``e``n``e`r`a``t`or` ``i``s`` ``s``e``e``d``e``d`` ``b`y` ``t``h``e`` ``g``i`v`e``n`` ``s``e``e``d`.` `O`t``h``e`r`w``i``s``e`` ``i``t`` ``i``s`` ``s``e``e``d``e``d`` ``b`y` ``a`` `r`a``n``d`om` ``s``e``e``d`.
- `n``a`m`e`:` `A` ``n``a`m`e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`` `(op`t``i`o`n``a``l`).
#### Returns:

A tuple of Tensor objects (output, row_pooling_sequence, col_pooling_sequence). output: Output Tensor after fractional max pooling. Has the same type as value. row_pooling_sequence: A Tensor of type int64. col_pooling_sequence: A Tensor of type int64.
