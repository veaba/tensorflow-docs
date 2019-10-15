
Compute the position ids in sampled_candidates matching true_classes.
### Aliases:
- `tf.compat.v1.nn.compute_accidental_hits`
- `tf.compat.v2.nn.compute_accidental_hits`

```
 tf.nn.compute_accidental_hits(
    true_classes,
    sampled_candidates,
    num_true,
    seed=None,
    name=None
)
```

In Candidate Sampling, this operation facilitates virtually removing sampled classes which happen to match target classes. This is done in Sampled Softmax and Sampled Logistic.
[Candidate Sampling Algorithms Reference](http://www.tensorflow.org/extras/candidate_sampling.pdf)See our .


We presuppose that the sampled_candidates are unique.

We call it an 'accidental hit' when one of the target classes matches one of the sampled classes. This operation reports accidental hits as triples (index, id, weight), where index represents the row number in true_classes, id represents the position in sampled_candidates, and weight is -FLOAT_MAX.

The result of this op should be passed through a sparse_to_dense operation, then added to the logits of the sampled classes. This removes the contradictory effect of accidentally sampling the true target classes as noise classes for the same example.
#### Args:
- `true_classes`:` `A` ``Tensor`` `of` ``t`yp`e`` ``int64`` ``a``n`d` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``t``r``u``e`].` `T`h``e`` ``t``a``r`g`e``t`` ``c`l`a``s``s``e``s`.
- `s``a``m``p``l``e``d``_``c``a``n``d``i``d``a``t``e``s`:` `A` ``t``e``n``s`o`r`` `of` ``t`y`p``e`` ``int64`` ``a``n``d`` ``s``h``a``p``e`` `[`n``u``m``_``s``a``m``p``l``e``d`].` `T`h``e`` ``s``a``m``p``l``e``d``_``c``a``n``d``i``d``a``t``e``s`` `o`u``t``p``u``t`` `of` `C`a``n``d``i``d``a``t``e`S`a``m``p``l``e``r`.
- `n``u``m``_``t``r``u``e`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``t``a``r`g`e``t`` ``c``l``a``s``s``e``s`` ``p``e``r`` ``t``r``a``i``n``i``n`g` ``e`x`a``m``p``l``e`.
- `s``e``e``d`:` `A`n`` ``i``n``t`.` `A`n`` `o`p``e``r``a``t``i`o`n`-`s``p``e``c``i`f`i``c`` ``s``e``e``d`.` `D`e`f`a``u``l``t`` ``i``s`` `0.
- `n``a``m``e`:` `A` ``n``a``m``e`` `fo`r`` ``t``h``e`` `o`p``e``r``a``t``i`o`n`` `(o`p``t``i`o`n``a``l`).
#### Returns:
- `indices`: A `Tensor` of `t`yp`e` `int32` `a``n``d` `s``h``a`p`e` [`n``u``m``_``a``c``c``i``d``e``n``t``a``l``_``h``i``t``s`]. V`a``l``u``e``s` `i``n``d``i``c``a``t``e` row`s` `i``n` `t`r`u``e``_``c``l``a``s``s``e``s`.
- `i``d``s`: A `Tensor` of `t`yp`e` `i``n``t`64 `a``n``d` `s``h``a`p`e` [`n``u``m``_``a``c``c``i``d``e``n``t``a``l``_``h``i``t``s`]. V`a``l``u``e``s` `i``n``d``i``c``a``t``e` po`s``i``t``i`o`n``s` `i``n` `s``a``m`p`l``e``d``_``c``a``n``d``i``d``a``t``e``s`.
- `weights`: A `Tensor` of `t`yp`e` `float` `a``n``d` `s``h``a`p`e` [`n``u``m``_``a``c``c``i``d``e``n``t``a``l``_``h``i``t``s`]. E`a``c``h` v`a``l``u``e` `i``s` `-FLOAT_MAX`.
