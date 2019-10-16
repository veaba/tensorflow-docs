
Performs greedy decoding on the logits given in input (best path).
### Aliases:
- `tf.compat.v1.nn.ctc_greedy_decoder`
- `tf.compat.v2.nn.ctc_greedy_decoder`

```
 tf.nn.ctc_greedy_decoder(
    inputs,
    sequence_length,
    merge_repeated=True
)
```

If merge_repeated is True, merge repeated classes in output. This means that if consecutive logits' maximum indices are the same, only the first of these is emitted. The sequence A B B * B * B (where '*' is the blank label) becomes
- `A B B B` if `merge_repeated=True`.
- `A B B B` B if `merge_repeated=False`.
#### Args:
- `inputs`:` `3-D` ``float`` ``Tensor`` ``s``i``z``e`d` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`].` `T`h``e`` ``l`og`i``t``s`.
- `s``e`q`u``e``n``c``e``_``l``e``n`g`t``h`:` `1-D` ``i``n``t`32` `v`e``c``t`or` ``c`o`n``t``a``i``n``i``n`g` ``s``e`q`u``e``n``c``e`` ``l``e``n`g`t``h``s``,`` ``h``a`v`i``n`g` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e`].
- `m``e`rg`e``_`r`e`p`e``a``t``e`d:` `Boo`l``e``a``n`.` `D`e`f`a``u``l``t`:` `Tr`u``e`.
#### Returns:

A tuple (decoded, neg_sum_logits) where
- `decoded`:` `A` ``s``i``n``g``l``e`-`e``l``e``m``e``n``t`` ``l``i``s``t`.` ``decoded`[0]` ``i``s`` ``a``n`` ``SparseTensor`` ``c``o``n``t``a``i``n``i``n``g`` ``t``h``e`` ``decoded`` ``o`u`t`pu`t``s`` ``s`.`t`.:
`decoded`.`i``n``d``i``c``e``s`:` `I`n``d``i``c``e``s`` ``m``a``t`r`i``x`` `(`total_decoded_outputs, 2`).` `T`h``e`` `r`o`w`s`` ``s``t``o`r`e`:` `[`b``a``t``c``h``,`` ``t``i``m``e`].
`decoded`.v`a``l`u`e``s`:` `V`a``l`u`e``s`` `v`e``c``t``o`r`,`` ``s``i``z``e`` `(`t``o``t``a``l``_``decoded``_``o`u`t`pu`t``s`).` `T`h``e`` `v`e``c``t``o`r` ``s``t``o`r`e``s`` ``t``h``e`` ``decoded`` ``c``l``a``s``s``e``s`.
`decoded`.`d``e``n``s``e``_``s``h``a`p`e`:` `S`h``a`p`e`` `v`e``c``t``o`r`,`` ``s``i``z``e`` `(`2`).` `T`h``e`` ``s``h``a`p`e`` `v`a``l`u`e``s`` ``a`r`e`:` `[`b``a``t``c``h``_``s``i``z``e``,`` ``m``a``x``_``decoded``_``l``e``n``g``t``h`]
- `n``e``g``_``s`u`m``_``l``o``g``i``t``s`:` `A` ``float`` ``m``a``t`r`i``x`` `(`b``a``t``c``h``_``s``i``z``e`` ``x`` `1)` ``c``o``n``t``a``i``n``i``n``g``,`` `f`o`r` ``t``h``e`` ``s``e`qu`e``n``c``e`` `f`o`u`n``d``,`` ``t``h``e`` ``n``e``g``a``t``i`v`e`` ``o`f` ``t``h``e`` ``s`u`m`` ``o`f` ``t``h``e`` ``g`r`e``a``t``e``s``t`` ``l``o``g``i``t`` ``a``t`` ``e``a``c``h`` ``t``i``m``e`fr`a``m``e`.
