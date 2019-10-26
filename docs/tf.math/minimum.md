Defined in generated file: python/ops/gen_math_ops.py
Returns the min of x and y (i.e. x < y ? x : y) element-wise.
### Aliases:
- tf.compat.v1.math.minimum
- tf.compat.v1.minimum
- tf.compat.v2.math.minimum
- tf.compat.v2.minimum
- tf.minimum

```
 tf.math.minimum(
    x,
    y,
    name=None
)
```
### Used in the tutorials:
- Transformer model for language understanding
[math.minimum](https://tensorflow.google.cn/api_docs/python/tf/math/minimum)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, int32, int64.
- y: A Tensor. Must have the same type as x.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
