
Computes the power of one value to another.
### Aliases:
- `tf.RaggedTensor.__pow__`
- `tf.compat.v1.RaggedTensor.__pow__`
- `tf.compat.v1.math.pow`
- `tf.compat.v1.pow`
- `tf.compat.v2.RaggedTensor.__pow__`
- `tf.compat.v2.math.pow`
- `tf.compat.v2.pow`
- `tf.pow`

```
 tf.math.pow(
    x,
    y,
    name=None
)
```

Given a tensor x and a tensor y, this operation computes
for corresponding elements in x and y. For example:

```
 x = tf.constant([[2, 2], [3, 3]])
y = tf.constant([[8, 16], [2, 3]])
tf.pow(x, y)  # [[256, 65536], [9, 27]]
```
#### Args:
- `x`: A `Tensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
- `y`: A `Tensor` of t`y`pe `float16`, `float32`, `float64`, `int32`, `int64`, `complex64`, or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor.
