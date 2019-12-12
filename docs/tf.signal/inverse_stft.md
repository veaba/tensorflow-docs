Computes the inverse [Short-time Fourier Transform](https://en.wikipedia.org/wiki/Short-time_Fourier_transform) of  `stfts` .

**别名** : [ `tf.compat.v1.signal.inverse_stft` ](/api_docs/python/tf/signal/inverse_stft), [ `tf.compat.v2.signal.inverse_stft` ](/api_docs/python/tf/signal/inverse_stft)

```
 tf.signal.inverse_stft(
    stfts,
    frame_length,
    frame_step,
    fft_length=None,
    window_fn=tf.signal.hann_window,
    name=None
)
 
```

To reconstruct an original waveform, a complimentary window function shouldbe used in inverse_stft. Such a window function can be constructed withtf.signal.inverse_stft_window_fn.

#### 示例：


```
 frame_length = 400
frame_step = 160
waveform = tf.compat.v1.placeholder(dtype=tf.float32, shape=[1000])
stft = tf.signal.stft(waveform, frame_length, frame_step)
inverse_stft = tf.signal.inverse_stft(
    stft, frame_length, frame_step,
    window_fn=tf.signal.inverse_stft_window_fn(frame_step))
 
```

if a custom window_fn is used in stft, it must be passed toinverse_stft_window_fn:

```
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
 
```

Implemented with GPU-compatible ops and supports gradients.

#### 参数：
- **`stfts`** : A  `complex64`   `[..., frames, fft_unique_bins]`   `Tensor`  of STFT binsrepresenting a batch of  `fft_length` -point STFTs where  `fft_unique_bins` is  `fft_length // 2 + 1` 
- **`frame_length`** : An integer scalar  `Tensor` . The window length in samples.
- **`frame_step`** : An integer scalar  `Tensor` . The number of samples to step.
- **`fft_length`** : An integer scalar  `Tensor` . The size of the FFT that produced `stfts` . If not provided, uses the smallest power of 2 enclosing `frame_length` .
- **`window_fn`** : A callable that takes a window length and a  `dtype`  keywordargument and returns a  `[window_length]`   `Tensor`  of samples in theprovided datatype. If set to  `None` , no windowing is used.
- **`name`** : An optional name for the operation.


#### 返回：
A  `[..., samples]`   `Tensor`  of  `float32`  signals representing the inverseSTFT for each input STFT in  `stfts` .

#### 加薪：
- **`ValueError`** : If  `stfts`  is not at least rank 2,  `frame_length`  is not scalar, `frame_step`  is not scalar, or  `fft_length`  is not scalar.
