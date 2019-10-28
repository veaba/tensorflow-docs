Delete the tensor for the given tensor handle.

```
 tf.compat.v1.delete_session_tensor(
    handle,
    name=None
)
```
This is EXPERIMENTAL and subject to change.
Delete the tensor of a given tensor handle. The tensor is produced in a previous run() and stored in the state of the session.
#### Args:
- `handle`: The string representation of a persistent tensor `handle`.
- `name`: Optional `name` prefix for the return tensor.
#### Returns:
A pair of graph elements. The first is a placeholder for feeding a tensor handle and the second is a deletion operation.
