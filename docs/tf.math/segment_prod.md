

沿张量的线段计算乘积。

**别名** : [ `tf.compat.v1.math.segment_prod` ](/api_docs/python/tf/math/segment_prod), [ `tf.compat.v1.segment_prod` ](/api_docs/python/tf/math/segment_prod), [ `tf.compat.v2.math.segment_prod` ](/api_docs/python/tf/math/segment_prod)

```
 tf.math.segment_prod(
    data,
    segment_ids,
    name=None
)
 
```

Read[the section on segmentation](https://tensorflow.org/api_docs/python/tf/math#Segmentation)for an explanation of segments.

Computes a tensor such that\(output_i = \prod_j data_j\) where the product is over  `j`  suchthat  `segment_ids[j] == i` .

If the product is empty for a given segment ID  `i` ,  `output[i] = 1` .

![](https://tensorflow.google.cn/images/SegmentProd.png)

#### 例如：


```
 c = tf.constant([[1,2,3,4], [4, 3, 2, 1], [5,6,7,8]])
tf.segment_prod(c, tf.constant([0, 0, 1]))
# ==> [[4, 6, 6, 4],
#      [5, 6, 7, 8]]
 
```

#### 参数：
- **`data`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,  `uint64` .
- **`segment_ids`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .A 1-D tensor whose size is equal to the size of  `data` 'sfirst dimension.  Values should be sorted and can be repeated.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `data` .

