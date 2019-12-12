Expands  `signal` 's  `axis`  dimension into frames of  `frame_length` .

**别名** : [ `tf.compat.v1.signal.frame` ](/api_docs/python/tf/signal/frame), [ `tf.compat.v2.signal.frame` ](/api_docs/python/tf/signal/frame)

```
 tf.signal.frame(
    signal,
    frame_length,
    frame_step,
    pad_end=False,
    pad_value=0,
    axis=-1,
    name=None
)
 
```

Slides a window of size  `frame_length`  over  `signal` 's  `axis`  dimensionwith a stride of  `frame_step` , replacing the  `axis`  dimension with `[frames, frame_length]`  frames.

If  `pad_end`  is True, window positions that are past the end of the  `axis` dimension are padded with  `pad_value`  until the window moves fully past theend of the dimension. Otherwise, only window positions that fully overlap the `axis`  dimension are produced.

#### 例如：


```
 pcm = tf.compat.v1.placeholder(tf.float32, [None, 9152])
frames = tf.signal.frame(pcm, 512, 180)
magspec = tf.abs(tf.signal.rfft(frames, [512]))
image = tf.expand_dims(magspec, 3)
 
```

#### 参数：
- **`signal`** : A  `[..., samples, ...]`   `Tensor` . The rank and dimensionsmay be unknown. Rank must be at least 1.
- **`frame_length`** : The frame length in samples. An integer or scalar  `Tensor` .
- **`frame_step`** : The frame hop size in samples. An integer or scalar  `Tensor` .
- **`pad_end`** : Whether to pad the end of  `signal`  with  `pad_value` .
- **`pad_value`** : An optional scalar  `Tensor`  to use where the input signaldoes not exist when  `pad_end`  is True.
- **`axis`** : A scalar integer  `Tensor`  indicating the axis to frame. Defaults tothe last axis. Supports negative values for indexing from the end.
- **`name`** : An optional name for the operation.


#### 返回：
A  `Tensor`  of frames with shape  `[..., frames, frame_length, ...]` .

#### 加薪：
- **`ValueError`** : If  `frame_length` ,  `frame_step` ,  `pad_value` , or  `axis`  are notscalar.
