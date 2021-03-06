Computes [MFCCs](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum) of  `log_mel_spectrograms` .

**别名** : [ `tf.compat.v1.signal.mfccs_from_log_mel_spectrograms` ](/api_docs/python/tf/signal/mfccs_from_log_mel_spectrograms), [ `tf.compat.v2.signal.mfccs_from_log_mel_spectrograms` ](/api_docs/python/tf/signal/mfccs_from_log_mel_spectrograms)

```
 tf.signal.mfccs_from_log_mel_spectrograms(
    log_mel_spectrograms,
    name=None
)
 
```

Implemented with GPU-compatible ops and supports gradients.

[Mel-Frequency Cepstral Coefficient (MFCC)](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum) calculation consists oftaking the DCT-II of a log-magnitude mel-scale spectrogram. [HTK](https://en.wikipedia.org/wiki/HTK_(software))'s MFCCsuse a particular scaling of the DCT-II which is almost orthogonalnormalization. We follow this convention.

All  `num_mel_bins`  MFCCs are returned and it is up to the caller to selecta subset of the MFCCs based on their application. For example, it is typicalto only use the first few for speech recognition, as this results inan approximately pitch-invariant representation of the signal.

#### 例如：


```
 sample_rate = 16000.0
# A Tensor of [batch_size, num_samples] mono PCM samples in the range [-1, 1].
pcm = tf.compat.v1.placeholder(tf.float32, [None, None])

# A 1024-point STFT with frames of 64 ms and 75% overlap.
stfts = tf.signal.stft(pcm, frame_length=1024, frame_step=256,
                       fft_length=1024)
spectrograms = tf.abs(stfts)

# Warp the linear scale spectrograms into the mel-scale.
num_spectrogram_bins = stfts.shape[-1].value
lower_edge_hertz, upper_edge_hertz, num_mel_bins = 80.0, 7600.0, 80
linear_to_mel_weight_matrix = tf.signal.linear_to_mel_weight_matrix(
  num_mel_bins, num_spectrogram_bins, sample_rate, lower_edge_hertz,
  upper_edge_hertz)
mel_spectrograms = tf.tensordot(
  spectrograms, linear_to_mel_weight_matrix, 1)
mel_spectrograms.set_shape(spectrograms.shape[:-1].concatenate(
  linear_to_mel_weight_matrix.shape[-1:]))

# Compute a stabilized log to get log-magnitude mel-scale spectrograms.
log_mel_spectrograms = tf.math.log(mel_spectrograms + 1e-6)

# Compute MFCCs from log_mel_spectrograms and take the first 13.
mfccs = tf.signal.mfccs_from_log_mel_spectrograms(
  log_mel_spectrograms)[..., :13]
 
```

#### 参数：
- **`log_mel_spectrograms`** : A  `[..., num_mel_bins]`   `float32`   `Tensor`  oflog-magnitude mel-scale spectrograms.
- **`name`** : An optional name for the operation.


#### 返回：
A  `[..., num_mel_bins]`   `float32`   `Tensor`  of the MFCCs of `log_mel_spectrograms` .

#### 加薪：
- **`ValueError`** : If  `num_mel_bins`  is not positive.
