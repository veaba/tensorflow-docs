Defined in generated file: python/ops/gen_math_ops.py
Computes the trignometric inverse sine of x element-wise.
### Aliases:
- tf.asin
- tf.compat.v1.asin
- tf.compat.v1.math.asin
- tf.compat.v2.asin
- tf.compat.v2.math.asin

```
 tf.math.asin(
    x,
    name=None
)
```
[tf.math.asin](https://tensorflow.google.cn/api_docs/python/tf/math/asin)The  operation returns the inverse of tf.math.sin, such that if y = tf.math.sin(x) then, x = (y).

[tf.math.asin](https://tensorflow.google.cn/api_docs/python/tf/math/asin)Note: The output of  will lie within the invertible range of sine, i.e [-pi/2, pi/2].

#### For example:

```
 # Note: [1.047, 0.785] ~= [(pi/3), (pi/4)]
x = tf.constant([1.047, 0.785])
y = tf.math.sin(x) # [0.8659266, 0.7068252]

tf.math.asin(y) # [1.047, 0.785] = x
```
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, int32, int64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
