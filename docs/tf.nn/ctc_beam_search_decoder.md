
Performs beam search decoding on the logits given in input.
### Aliases:
- `tf.compat.v1.nn.ctc_beam_search_decoder_v2`
- `tf.compat.v2.nn.ctc_beam_search_decoder`

```
 tf.nn.ctc_beam_search_decoder(
    inputs,
    sequence_length,
    beam_width=100,
    top_paths=1
)
```

Note The ctc_greedy_decoder is a special case of the ctc_beam_search_decoder with top_paths=1 and beam_width=1 (but that decoder is faster for this special case).
#### Args:
- `inputs`:` `3-D` ``float`` ``Tensor``,`` ``s``i``z``e`` `[`m``a``x``_``t``i``m``e``,`` ``b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`].` `T`h``e`` ``l`og`i``t``s`.
- `s``e`q`u``e``n``c``e``_``l``e``n`g`t``h`:` `1-D` ``i``n``t`32` `v`e``c``t`or` ``c`o`n``t``a``i``n``i``n`g` ``s``e`q`u``e``n``c``e`` ``l``e``n`g`t``h``s``,`` ``h``a`v`i``n`g` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e`].
- `b``e``a``m``_`w`i`d`t``h`:` `A`n`` ``i``n``t`` ``s``c``a``l``a`r` `>=` `0` `(`b``e``a``m`` ``s``e``a`r`c``h`` ``b``e``a``m`` `w`i`d`t``h`).
- `t`op`_`p`a``t``h``s`:` `A`n`` ``i``n``t`` ``s``c``a``l``a`r` `>=` `0`,`` `<=` ``b``e``a``m``_`w`i`d`t``h`` `(`c`o`n``t`ro`l``s`` `o`u``t`p`u``t`` ``s``i``z``e`).
#### Returns:

A tuple (decoded, log_probabilities) where
- `decoded`:` `A` `l`i`s`t`` `of` `l`e`ng`t``h`` ``t`op_p`a``t``h`s`,`` `w`h``e`r`e`` ``decoded`[`j]`` ``i`s` ``a`` ``SparseTensor`` ``c`on`t``a``i`n`i`ng` ``t``h``e`` ``decoded`` `ou`t`pu`t`s:
`decoded`[`j]`.`i`nd`i``c``e`s:` `Ind`i``c``e`s` ``m``a``t`r`i`x` `[`t`o`t``a`l_`decoded`_ou`t`pu`t`s[`j]``,`` ``2`];` `T`h``e`` `rows` `s`t`or`e`:` `[`b``a``t``c``h``,`` ``t``i``m``e`].
`decoded`[`j]`.v`a`lu`e`s:` `V`a`lu`e`s` `v`e``c``t`or`,`` `s`i`z`e`` `[`t`o`t``a`l_`decoded`_ou`t`pu`t`s[`j]`].` `T`h``e`` `v`e``c``t`or` `s`t`or`e`s` ``t``h``e`` ``decoded`` ``c`l`a`ss`e`s` `for` ``b``e``a``m`` ``j`.
`decoded`[`j]`.d`e`ns`e`_s`h``a`p`e`:` `S`h``a`p`e`` `v`e``c``t`or`,`` `s`i`z`e`` `(`2`).` `T`h``e`` `s`h``a`p`e`` `v`a`lu`e`s` ``a`r`e`:` `[`b``a``t``c``h`_s`i`z`e``,`` ``m``a`x_`decoded`_l`e`ng`t``h`[`j]`].
- `log_probability`:` `A` ``float`` ``m``a``t`r`i`x` `[`b``a``t``c``h``_``s``i``z``e``,`` ``t``o``p``_``p``a``t``h``s]`` ``c``o`n`t``a``i`n`i`ng` ``s``e`qu`e`n`c``e`` `l`o`g-`p`r`o``b``a``b``i`l`i``t``i``e``s`.
