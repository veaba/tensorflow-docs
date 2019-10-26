Defined in generated file: python/ops/gen_math_ops.py
Returns the max of x and y (i.e. x > y ? x : y) element-wise.
### Aliases:
- tf.compat.v1.math.maximum
- tf.compat.v1.maximum
- tf.compat.v2.math.maximum
- tf.compat.v2.maximum
- tf.maximum

```
 tf.math.maximum(
    x,
    y,
    name=None
)
```
### Used in the tutorials:
- Transformer model for language understanding
[math.maximum](https://tensorflow.google.cn/api_docs/python/tf/math/maximum)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, int32, int64.
- y: A Tensor. Must have the same type as x.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
