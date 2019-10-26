Computes log of the determinant of a hermitian positive definite matrix.
### Aliases:
- tf.compat.v1.linalg.logdet
- tf.compat.v2.linalg.logdet

```
 tf.linalg.logdet(
    matrix,
    name=None
)
```

```
 # Compute the determinant of a matrix while reducing the chance of over- or
underflow:
A = ... # shape 10 x 10
det = tf.exp(tf.linalg.logdet(A))  # scalar
```
#### Args:
- matrix: A Tensor. Must be float16, float32, float64, complex64, or complex128 with shape [..., M, M].
- name: A name to give this Op. Defaults to logdet.
#### Returns:
The natural log of the determinant of matrix.
#### Numpy Compatibility
Equivalent to numpy.linalg.slogdet, although no sign is returned since only hermitian positive definite matrices are supported.
