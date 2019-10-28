Gather slices from params axis axis according to indices.
### Aliases:
- `tf.compat.v2.gather`

```
 tf.gather(
    params,
    indices,
    validate_indices=None,
    axis=None,
    batch_dims=0,
    name=None
)
```
Gather slices from params `axis` `axis` according to `indices`. `indices` must be an integer tensor of any dimension (usually 0-D or 1-D).
For 0-D (scalar) `indices`:
For 1-D (vector) `indices` with `batch_dims=0`:
In the general case, produces an output tensor where:
Where
The shape of the output tensor is:
Note that on CPU, if an out of bound index is found, an error is returned. On GPU, if an out of bound index is found, a 0 is stored in the corresponding output value.
See also `tf.gather_nd`.
#### Args:
- `params`: The `Tensor` from which to gather values. Must be at least rank `axis + 1`.
- `indices`: The index `Tensor`. Must be one of the following types: `int32`, `int64`. Must be in range `[0, params.shape[axis])`.
- `validate_indices`: Deprecated, does nothing.
- `axis`: A `Tensor`. Must be one of the following types: `int32`, `int64`. The `axis` in `params` to gather `indices` from. Must be greater than or equal to `batch_dims`. Defaults to the first non-batch dimension. Supports negative indexes.
#### Returns:
A `Tensor`. Has the same type as `params`.
