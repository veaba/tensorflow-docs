[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/signal/inverse_stft) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/signal/spectral_ops.py#L156-L275)  
  
  
Computes the inverse [Short-time Fourier
Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform) of
`stfts`.

### Aliases:

  * [`tf.compat.v1.signal.inverse_stft`](/api_docs/python/tf/signal/inverse_stft)
  * [`tf.compat.v2.signal.inverse_stft`](/api_docs/python/tf/signal/inverse_stft)

    
    
    tf.signal.inverse_stft(
        stfts,
        frame_length,
        frame_step,
        fft_length=None,
        window_fn=tf.signal.hann_window,
        name=None
    )
    

To reconstruct an original waveform, a complimentary window function should be
used in inverse_stft. Such a window function can be constructed with
tf.signal.inverse_stft_window_fn.

#### Example:

    
    
    frame_length = 400
    frame_step = 160
    waveform = tf.compat.v1.placeholder(dtype=tf.float32, shape=[1000])
    stft = tf.signal.stft(waveform, frame_length, frame_step)
    inverse_stft = tf.signal.inverse_stft(
        stft, frame_length, frame_step,
        window_fn=tf.signal.inverse_stft_window_fn(frame_step))
    

if a custom window_fn is used in stft, it must be passed to
inverse_stft_window_fn:

    
    
    frame_length = 400
    frame_step = 160
    window_fn = functools.partial(window_ops.hamming_window, periodic=True),
    waveform = tf.compat.v1.placeholder(dtype=tf.float32, shape=[1000])
    stft = tf.signal.stft(
        waveform, frame_length, frame_step, window_fn=window_fn)
    inverse_stft = tf.signal.inverse_stft(
        stft, frame_length, frame_step,
        window_fn=tf.signal.inverse_stft_window_fn(
           frame_step, forward_window_fn=window_fn))
    

Implemented with GPU-compatible ops and supports gradients.

#### Args:

  * **`stfts`** : A `complex64` `[..., frames, fft_unique_bins]` `Tensor` of STFT bins representing a batch of `fft_length`-point STFTs where `fft_unique_bins` is `fft_length // 2 + 1`
  * **`frame_length`** : An integer scalar `Tensor`. The window length in samples.
  * **`frame_step`** : An integer scalar `Tensor`. The number of samples to step.
  * **`fft_length`** : An integer scalar `Tensor`. The size of the FFT that produced `stfts`. If not provided, uses the smallest power of 2 enclosing `frame_length`.
  * **`window_fn`** : A callable that takes a window length and a `dtype` keyword argument and returns a `[window_length]` `Tensor` of samples in the provided datatype. If set to `None`, no windowing is used.
  * **`name`** : An optional name for the operation.

#### Returns:

A `[..., samples]` `Tensor` of `float32` signals representing the inverse STFT
for each input STFT in `stfts`.

#### Raises:

  * **`ValueError`** : If `stfts` is not at least rank 2, `frame_length` is not scalar, `frame_step` is not scalar, or `fft_length` is not scalar.

