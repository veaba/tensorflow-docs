Decode a 16-bit PCM WAV file to a float tensor.

**别名** : [ `tf.compat.v1.audio.decode_wav` ](/api_docs/python/tf/audio/decode_wav), [ `tf.compat.v2.audio.decode_wav` ](/api_docs/python/tf/audio/decode_wav)

```
 tf.audio.decode_wav(
    contents,
    desired_channels=-1,
    desired_samples=-1,
    name=None
)
 
```

The -32768 to 32767 signed 16-bit values will be scaled to -1.0 to 1.0 in float.

When desired_channels is set, if the input contains fewer channels than thisthen the last channel will be duplicated to give the requested number, else ifthe input has more channels than requested then the additional channels will beignored.

If desired_samples is set, then the audio will be cropped or padded with zeroesto the requested length.

The first output contains a Tensor with the content of the audio samples. Thelowest dimension will be the number of channels, and the second will be thenumber of samples. For example, a ten-sample-long stereo WAV file should give anoutput shape of [10, 2].

#### 参数：
- **`contents`** : A  `Tensor`  of type  `string` .The WAV-encoded audio, usually from a file.
- **`desired_channels`** : An optional  `int` . Defaults to  `-1` .Number of sample channels wanted.
- **`desired_samples`** : An optional  `int` . Defaults to  `-1` .Length of audio requested.
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (audio, sample_rate).

- **`audio`** : A  `Tensor`  of type  `float32` .
- **`sample_rate`** : A  `Tensor`  of type  `int32` .
