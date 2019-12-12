Generates the segmentation corresponding to a RaggedTensor  `row_splits` .

**别名** : [ `tf.compat.v1.ragged.row_splits_to_segment_ids` ](/api_docs/python/tf/ragged/row_splits_to_segment_ids), [ `tf.compat.v2.ragged.row_splits_to_segment_ids` ](/api_docs/python/tf/ragged/row_splits_to_segment_ids)

```
 tf.ragged.row_splits_to_segment_ids(
    splits,
    name=None,
    out_type=None
)
 
```

Returns an integer vector  `segment_ids` , where  `segment_ids[i] == j`  if `splits[j] <= i < splits[j+1]` .  Example:

```
 ragged.row_splits_to_segment_ids([0, 3, 3, 5, 6, 9]).eval() 
 [ 0 0 0 2 2 3 4 4 4 ] 

```

#### 参数：
- **`splits`** : A sorted 1-D integer Tensor.   `splits[0]`  must be zero.
- **`name`** : A name prefix for the returned tensor (optional).
- **`out_type`** : The dtype for the return value.  Defaults to  `splits.dtype` ,or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) if  `splits`  does not have a dtype.


#### 返回：
A sorted 1-D integer Tensor, with  `shape=[splits[-1]]` 

#### 加薪：
- **`ValueError`** : If  `splits`  is invalid.
