Returns x * y element-wise.
### Aliases:
- tf.RaggedTensor.mul
- tf.compat.v1.RaggedTensor.mul
- tf.compat.v1.math.multiply
- tf.compat.v1.multiply
- tf.compat.v2.RaggedTensor.mul
- tf.compat.v2.math.multiply
- tf.compat.v2.multiply
- tf.multiply

```
 tf.math.multiply(
    x,
    y,
    name=None
)
```
### Used in the guide:
- Train and evaluate with Keras
### Used in the tutorials:
- Automatic differentiation and gradient tape
- Customization basics: tensors and operations
[tf.multiply](https://tensorflow.google.cn/api_docs/python/tf/math/multiply)NOTE:  supports broadcasting. More about broadcasting here

#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, uint8, int8, uint16, int16, int32, int64, complex64, complex128.
- y: A Tensor. Must have the same type as x.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
