
Draws deterministic pseudorandom samples from a categorical distribution.
### Aliases:
- `tf.compat.v1.random.stateless_categorical`
- `tf.compat.v2.random.stateless_categorical`

```
 tf.random.stateless_categorical(
    logits,
    num_samples,
    seed,
    dtype=tf.dtypes.int64,
    name=None
)
```

This is a stateless version of tf.categorical: if run twice with the same seeds, it will produce the same pseudorandom numbers. The output is consistent across multiple runs on the same hardware (and between CPU and GPU), but may change between versions of TensorFlow or on non-CPU/GPU hardware.
#### Example:

```
 # samples has shape [1, 5], where each value is either 0 or 1 with equal
# probability.
samples = tf.random.stateless_categorical(
    tf.math.log([[0.5, 0.5]]), 5, seed=[7, 17])
```
#### Args:
- `logits``:`` `2-D` `T`e``n``s`or` `w`i``t``h`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s`].` `E`a``c``h`` ``s``l``i``c``e`` `[`i``,`` ``:`]` `r`e`pr`e``s``e``n``t``s`` ``t``h``e`` ``u``n``n`or`m``a``l``i``z``e`d` ``l`og-pro`b``a``b``i``l``i``t``i``e``s`` `for` ``a``l``l`` ``c``l``a``s``s``e``s`.
- `n``u``m``_``s``a``m`p`l``e``s``:`` `0-D.` `N`u``m``b``e`r` `of` ``i``n`d`e`p`e``n`d`e``n``t`` ``s``a``m`p`l``e``s`` ``t`o` `dr`a`w` `for` ``e``a``c``h`` `row` ``s``l``i``c``e`.
- `s``e``e`d`:`` `A` ``s``h``a`p`e`` `[2]` ``i``n``t``e`g`e`r` `T`e``n``s`or` `of` ``s``e``e`d`s`` ``t`o` ``t``h``e`` `r`a``n`do`m`` ``n``u``m``b``e`r` `g`e``n``e`r`a``t`or.
- `dtype``:`` ``i``n``t``e`g`e`r` ``t`yp`e`` ``t`o` ``u``s``e`` `for` ``t``h``e`` `o`u``t`p`u``t`.` `D`e`f`a``u``l``t``s`` ``t`o` ``i``n``t`64.
- `n``a``m``e``:`` `Op`t``i`o`n``a``l`` ``n``a``m``e`` `for` ``t``h``e`` `op`e`r`a``t``i`o`n`.
#### Returns:

The drawn samples of shape [batch_size, num_samples].
