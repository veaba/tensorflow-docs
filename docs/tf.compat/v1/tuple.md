Group tensors together.

```
 tf.compat.v1.tuple(
    tensors,
    name=None,
    control_inputs=None
)
```
This creates a tuple of `tensors` with the same values as the `tensors` argument, except that the value of each tensor is only returned after the values of all `tensors` have been computed.
`control_inputs` contains additional ops that have to finish before this op finishes, but whose outputs are not returned.
This can be used as a "join" mechanism for parallel computations: all the argument tensors can be computed in parallel, but the values of any tensor returned by `tuple` are only available after all the parallel computations are done.
See also `tf.group` and `tf.control_dependencies`.
#### Args:
- `tensors`: A list of `Tensor`s or `IndexedSlices`, some entries can be `None`.
- `name`: (optional) A `name` to use as a `name`_scope for the operation.
- `control_inputs`: List of additional ops to finish before returning.
#### Returns:
Same as `tensors`.
#### Raises:
- `ValueError`: If `tensors` does not contain any `Tensor` or `IndexedSlices`.
- `TypeError`: If `control_inputs` is not a list of `Operation` or `Tensor` objects.
