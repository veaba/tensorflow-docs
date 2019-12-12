使用wav文件格式对音频数据进行编码。

**别名** : [ `tf.compat.v1.audio.encode_wav` ](/api_docs/python/tf/audio/encode_wav), [ `tf.compat.v2.audio.encode_wav` ](/api_docs/python/tf/audio/encode_wav)

```
 tf.audio.encode_wav(    audio,    sample_rate,    name=None) 
```

This operation will generate a string suitable to be saved out to create a .wavaudio file. It will be encoded in the 16-bit PCM format. It takes in floatvalues in the range -1.0f to 1.0f, and any outside that value will be clamped tothat range.

 `audio`  is a 2-D float Tensor of shape  `[length, channels]` . `sample_rate`  is a scalar Tensor holding the rate to use (e.g. 44100).

#### 参数：
- **`audio`** : A  `Tensor`  of type  `float32` . 2-D with shape  `[length, channels]` .
- **`sample_rate`** : A  `Tensor`  of type  `int32` .Scalar containing the sample frequency.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

