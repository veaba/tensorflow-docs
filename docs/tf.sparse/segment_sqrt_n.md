Computes the sum along sparse segments of a tensor divided by the sqrt(N).

```
 tf.sparse.segment_sqrt_n(    data,    indices,    segment_ids,    num_segments=None,    name=None) 
```

Read [the section onsegmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)for an explanation of segments.

Like [ `tf.sparse.segment_mean` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/segment_mean), but instead of dividing by the size of thesegment,  `N` , divide by  `sqrt(N)`  instead.

#### Args:
- **`data`** : A  `Tensor`  with data that will be assembled in the output.
- **`indices`** : A 1-D  `Tensor`  with indices into  `data` . Has same rank as `segment_ids` .
- **`segment_ids`** : A 1-D  `Tensor`  with indices into the output  `Tensor` . Valuesshould be sorted and can be repeated.
- **`num_segments`** : An optional int32 scalar. Indicates the size of the output `Tensor` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `tensor`  of the shape as data, except for dimension 0 whichhas size  `k` , the number of segments specified via  `num_segments`  orinferred for the last element in  `segments_ids` .

