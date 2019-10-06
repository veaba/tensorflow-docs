[Hamming](https://en.wikipedia.org/wiki/Window_function#Hann_and_Hamming_windows)Generate a  window.

### Aliases:
- `tf.compat.v1.signal.hamming_window`
- `tf.compat.v2.signal.hamming_window`

```
 tf.signal.hamming_window(
    window_length,
    periodic=True,
    dtype=tf.dtypes.float32,
    name=None
)
```
#### Args:
- `window_length`: A scalar `Tensor` indicating the window length to generate.
- `periodic`: A bool `Tensor` indicating whether to generate a `periodic` or symmetric window. Periodic windows are typically used for spectral analysis while symmetric windows are typically used for digital filter design.
- `dtype`: The data type to produce. Must be a floating point type.
- `name`: An optional `name` for the operation.
#### Returns:

A Tensor of shape [window_length] of type dtype.
#### Raises:
- `ValueError`: If `dtype` is not a floating point type.
