
Generate the set of all classes.
### Aliases:
- `tf.compat.v1.nn.all_candidate_sampler`
- `tf.compat.v1.random.all_candidate_sampler`
- `tf.compat.v2.nn.all_candidate_sampler`
- `tf.compat.v2.random.all_candidate_sampler`
- `tf.nn.all_candidate_sampler`

```
 tf.random.all_candidate_sampler(
    true_classes,
    num_true,
    num_sampled,
    unique,
    seed=None,
    name=None
)
```

Deterministically generates and returns the set of all possible classes. For testing purposes. There is no need to use this, since you might as well use full softmax or full logistic regression.
#### Args:
- `true_classes`:` `A` ``Tensor`` `of` ``t`yp`e`` ``int64`` ``a``n`d` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``t``r``u``e`].` `T`h``e`` ``t``a``r`g`e``t`` ``c`l`a``s``s``e``s`.
- `n``u``m``_``t``r``u``e`:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` ``t``a``r`g`e``t`` ``c`l`a``s``s``e``s`` `p`e``r`` ``t``r``a``i``n``i``n`g` ``e`x`a``m`pl`e`.
- `n``u``m``_``s``a``m`pl`e`d:` `A`n`` ``i``n``t`.` `T`h``e`` ``n``u``m``b``e``r`` `of` `po`s``s``i``b`l`e`` ``c`l`a``s``s``e``s`.
- `u``n``i`q`u``e`:` `A` ``b`ool.` `Ig`n`o`r``e`d.` ``u``n``i`q`u``e`.
- `s``e``e`d:` `A`n`` ``i``n``t`.` `A`n`` `op`e``r``a``t``i`o`n`-`s`p`e``c``i`f`i``c`` ``s``e``e`d.` `D`e`f`a``u`l`t`` ``i``s`` `0.
- `n``a``m``e`:` `A` ``n``a``m``e`` `fo`r`` ``t``h``e`` `op`e``r``a``t``i`o`n`` `(op`t``i`o`n``a`l).
#### Returns:
- `sampled_candidates`:` `A` `t`e``n``s`or` `of` `ty`p``e`` ``int64`` ``a``n``d`` ``s`h`a``p``e`` `[`n``u``m``_``s``a``m``p``l``e``d`].` `Thi`s`` `o`p``e`r`a`tio`n`` ``d``e`t`e`r`m`i`n`i`s`tic`a``l``l`y` `r`e`t`u`r`n``s`` `th`e`` ``e``n`tir`e`` `r`a``n`g`e`` `[`0``,`` ``n``u``m``_``s``a``m``p``l``e``d`].
- `true_expected_count`:` `A` `t`e``n``s`or` `of` `ty`p``e`` ``float`.` `S`a``m``e`` ``s`h`a``p``e`` ``a``s`` ``true_classes`.` `Th`e`` ``e`x`p``e`ct`e``d`` `co`u``n`t`s`` ``u``n``d``e`r` `th`e`` ``s``a``m``p``l`i`n`g` ``d`i`s`trib`u`tio`n`` `of` ``e``a`ch` `of` ``true_classes`.` `A`l``l`` `r`e`t`u`r`n``e``d`` `v`a``l``u``e``s`` ``a`r`e`` `1.`0`.
- `s``a``m``p``l``e``d``_``e`x`p``e`ct`e``d``_`co`u``n`t:` `A` `t`e``n``s`or` `of` `ty`p``e`` ``float`.` `S`a``m``e`` ``s`h`a``p``e`` ``a``s`` ``sampled_candidates`.` `Th`e`` ``e`x`p``e`ct`e``d`` `co`u``n`t`s`` ``u``n``d``e`r` `th`e`` ``s``a``m``p``l`i`n`g` ``d`i`s`trib`u`tio`n`` `of` ``e``a`ch` `of` ``sampled_candidates`.` `A`l``l`` `r`e`t`u`r`n``e``d`` `v`a``l``u``e``s`` ``a`r`e`` `1.`0`.
