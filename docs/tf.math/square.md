Defined in generated file: python/ops/gen_math_ops.py
Computes square of x element-wise.
### Aliases:
- tf.compat.v1.math.square
- tf.compat.v1.square
- tf.compat.v2.math.square
- tf.compat.v2.square
- tf.square

```
 tf.math.square(
    x,
    name=None
)
```
### Used in the guide:
- Writing custom layers and models with Keras
- Eager execution
### Used in the tutorials:
- Customization basics: tensors and operations
- Custom training: basics
- Custom training with tf.distribute.Strategy
I.e.,
.
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, int32, int64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.square(x.values, ...), x.dense_shape)
