Defined in generated file: python/ops/gen_math_ops.py
Computes exponential of x element-wise. y=ex.
### Aliases:
- tf.compat.v1.exp
- tf.compat.v1.math.exp
- tf.compat.v2.exp
- tf.compat.v2.math.exp
- tf.exp

```
 tf.math.exp(
    x,
    name=None
)
```
### Used in the guide:
- Writing custom layers and models with Keras
- Eager execution
### Used in the tutorials:
- Convolutional Variational Autoencoder
This function computes the exponential of every element in the input tensor. i.e. exp`(x)` or e^`(x)`, where x is the input tensor. e denotes Euler's number and is approximately equal to 2.718281. Output is positive for any real input.
For complex numbers, the exponential value is calculated as follows:
Let's consider complex number 1+1j as an example. e^1 * (cos 1 + i sin 1) = 2.7182818284590 * (0.54030230586+0.8414709848j)
#### Args:
- x: A Tensor. Must be one of the following types: bfloat16, half, float32, float64, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as x.
