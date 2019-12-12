从帧表示重建信号。

**别名** : [ `tf.compat.v1.signal.overlap_and_add` ](/api_docs/python/tf/signal/overlap_and_add), [ `tf.compat.v2.signal.overlap_and_add` ](/api_docs/python/tf/signal/overlap_and_add)

```
 tf.signal.overlap_and_add(
    signal,
    frame_step,
    name=None
)
 
```

Adds potentially overlapping frames of a signal with shape `[..., frames, frame_length]` , offsetting subsequent frames by  `frame_step` .The resulting tensor has shape  `[..., output_size]`  where

```
 output_size = (frames - 1) * frame_step + frame_length
 
```

#### 参数：
- **`signal`** : A [..., frames, frame_length]  `Tensor` . All dimensions may beunknown, and rank must be at least 2.
- **`frame_step`** : An integer or scalar  `Tensor`  denoting overlap offsets. Must beless than or equal to  `frame_length` .
- **`name`** : An optional name for the operation.


#### 返回：
A  `Tensor`  with shape  `[..., output_size]`  containing the overlap-addedframes of  `signal` 's inner-most two dimensions.

#### 加薪：
- **`ValueError`** : If  `signal` 's rank is less than 2, or  `frame_step`  is not ascalar integer.
