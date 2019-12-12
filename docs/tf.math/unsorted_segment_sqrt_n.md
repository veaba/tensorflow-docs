

计算沿张量分段除以sqrt（n）的和。

**别名** : [ `tf.compat.v1.math.unsorted_segment_sqrt_n` ](/api_docs/python/tf/math/unsorted_segment_sqrt_n), [ `tf.compat.v1.unsorted_segment_sqrt_n` ](/api_docs/python/tf/math/unsorted_segment_sqrt_n), [ `tf.compat.v2.math.unsorted_segment_sqrt_n` ](/api_docs/python/tf/math/unsorted_segment_sqrt_n)

```
 tf.math.unsorted_segment_sqrt_n(
    data,
    segment_ids,
    num_segments,
    name=None
)
 
```

Read [the section onsegmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)for an explanation of segments.

This operator is similar to the unsorted segment sum operator found[here](https://tensorflow.google.cn/api_docs/api_docs/python/math_ops#UnsortedSegmentSum).Additionally to computing the sum over segments, it divides the results bysqrt(N).

outputi=1/sqrt(Ni)∑j...data[j...] where the sum is overtuples  `j...`  such that  `segment_ids[j...] == i`  with \N_i\ being thenumber of occurrences of id \i\.

If there is no entry for a given segment ID  `i` , it outputs 0.

Note that this op only supports floating point and complex dtypes,due to tf.sqrt only supporting these types.

If the given segment ID  `i`  is negative, the value is dropped and will notbe added to the sum of the segment.

#### 参数：
- **`data`** : A  `Tensor`  with floating point or complex dtype.
- **`segment_ids`** : An integer tensor whose shape is a prefix of  `data.shape` .
- **`num_segments`** : An integer scalar  `Tensor` .  The number of distinct segmentIDs.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` .  Has same shape as data, except for the first  `segment_ids.rank`  dimensions, which are replaced with a single dimension which has size `num_segments` .

