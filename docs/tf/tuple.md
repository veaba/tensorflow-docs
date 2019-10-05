
Group tensors together.
### Aliases:
- `tf.compat.v2.tuple`

```
 tf.tuple(
    tensors,
    control_inputs=None,
    name=None
)
```

This creates a tuple of tensors with the same values as the tensors argument, except that the value of each tensor is only returned after the values of all tensors have been computed.

control_inputs contains additional ops that have to finish before this op finishes, but whose outputs are not returned.

This can be used as a "join" mechanism for parallel computations: all the argument tensors can be computed in parallel, but the values of any tensor returned by tuple are only available after all the parallel computations are done.
[tf.group](https://www.tensorflow.org/api_docs/python/tf/group)See also  and tf.control_dependencies.

#### Args:
- `tensors`: A list of `Tensor`s or `IndexedSlices`, some entries can be `None`.
- `control_inputs`: List of additional ops to finish before returning.
- `name`: (optional) A `name` to use as a `name`_scope for the operation.
#### Returns:

Same as tensors.
#### Raises:
- `ValueError`: If `tensors` does not contain any `Tensor` or `IndexedSlices`.
- `TypeError`: If `control_inputs` is not a list of `Operation` or `Tensor` objects.

Group tensors together.
### Aliases:
- `tf.compat.v2.tuple`

```
 tf.tuple(
    tensors,
    control_inputs=None,
    name=None
)
```

This creates a tuple of tensors with the same values as the tensors argument, except that the value of each tensor is only returned after the values of all tensors have been computed.

control_inputs contains additional ops that have to finish before this op finishes, but whose outputs are not returned.

This can be used as a "join" mechanism for parallel computations: all the argument tensors can be computed in parallel, but the values of any tensor returned by tuple are only available after all the parallel computations are done.
[tf.group](https://www.tensorflow.org/api_docs/python/tf/group)See also  and tf.control_dependencies.

#### Args:
- `tensors`: A list of `Tensor`s or `IndexedSlices`, some entries can be `None`.
- `control_inputs`: List of additional ops to finish before returning.
- `name`: (optional) A `name` to use as a `name`_scope for the operation.
#### Returns:

Same as tensors.
#### Raises:
- `ValueError`: If `tensors` does not contain any `Tensor` or `IndexedSlices`.
- `TypeError`: If `control_inputs` is not a list of `Operation` or `Tensor` objects.
