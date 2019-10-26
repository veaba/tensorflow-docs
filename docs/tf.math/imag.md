Returns the imaginary part of a complex (or real) tensor.
### Aliases:
- tf.compat.v1.imag
- tf.compat.v1.math.imag
- tf.compat.v2.math.imag

```
 tf.math.imag(
    input,
    name=None
)
```
Given a tensor input, this operation returns a tensor of type float that is the imaginary part of each element in input considered as a complex number. If input is real, a tensor of all zeros is returned.
#### For example:

```
 x = tf.constant([-2.25 + 4.75j, 3.25 + 5.75j])
tf.math.imag(x)  # [4.75, 5.75]
```
#### Args:
- input: A Tensor. Must be one of the following types: float, double, complex64, complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type float32 or float64.
