
Defined in generated file: python/ops/gen_math_ops.py

Returns element-wise remainder of division. When x < 0 xor y < 0 is
### Aliases:
- `tf.RaggedTensor.__mod__`
- `tf.compat.v1.RaggedTensor.__mod__`
- `tf.compat.v1.floormod`
- `tf.compat.v1.math.floormod`
- `tf.compat.v1.math.mod`
- `tf.compat.v1.mod`
- `tf.compat.v2.RaggedTensor.__mod__`
- `tf.compat.v2.math.floormod`
- `tf.compat.v2.math.mod`
- `tf.math.mod`

```
 tf.math.floormod(
    x,
    y,
    name=None
)
```

true, this follows Python semantics in that the result here is consistent with a flooring divide. E.g. floor(x / y) * y + mod(x, y) = x.
[math.floormod](https://www.tensorflow.org/api_docs/python/tf/math/floormod)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- `x`: A `Tensor`. Must be one of the following types: `int32`, `int64`, `bfloat16`, `half`, `float32`, `float64`.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
