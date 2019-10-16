
Defined in generated file: python/ops/gen_math_ops.py

Returns the truth value of (x >= y) element-wise.
### Aliases:
- `tf.RaggedTensor.__ge__`
- `tf.Tensor.__ge__`
- `tf.compat.v1.RaggedTensor.__ge__`
- `tf.compat.v1.Tensor.__ge__`
- `tf.compat.v1.greater_equal`
- `tf.compat.v1.math.greater_equal`
- `tf.compat.v2.RaggedTensor.__ge__`
- `tf.compat.v2.Tensor.__ge__`
- `tf.compat.v2.greater_equal`
- `tf.compat.v2.math.greater_equal`
- `tf.greater_equal`

```
 tf.math.greater_equal(
    x,
    y,
    name=None
)
```
[math.greater_equal](https://www.tensorflow.org/api_docs/python/tf/math/greater_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
