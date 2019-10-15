
Draws samples from a categorical distribution.
### Aliases:
- `tf.compat.v1.random.categorical`
- `tf.compat.v2.random.categorical`

```
 tf.random.categorical(
    logits,
    num_samples,
    dtype=None,
    seed=None,
    name=None
)
```
### Used in the tutorials:
- ``T``e``x``t`` ``g``e``n``e``r``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
#### Example:

```
 # samples has shape [1, 5], where each value is either 0 or 1 with equal
# probability.
samples = tf.random.categorical(tf.math.log([[0.5, 0.5]]), 5)
```
#### Args:
- `logits``:`` `2-D` `T`e``n``s`or` `w`i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`].` `E`a``c``h`` ``s``l``i``c``e`` `[`i``,`` ``:`]` `r`e`pr`e``s``e``n``t``s`` ``t``h``e`` ``u``n``n`or`m``a``l``i``z``e`d` ``l`og-pro`b``a``b``i``l``i``t``i``e``s`` `for` ``a``l``l`` ``c``l``a``s``s``e``s`.
- `n``u``m``_``s``a``m`p`l``e``s``:`` `0-D.` `N`u``m``b``e`r` `of` ``i``n`d`e`p`e``n`d`e``n``t`` ``s``a``m`p`l``e``s`` ``t`o` `dr`a`w` `for` ``e``a``c``h`` `row` ``s``l``i``c``e`.
- `dtype``:`` ``i``n``t``e`g`e`r` ``t`yp`e`` ``t`o` ``u``s``e`` `for` ``t``h``e`` `o`u``t`p`u``t`.` `D`e`f`a``u``l``t``s`` ``t`o` ``i``n``t`64.
- `s``e``e`d`:`` `A` `Py`t``h`o`n`` ``i``n``t``e`g`e`r.` `U`s``e`d` ``t`o` ``c`r`e``a``t``e`` ``a`` `r`a``n`do`m`` ``s``e``e`d` `for` ``t``h``e`` `d`i``s``t`r`i``b``u``t``i`o`n`.` `S`e``e`` ``t`f.`c`o`m`p`a``t`.v1.`s``e``t``_`r`a``n`do`m``_``s``e``e`d` `for` ``b``e``h``a`v`i`or.
- `n``a``m``e``:`` `Op`t``i`o`n``a``l`` ``n``a``m``e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`.
#### Returns:

The drawn samples of shape [batch_size, num_samples].
