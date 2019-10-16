
Defined in generated file: python/ops/gen_math_ops.py

Computes the trignometric inverse tangent of x element-wise.
### Aliases:
- `tf.atan`
- `tf.compat.v1.atan`
- `tf.compat.v1.math.atan`
- `tf.compat.v2.atan`
- `tf.compat.v2.math.atan`

```
 tf.math.atan(
    x,
    name=None
)
```
[tf.math.atan](https://www.tensorflow.org/api_docs/python/tf/math/atan)The  operation returns the inverse of tf.math.tan, such that if y = tf.math.tan(x) then, x = (y).

[tf.math.atan](https://www.tensorflow.org/api_docs/python/tf/math/atan)Note: The output of  will lie within the invertible range of tan, i.e (-pi/2, pi/2).

#### For example:

```
 # Note: [1.047, 0.785] ~= [(pi/3), (pi/4)]
x = tf.constant([1.047, 0.785])
y = tf.math.tan(x) # [1.731261, 0.99920404]

tf.math.atan(y) # [1.047, 0.785] = x
```
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as x.
