
Defined in generated file: python/ops/gen_spectral_ops.py

Inverse 2D fast Fourier transform.
### Aliases:
- `tf.compat.v1.ifft2d`
- `tf.compat.v1.signal.ifft2d`
- `tf.compat.v1.spectral.ifft2d`
- `tf.compat.v2.signal.ifft2d`

```
 tf.signal.ifft2d(
    input,
    name=None
)
```

Computes the inverse 2-dimensional discrete Fourier transform over the inner-most 2 dimensions of input.
#### Args:
- `input`: A `Tensor`. Must be one of the following types: `complex64`, `complex128`. A complex tensor.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as input.
