Reconstructs a signal from a framed representation.



### Aliases:

- [ `tf.compat.v1.signal.overlap_and_add` ](/api_docs/python/tf/signal/overlap_and_add)

- [ `tf.compat.v2.signal.overlap_and_add` ](/api_docs/python/tf/signal/overlap_and_add)



```
 tf.signal.overlap_and_add(
    signal,
    frame_step,
    name=None
)
 
```

Adds potentially overlapping frames of a signal with shape
 `[..., frames, frame_length]` , offsetting subsequent frames by  `frame_step` .
The resulting tensor has shape  `[..., output_size]`  where



```
 output_size = (frames - 1) * frame_step + frame_length
 
```



#### Args:

- **`signal`** : A [..., frames, frame_length]  `Tensor` . All dimensions may be
unknown, and rank must be at least 2.

- **`frame_step`** : An integer or scalar  `Tensor`  denoting overlap offsets. Must be
less than or equal to  `frame_length` .

- **`name`** : An optional name for the operation.



#### Returns:
A  `Tensor`  with shape  `[..., output_size]`  containing the overlap-added
frames of  `signal` 's inner-most two dimensions.



#### Raises:

- **`ValueError`** : If  `signal` 's rank is less than 2, or  `frame_step`  is not a
scalar integer.

