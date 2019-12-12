Generates the RaggedTensor  `row_splits`  corresponding to a segmentation.

**别名** : [ `tf.compat.v1.ragged.segment_ids_to_row_splits` ](/api_docs/python/tf/ragged/segment_ids_to_row_splits), [ `tf.compat.v2.ragged.segment_ids_to_row_splits` ](/api_docs/python/tf/ragged/segment_ids_to_row_splits)

```
 tf.ragged.segment_ids_to_row_splits(
    segment_ids,
    num_segments=None,
    out_type=None,
    name=None
)
 
```

Returns an integer vector  `splits` , where  `splits[0] = 0`  and `splits[i] = splits[i-1] + count(segment_ids==i)` .  Example:

```
 ragged.segment_ids_to_row_splits([0, 0, 0, 2, 2, 3, 4, 4, 4]).eval() 
 [ 0 3 3 5 6 9 ] 

```

#### 参数：
- **`segment_ids`** : A 1-D integer Tensor.
- **`num_segments`** : A scalar integer indicating the number of segments.  Defaultsto  `max(segment_ids) + 1`  (or zero if  `segment_ids`  is empty).
- **`out_type`** : The dtype for the return value.  Defaults to  `segment_ids.dtype` ,or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) if  `segment_ids`  does not have a dtype.
- **`name`** : A name prefix for the returned tensor (optional).


#### 返回：
A sorted 1-D integer Tensor, with  `shape=[num_segments + 1]` .

