Defined in generated file: python/ops/gen_math_ops.py
Returns an element-wise indication of the sign of a number.
### Aliases:
- tf.compat.v1.math.sign
- tf.compat.v1.sign
- tf.compat.v2.math.sign
- tf.compat.v2.sign
- tf.sign

```
 tf.math.sign(
    x,
    name=None
)
```
### Used in the tutorials:
- Adversarial example using FGSM
y = sign(x) = -1 if x < 0; 0 if x == 0; 1 if x > 0.
For complex numbers, y = sign(x) = x / |x| if x != 0, otherwise y = 0.
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, int32, int64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.sign(x.values, ...), x.dense_shape)
