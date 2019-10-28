Defined in generated file: `python/ops/gen_array_ops.py`
Copy a tensor setting everything outside a central band in each innermost matrix
### Aliases:
- `tf.compat.v1.linalg.band_part`
- `tf.compat.v1.matrix_band_part`
- `tf.compat.v2.linalg.band_part`

```
 tf.linalg.band_part(
    input,
    num_lower,
    num_upper,
    name=None
)
```
### Used in the tutorials:
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
to zero.
The `band` part is computed as follows: Assume `input` has `k` dimensions `[I, J, K, ..., M, N]`, then the output is a tensor with the same shape where
band[i, j, k, ..., m, n] = in_band(m, n) * input[i, j, k, ..., m, n].
The indicator function
