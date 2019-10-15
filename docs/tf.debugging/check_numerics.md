
Defined in generated file: python/ops/gen_array_ops.py

Checks a tensor for NaN and Inf values.
### Aliases:
- `tf.compat.v1.check_numerics`
- `tf.compat.v1.debugging.check_numerics`
- `tf.compat.v2.debugging.check_numerics`

```
 tf.debugging.check_numerics(
    tensor,
    message,
    name=None
)
```

When run, reports an InvalidArgument error if tensor has any values that are not a number (NaN) or infinity (Inf). Otherwise, passes tensor as-is.
#### Args:
- `tensor`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`.
- `message`: A `string`. Prefix of the error `message`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as tensor.
