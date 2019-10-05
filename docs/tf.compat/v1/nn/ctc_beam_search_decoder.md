
Performs beam search decoding on the logits given in input.

```
 tf.compat.v1.nn.ctc_beam_search_decoder(
    inputs,
    sequence_length,
    beam_width=100,
    top_paths=1,
    merge_repeated=True
)
```

Note The ctc_greedy_decoder is a special case of the ctc_beam_search_decoder with top_paths=1 and beam_width=1 (but that decoder is faster for this special case).

If merge_repeated is True, merge repeated classes in the output beams. This means that if consecutive entries in a beam are the same, only the first of these is emitted. That is, when the sequence is A B B * B * B (where '*' is the blank label), the return value is:
- `A B` if `merge_repeated = True`.
- `A B` B B if `merge_repeated = False`.
#### Args:
- `inputs`:` `3-D` ``float`` ``Tensor`,` ``s``i``z``e`` `[`m``a``x``_``t``i``m``e`` ``x`` ``b``a``t``c``h``_``s``i``z``e`` ``x`` ``n``u``m``_``c``l``a``s``s``e``s`].` `T`h``e`` ``l`og`i``t``s`.
- `s``e`q`u``e``n``c``e``_``l``e``n`g`t``h`:` `1-D` ``i``n``t`32` `v`e``c``t`or` ``c`o`n``t``a``i``n``i``n`g` ``s``e`q`u``e``n``c``e`` ``l``e``n`g`t``h``s`,` ``h``a`v`i``n`g` ``s``i``z``e`` `[`b``a``t``c``h``_``s``i``z``e`].
- `b``e``a``m``_`w`i`d`t``h`:` `A`n`` ``i``n``t`` ``s``c``a``l``a`r` `>=` `0` `(`b``e``a``m`` ``s``e``a`r`c``h`` ``b``e``a``m`` `w`i`d`t``h`).
- `t`op`_`p`a``t``h``s`:` `A`n`` ``i``n``t`` ``s``c``a``l``a`r` `>=` `0,` `<=` ``b``e``a``m``_`w`i`d`t``h`` `(`c`o`n``t`ro`l``s`` `o`u``t`p`u``t`` ``s``i``z``e`).
- `m``e`rg`e``_`r`e`p`e``a``t``e`d:` `Boo`l``e``a``n`.` `D`e`f`a``u``l``t`:` `Tr`u``e`.
#### Returns:

A tuple (decoded, log_probabilities) where
- `decoded`: A list of length top_paths, where `decoded`[`j]` is a `SparseTensor` containing the `decoded` outputs:
`decoded`[`j]`.indices: Indices matrix (total_`decoded`_outputs[`j]` x `2`) The rows store: [batch, tim`e]`.
`decoded`[`j]`.values: Values vector, size (total_`decoded`_outputs[`j]`). The vector stores the `decoded` classes for beam j.
`decoded`[`j]`.dense_shape: Shape vector, size (`2`). The shape values are: [batch_size, max_`decoded`_length[`j]`].
- `log_probability`: A `float` matrix (`batch_size x top_paths`) containing sequence log-probabilities.
