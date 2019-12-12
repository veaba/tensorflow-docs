计算张量稀疏段的和除以sqrt（n）。

```
 tf.compat.v1.sparse_segment_sqrt_n(
    data,
    indices,
    segment_ids,
    name=None,
    num_segments=None
)
 
```

 `N`  is the size of the segment being reduced.

#### 参数：
- **`data`** : A  `Tensor`  with data that will be assembled in the output.
- **`indices`** : A 1-D  `Tensor`  with indices into  `data` . Has same rank as `segment_ids` .
- **`segment_ids`** : A 1-D  `Tensor`  with indices into the output  `Tensor` . Valuesshould be sorted and can be repeated.
- **`name`** : A name for the operation (optional).
- **`num_segments`** : An optional int32 scalar. Indicates the size of the output `Tensor` .


#### 返回：
A  `tensor`  of the shape as data, except for dimension 0 whichhas size  `k` , the number of segments specified via  `num_segments`  orinferred for the last element in  `segments_ids` .

