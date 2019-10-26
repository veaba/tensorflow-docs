[Discrete Cosine Transform (DCT)](https://en.wikipedia.org/wiki/Discrete_cosine_transform)Computes the 1D  of input.

### Aliases:
- tf.compat.v1.signal.dct
- tf.compat.v1.spectral.dct
- tf.compat.v2.signal.dct

```
 tf.signal.dct(
    input,
    type=2,
    n=None,
    axis=-1,
    norm=None,
    name=None
)
```
[tf.signal.rfft](https://tensorflow.google.cn/api_docs/python/tf/signal/rfft)Currently only Types I, II and III are supported. Type I is implemented using a length 2N padded . Type II is implemented using a length 2N padded , as described here: Type 2 DCT using 2N FFT padded (Makhoul). Type III is a fairly straightforward inverse of Type II (i.e. using a length 2N padded tf.signal.irfft).

#### Args:
- input: A [..., samples] float32 Tensor containing the signals to take the DCT of.
- type: The DCT type to perform. Must be 1, 2 or 3.
- n: The length of the transform. If length is less than sequence length, only the first n elements of the sequence are considered for the DCT. If n is greater than the sequence length, zeros are padded and then the DCT is computed as usual.
- axis: For future expansion. The axis to compute the DCT along. Must be -1.
- norm: The normalization to apply. None for no normalization or 'ortho' for orthonormal normalization.
- name: An optional name for the operation.
#### Returns:
A [..., samples] float32 Tensor containing the DCT of input.
#### Raises:
- ValueError: If type is not 1, 2 or 3, axis is not -1, n is not None or greater than 0, or norm is not None or 'ortho'.
- ValueError: If type is 1 and norm is ortho.
#### Scipy Compatibility
[scipy.fftpack.dct](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.dct.html)Equivalent to  for Type-I, Type-II and Type-III DCT.

