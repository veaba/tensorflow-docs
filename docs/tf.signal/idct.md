[Inverse Discrete Cosine Transform (DCT)](https://en.wikipedia.org/wiki/Discrete_cosine_transform#Inverse_transforms)Computes the 1D  of input.

### Aliases:
- tf.compat.v1.signal.idct
- tf.compat.v1.spectral.idct
- tf.compat.v2.signal.idct

```
 tf.signal.idct(
    input,
    type=2,
    n=None,
    axis=-1,
    norm=None,
    name=None
)
```
Currently only Types I, II and III are supported. Type III is the inverse of Type II, and vice versa.
Note that you must re-normalize by 1/(2n) to obtain an inverse if norm is not 'ortho'. That is: signal == idct(dct(signal)) * 0.5 / signal.shape[-1]. When norm='ortho', we have: signal == idct(dct(signal, norm='ortho'), norm='ortho').
#### Args:
- input: A [..., samples] float32 Tensor containing the signals to take the DCT of.
- type: The IDCT type to perform. Must be 1, 2 or 3.
- n: For future expansion. The length of the transform. Must be None.
- axis: For future expansion. The axis to compute the DCT along. Must be -1.
- norm: The normalization to apply. None for no normalization or 'ortho' for orthonormal normalization.
- name: An optional name for the operation.
#### Returns:
A [..., samples] float32 Tensor containing the IDCT of input.
#### Raises:
- ValueError: If type is not 1, 2 or 3, n is not None,axisis not-1, ornormis notNoneor'ortho'`.
#### Scipy Compatibility
[scipy.fftpack.idct](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.idct.html)Equivalent to  for Type-I, Type-II and Type-III DCT.

