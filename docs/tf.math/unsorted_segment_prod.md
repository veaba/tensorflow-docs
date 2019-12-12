

Computes the product along segments of a tensor.

**Aliases** : [ `tf.compat.v1.math.unsorted_segment_prod` ](/api_docs/python/tf/math/unsorted_segment_prod), [ `tf.compat.v1.unsorted_segment_prod` ](/api_docs/python/tf/math/unsorted_segment_prod), [ `tf.compat.v2.math.unsorted_segment_prod` ](/api_docs/python/tf/math/unsorted_segment_prod)

```
 tf.math.unsorted_segment_prod(
    data,
    segment_ids,
    num_segments,
    name=None
)
 
```

Read[the section on segmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)for an explanation of segments.

This operator is similar to the unsorted segment sum operator found[(here)](https://tensorflow.google.cn/api_docs/api_docs/python/math_ops#UnsortedSegmentSum).Instead of computing the sum over segments, it computes the product of allentries belonging to a segment such that:

outputi=∏j...data[j...] where the product is over tuples `j...`  such that  `segment_ids[j...] == i` .

#### For example:


```
 c = tf.constant([[1,2,3,4], [5,6,7,8], [4,3,2,1]])
tf.unsorted_segment_prod(c, tf.constant([0, 1, 0]), num_segments=2)
# ==> [[ 4,  6, 6, 4],
#       [5,  6, 7, 8]]
 
```

If there is no entry for a given segment ID  `i` , it outputs 1.

If the given segment ID  `i`  is negative, then the corresponding value isdropped, and will not be included in the result.

#### Args:
- **`data`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,  `uint64` .
- **`segment_ids`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A tensor whose shape is a prefix of  `data.shape` .
- **`num_segments`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `data` .

