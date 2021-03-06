Computes the [Short-time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform) of  `signals` .

**别名** : [ `tf.compat.v1.signal.stft` ](/api_docs/python/tf/signal/stft), [ `tf.compat.v2.signal.stft` ](/api_docs/python/tf/signal/stft)

```
 tf.signal.stft(    signals,    frame_length,    frame_step,    fft_length=None,    window_fn=tf.signal.hann_window,    pad_end=False,    name=None) 
```

Implemented with GPU-compatible ops and supports gradients.

#### 参数：
- **`signals`** : A  `[..., samples]`   `float32`   `Tensor`  of real-valued signals.
- **`frame_length`** : An integer scalar  `Tensor` . The window length in samples.
- **`frame_step`** : An integer scalar  `Tensor` . The number of samples to step.
- **`fft_length`** : An integer scalar  `Tensor` . The size of the FFT to apply.If not provided, uses the smallest power of 2 enclosing  `frame_length` .
- **`window_fn`** : A callable that takes a window length and a  `dtype`  keywordargument and returns a  `[window_length]`   `Tensor`  of samples in theprovided datatype. If set to  `None` , no windowing is used.
- **`pad_end`** : Whether to pad the end of  `signals`  with zeros when the providedframe length and step produces a frame that lies partially past its end.
- **`name`** : An optional name for the operation.


#### 返回：
A  `[..., frames, fft_unique_bins]`   `Tensor`  of  `complex64`  STFT values where `fft_unique_bins`  is  `fft_length // 2 + 1`  (the unique components of theFFT).

#### 加薪：
- **`ValueError`** : If  `signals`  is not at least rank 1,  `frame_length`  isnot scalar, or  `frame_step`  is not scalar.
