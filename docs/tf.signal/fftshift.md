
Shift the zero-frequency component to the center of the spectrum.
### Aliases:
- `tf.compat.v1.signal.fftshift`
- `tf.compat.v2.signal.fftshift`

```
 tf.signal.fftshift(
    x,
    axes=None,
    name=None
)
```

This function swaps half-spaces for all axes listed (defaults to all). Note that y[0] is the Nyquist component only if len(x) is even.
#### For example:

```
 x = tf.signal.fftshift([ 0.,  1.,  2.,  3.,  4., -5., -4., -3., -2., -1.])
x.numpy() # array([-5., -4., -3., -2., -1.,  0.,  1.,  2.,  3.,  4.])
```
#### Args:
- `x`: `Tensor`, input tensor.
- `axes`: `int` or shape `tuple`, optional A`x`es over which to shift. Default is None, which shifts all `axes`.
- `name`: An optional `name` for the operation.
#### Returns:

A Tensor, The shifted tensor.
#### Numpy Compatibility

Equivalent to numpy.fft.fftshift. https://docs.scipy.org/doc/numpy/reference/generated/numpy.fft.fftshift.html
