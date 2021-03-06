

计算张量沿线段的最大值。

**别名** : [ `tf.compat.v1.math.unsorted_segment_max` ](/api_docs/python/tf/math/unsorted_segment_max), [ `tf.compat.v1.unsorted_segment_max` ](/api_docs/python/tf/math/unsorted_segment_max), [ `tf.compat.v2.math.unsorted_segment_max` ](/api_docs/python/tf/math/unsorted_segment_max)

```
 tf.math.unsorted_segment_max(
    data,
    segment_ids,
    num_segments,
    name=None
)
 
```

Read[the section on segmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)for an explanation of segments.

This operator is similar to the unsorted segment sum operator found[(here)](https://tensorflow.google.cn/api_docs/api_docs/python/math_ops#UnsortedSegmentSum).Instead of computing the sum over segments, it computes the maximum such that:

outputi=max where max is over tuples  `j...`  suchthat  `segment_ids[j...] == i` .

If the maximum is empty for a given segment ID  `i` , it outputs the smallestpossible value for the specific numeric type, `output[i] = numeric_limits<T>::lowest()` .

If the given segment ID  `i`  is negative, then the corresponding value isdropped, and will not be included in the result.

![](https://tensorflow.google.cn/images/UnsortedSegmentMax.png)

#### 例如：


```
 c = tf.constant([[1,2,3,4], [5,6,7,8], [4,3,2,1]])
tf.unsorted_segment_max(c, tf.constant([0, 1, 0]), num_segments=2)
# ==> [[ 4,  3, 3, 4],
#       [5,  6, 7, 8]]
 
```

#### 参数：
- **`data`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` .
- **`segment_ids`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A tensor whose shape is a prefix of  `data.shape` .
- **`num_segments`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `data` .

