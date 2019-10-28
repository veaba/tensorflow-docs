Stacks a list of rank-`R` tensors into one rank-`R+1)` `R`aggedTensor.
### Aliases:
- `tf.compat.v1.ragged.stack`
- `tf.compat.v2.ragged.stack`

```
 tf.ragged.stack(
    values,
    axis=0,
    name=None
)
```
Given a list of tensors or ragged tensors with the same rank `R` (`R` >= axis), returns a rank-`R`+1 `R`aggedTensor `result` such that `result`[i0...iaxis] is `[value[i0...iaxis] for value in values]`.
#### Example:
#### Args:
- `values`: A list of `tf.Tensor` or `tf.RaggedTensor`. May not be empty. All `values` must have the same rank and the same dtype; but unlike `tf.stack`, they can have arbitrary dimension sizes.
- `axis`: A python integer, indicating the dimension along which to stack. (Note: Unlike `tf.stack`, the `axis` parameter must be statically known.) Negative `values` are supported only if the rank of at least one `values` value is statically known.
- `name`: A `name` prefix for the returned tensor (optional).
#### Returns:
