Computes the 1D Discrete Cosine Transform (DCT) of `input`.
### Aliases:
- `tf.compat.v1.signal.dct`
- `tf.compat.v1.spectral.dct`
- `tf.compat.v2.signal.dct`

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
Currently only Types I, II and III are supported. Type I is implemented using a length `2N` padded `tf.signal.rfft`. Type II is implemented using a length `2N` padded `tf.signal.rfft`, as described here: Type 2 DCT using `2N` FFT padded (Makhoul). Type III is a fairly straightforward inverse of Type II (i.e. using a length `2N` padded `tf.signal.irfft`).
#### Args:
- `input`: A `[..., samples]` `float32` `Tensor` containing the signals to take the DCT of.
- `type`: The DCT `type` to perform. Must be 1, 2 or 3.
- `n`: The le`n`gth of the tra`n`sform. If le`n`gth is less tha`n` seque`n`ce le`n`gth, o`n`ly the first `n` eleme`n`ts of the seque`n`ce are co`n`sidered for the DCT. If `n` is greater tha`n` the seque`n`ce le`n`gth, zeros are padded a`n`d the`n` the DCT is computed as usual.
- `axis`: For future expansion. The `axis` to compute the DCT along. Must be `-1`.
- `norm`: The `norm`alization to apply. `None` for no `norm`alization or `'ortho'` for ortho`norm`al `norm`alization.
- `name`: An optional `name` for the operation.
#### Returns:
A `[..., samples]` `float32` `Tensor` containing the DCT of `input`.
#### Raises:
- `ValueError`: If `type` is `n`ot `1`, `2` or `3`, `axis` is `n`ot `-1`, `n` is `n`ot `None` or greater tha`n` 0, or `n`orm is `n`ot `None` or `'ortho'`.
- `ValueError`: If `type` is `1` and `norm` is `ortho`.
#### Scipy Compatibility
Equivalent to scipy.fftpack.dct for Type-I, Type-II and Type-III DCT.
