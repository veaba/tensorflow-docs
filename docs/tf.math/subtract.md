Returns x - y element-wise.
### Aliases:
- `tf.RaggedTensor.sub`
- `tf.compat.v1.RaggedTensor.sub`
- `tf.compat.v1.math.subtract`
- `tf.compat.v1.subtract`
- `tf.compat.v2.RaggedTensor.sub`
- `tf.compat.v2.math.subtract`
- `tf.compat.v2.subtract`
- `tf.subtract`

```
 tf.math.subtract(
    x,
    y,
    name=None
)
```
NOTE: `Subtract` supports broadcasting. More about broadcasting here
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `complex64`, `complex128`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. Has the same type as `x`.
