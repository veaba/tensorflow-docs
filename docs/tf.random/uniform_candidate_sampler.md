
Samples a set of classes using a uniform base distribution.
### Aliases:
- `tf.compat.v1.nn.uniform_candidate_sampler`
- `tf.compat.v1.random.uniform_candidate_sampler`
- `tf.compat.v2.random.uniform_candidate_sampler`

```
 tf.random.uniform_candidate_sampler(
    true_classes,
    num_true,
    num_sampled,
    unique,
    range_max,
    seed=None,
    name=None
)
```

This operation randomly samples a tensor of sampled classes (sampled_candidates) from the range of integers [0, range_max).

The elements of sampled_candidates are drawn without replacement (if unique=True) or with replacement (if unique=False) from the base distribution.

The base distribution for this operation is the uniform distribution over the range of integers [0, range_max).
[this document](http://www.tensorflow.org/extras/candidate_sampling.pdf)In addition, this operation returns tensors true_expected_count and sampled_expected_count representing the number of times each of the target classes (true_classes) and the sampled classes (sampled_candidates) is expected to occur in an average tensor of sampled classes. These values correspond to Q(y|x) defined in . If unique=True, then these are post-rejection probabilities and we compute them approximately.

#### Args:
- `true_classes`:` `A` ``Tensor`` `of` ``t`yp`e`` ``int64`` ``a``n`d` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``t``r``u``e`].` `T`h``e`` ``t``a``r`g`e``t`` ``c`l`a``s``s``e``s`.
- `n``u``m``_``t``r``u``e`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``t``a``r`g`e``t`` ``c`l`a``s``s``e``s`` `p`e``r`` ``t``r``a``i``n``i``n`g` ``e`x`a``m`pl`e`.
- `n``u``m``_``s``a``m``p``l``e``d`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``c``l``a``s``s``e``s`` ``t`o` ``r``a``n``d`o`m``l`y` ``s``a``m``p``l``e`.` `T`h``e`` ``s``a``m``p``l``e``d``_``c``a``n``d``i``d``a``t``e``s`` ``r``e``t``u``r``n`` `v`a``l``u``e`` `w`i``l``l`` ``h``a`v`e`` ``s``h``a``p``e`` `[`n``u``m``_``s``a``m``p``l``e``d`].` `If` ``u``n``i`q`u``e`=T`r``u``e``,`` ``n``u``m``_``s``a``m``p``l``e``d`` ``m``u``s``t`` ``b``e`` ``l``e``s``s`` ``t``h``a``n`` `o`r`` ``e`q`u``a``l`` ``t`o` ``r``a``n`g`e``_``m``a`x.
- `u``n``i`q`u``e`:` `A` ``b`oo`l`.` `D`e``t``e``r``m``i``n``e``s`` `w`h``e``t``h``e``r`` ``a``l``l`` ``s``a``m``p``l``e``d`` ``c``l``a``s``s``e``s`` ``i``n`` ``a`` ``b``a``t``c``h`` ``a``r``e`` ``u``n``i`q`u``e`.
- `r``a``n`g`e``_``m``a`x:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``p`o`s``s``i``b``l``e`` ``c``l``a``s``s``e``s`.
- `s``e``e``d`:` `A`n`` ``i``n``t`.` `A`n`` `o`p``e``r``a``t``i`o`n`-`s``p``e``c``i`f`i``c`` ``s``e``e``d`.` `D`e`f`a``u``l``t`` ``i``s`` `0.
- `n``a``m``e`:` `A` ``n``a``m``e`` `fo`r`` ``t``h``e`` `o`p``e``r``a``t``i`o`n`` `(o`p``t``i`o`n``a``l`).
#### Returns:
- `sampled_candidates`: A t`e``n``s`or of ty`p``e` `int64` `a``n``d` `s`h`a``p``e` [`n``u``m``_``s``a``m``p``l``e``d`]. Th`e` `s``a``m``p``l``e``d` c`l``a``s``s``e``s`, `e`ith`e`r with `p`o`s``s`ib`l``e` `d``u``p``l`ic`a`t`e``s` (`u``n`iq`u``e`=F`a``l``s``e`) or `a``l``l` `u``n`iq`u``e` (`u``n`iq`u``e`=Tr`u``e`). I`n` `e`ith`e`r c`a``s``e`, `sampled_candidates` i`s` i`n``d``e``p``e``n``d``e``n`t of th`e` tr`u``e` c`l``a``s``s``e``s`.
- `true_expected_count`: A t`e``n``s`or of ty`p``e` `float`. S`a``m``e` `s`h`a``p``e` `a``s` `true_classes`. Th`e` `e`x`p``e`ct`e``d` co`u``n`t`s` `u``n``d``e`r th`e` `s``a``m``p``l`i`n`g `d`i`s`trib`u`tio`n` of `e``a`ch of `true_classes`.
- `s``a``m``p``l``e``d``_``e`x`p``e`ct`e``d``_`co`u``n`t: A t`e``n``s`or of ty`p``e` `float`. S`a``m``e` `s`h`a``p``e` `a``s` `sampled_candidates`. Th`e` `e`x`p``e`ct`e``d` co`u``n`t`s` `u``n``d``e`r th`e` `s``a``m``p``l`i`n`g `d`i`s`trib`u`tio`n` of `e``a`ch of `sampled_candidates`.
