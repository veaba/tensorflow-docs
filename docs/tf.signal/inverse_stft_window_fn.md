Generates a window function that can be used in inverse_stft.
### Aliases:
- tf.compat.v1.signal.inverse_stft_window_fn
- tf.compat.v2.signal.inverse_stft_window_fn

```
 tf.signal.inverse_stft_window_fn(
    frame_step,
    forward_window_fn=tf.signal.hann_window,
    name=None
)
```
Constructs a window that is equal to the forward window with a further pointwise amplitude correction. inverse_stft_window_fn is equivalent to forward_window_fn in the case where it would produce an exact inverse.
See examples in inverse_stft documentation for usage.
#### Args:
- frame_step: An integer scalar Tensor. The number of samples to step.
- forward_window_fn: window_fn used in the forward transform, stft.
- name: An optional name for the operation.
#### Returns:
A callable that takes a window length and a dtype keyword argument and returns a [window_length] Tensor of samples in the provided datatype. The returned window is suitable for reconstructing original waveform in inverse_stft.
