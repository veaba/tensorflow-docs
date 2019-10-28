Defined in generated file: `python/ops/gen_io_ops.py`
Returns the set of files matching one or more glob patterns.
### Aliases:
- `tf.compat.v1.io.matching_files`
- `tf.compat.v1.matching_files`
- `tf.compat.v2.io.matching_files`

```
 tf.io.matching_files(
    pattern,
    name=None
)
```
Note that this routine only supports wildcard characters in the basename portion of the pattern, not in the directory portion. Note also that the order of filenames returned is deterministic.
#### Args:
- `pattern`: A `Tensor` of type `string`. Shell wildcard `pattern`(s). Scalar or vector of type `string`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `string`.
