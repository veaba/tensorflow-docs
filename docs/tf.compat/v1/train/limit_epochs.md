Returns tensor `num_epochs` times and then raises an `OutOfRange` error. (deprecated)

```
 tf.compat.v1.train.limit_epochs(
    tensor,
    num_epochs=None,
    name=None
)
```
#### Args:
- `tensor`: Any `Tensor`.
- `num_epochs`: A positive integer (optional). If specified, limits the number of steps the output tensor may be evaluated.
- `name`: A `name` for the operations (optional).
#### Returns:
tensor or `OutOfRange`.
#### Raises:
- `ValueError`: if `num_epochs` is invalid.
