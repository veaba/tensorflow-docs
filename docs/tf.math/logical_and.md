Defined in generated file: python/ops/gen_math_ops.py
Returns the truth value of x AND y element-wise.
### Aliases:
- tf.RaggedTensor.and
- tf.compat.v1.RaggedTensor.and
- tf.compat.v1.logical_and
- tf.compat.v1.math.logical_and
- tf.compat.v2.RaggedTensor.and
- tf.compat.v2.logical_and
- tf.compat.v2.math.logical_and
- tf.logical_and

```
 tf.math.logical_and(
    x,
    y,
    name=None
)
```
### Used in the tutorials:
- Transformer model for language understanding
[math.logical_and](https://tensorflow.google.cn/api_docs/python/tf/math/logical_and)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- x: A Tensor of type bool.
- y: A Tensor of type bool.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type bool.
