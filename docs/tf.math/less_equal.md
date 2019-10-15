
Defined in generated file: python/ops/gen_math_ops.py

Returns the truth value of (x <= y) element-wise.
### Aliases:
- `tf.RaggedTensor.__le__`
- `tf.Tensor.__le__`
- `tf.compat.v1.RaggedTensor.__le__`
- `tf.compat.v1.Tensor.__le__`
- `tf.compat.v1.less_equal`
- `tf.compat.v1.math.less_equal`
- `tf.compat.v2.RaggedTensor.__le__`
- `tf.compat.v2.Tensor.__le__`
- `tf.compat.v2.less_equal`
- `tf.compat.v2.math.less_equal`
- `tf.less_equal`

```
 tf.math.less_equal(
    x,
    y,
    name=None
)
```
[math.less_equal](https://www.tensorflow.org/api_docs/python/tf/math/less_equal)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor of type bool.
