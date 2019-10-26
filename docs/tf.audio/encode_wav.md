Defined in generated file: python/ops/gen_audio_ops.py
Encode audio data using the WAV file format.
### Aliases:
- tf.compat.v1.audio.encode_wav
- tf.compat.v2.audio.encode_wav

```
 tf.audio.encode_wav(
    audio,
    sample_rate,
    name=None
)
```
This operation will generate a string suitable to be saved out to create a .wav audio file. It will be encoded in the 16-bit PCM format. It takes in float values in the range -1.0f to 1.0f, and any outside that value will be clamped to that range.
audio is a 2-D float Tensor of shape [length, channels]. sample_rate is a scalar Tensor holding the rate to use (e.g. 44100).
#### Args:
- audio: A Tensor of type float32. 2-D with shape [length, channels].
- sample_rate: A Tensor of type int32. Scalar containing the sample frequency.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type string.
