Builds part of a computation outside any current TPU replicate scope.

```
 tf.compat.v1.tpu.outside_compilation(
    computation,
    *args,
    **kwargs
)
```
#### Args:
- `computation`: A Python function that builds the `computation` to place on the host.
#### Returns:
The Tensors returned by computation.
