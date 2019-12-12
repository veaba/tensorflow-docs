写一个音频摘要。

```
 tf.summary.audio(    name,    data,    sample_rate,    step=None,    max_outputs=3,    encoding=None,    description=None) 
```

#### 参数：
- **`name`** : A name for this summary. The summary tag used for TensorBoard willbe this name prefixed by any active name scopes.
- **`data`** : A  `Tensor`  representing audio data with shape  `[k, t, c]` ,where  `k`  is the number of audio clips,  `t`  is the number offrames, and  `c`  is the number of channels. Elements should befloating-point values in  `[-1.0, 1.0]` . Any of the dimensions maybe statically unknown (i.e.,  `None` ).
- **`sample_rate`** : An  `int`  or rank-0  `int32`   `Tensor`  that represents thesample rate, in Hz. Must be positive.
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`max_outputs`** : Optional  `int`  or rank-0 integer  `Tensor` . At most thismany audio clips will be emitted at each step. When more than `max_outputs`  many clips are provided, the first  `max_outputs` many clips will be used and the rest silently discarded.
- **`encoding`** : Optional constant  `str`  for the desired encoding. Only "wav"is currently supported, but this is not guaranteed to remain thedefault, so if you want "wav" in particular, set this explicitly.
- **`description`** : Optional long-form description for this summary, as aconstant  `str` . Markdown is supported. Defaults to empty.


#### 返回：
True on success, or false if no summary was emitted because no defaultsummary writer was available.

#### 加薪：
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
