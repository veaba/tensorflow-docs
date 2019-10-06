
Defined in generated file: python/ops/gen_math_ops.py

Computes numerical negative value element-wise.
### Aliases:
- `tf.RaggedTensor.__neg__`
- `tf.Tensor.__neg__`
- `tf.compat.v1.RaggedTensor.__neg__`
- `tf.compat.v1.Tensor.__neg__`
- `tf.compat.v1.math.negative`
- `tf.compat.v1.negative`
- `tf.compat.v2.RaggedTensor.__neg__`
- `tf.compat.v2.Tensor.__neg__`
- `tf.compat.v2.math.negative`
- `tf.compat.v2.negative`
- `tf.negative`

```
 tf.math.negative(
    x,
    name=None
)
```

I.e.,
.
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.negative(x.values, ...), x.dense_shape)
