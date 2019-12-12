计算张量稀疏段的平均值。

```
 tf.sparse.segment_mean(    data,    indices,    segment_ids,    num_segments=None,    name=None) 
```

Read [the section onsegmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)for an explanation of segments.

Like [ `tf.math.segment_mean` ](https://tensorflow.google.cn/api_docs/python/tf/math/segment_mean), but  `segment_ids`  can have rank less than `data` 's first dimension, selecting a subset of dimension 0, specified by `indices` . `segment_ids`  is allowed to have missing ids, in which case the output willbe zeros at those indices. In those cases  `num_segments`  is used to determinethe size of the output.

#### 参数：
- **`data`** : A  `Tensor`  with data that will be assembled in the output.
- **`indices`** : A 1-D  `Tensor`  with indices into  `data` . Has same rank as `segment_ids` .
- **`segment_ids`** : A 1-D  `Tensor`  with indices into the output  `Tensor` . Valuesshould be sorted and can be repeated.
- **`num_segments`** : An optional int32 scalar. Indicates the size of the output `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `tensor`  of the shape as data, except for dimension 0 whichhas size  `k` , the number of segments specified via  `num_segments`  orinferred for the last element in  `segments_ids` .

