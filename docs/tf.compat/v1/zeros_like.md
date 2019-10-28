Creates a tensor with all elements set to zero.

```
 tf.compat.v1.zeros_like(
    tensor,
    dtype=None,
    name=None,
    optimize=True
)
```
Given a single `tensor` (`tensor`), this operation returns a `tensor` of the same type and shape as `tensor` with all elements set to zero. Optionally, you can use `dtype` to specify a new type for the returned `tensor`.
#### For example:

```
 tensor = tf.constant([[1, 2, 3], [4, 5, 6]])
tf.zeros_like(tensor)  # [[0, 0, 0], [0, 0, 0]]
```
#### Args:
- `tensor`: A `Tensor`.
- `dtype`: A type for the returned `Tensor`. Must be `float16`, `float32`, `float64`, `int8`, `uint8`, `int16`, `uint16`, `int32`, `int64`, `complex64`, `complex128`, `bool` or `string`.
- `name`: A `name` for the operation (optional).
- `optimize`: if true, attempt to statically determine the shape of 'tensor' and encode it as a constant.
#### Returns:
A `Tensor` with all elements set to zero.
