在输入张量中搜索最内层维度上的值。

**别名** : [ `tf.compat.v1.searchsorted` ](/api_docs/python/tf/searchsorted), [ `tf.compat.v2.searchsorted` ](/api_docs/python/tf/searchsorted)

```
 tf.searchsorted(
    sorted_sequence,
    values,
    side='left',
    out_type=tf.dtypes.int32,
    name=None
)
 
```

A 2-D example:

```
  )

 )

  result == [[1, 2, 4],
             [0, 2, 5]]
 
```

#### 参数：
- **`sorted_sequence`** : N-D  `Tensor`  containing a sorted sequence.
- **`values`** : N-D  `Tensor`  containing the search values.
- **`side`** : 'left' or 'right'; 'left' corresponds to lower_bound and 'right' toupper_bound.
- **`out_type`** : The output type ( `int32`  or  `int64` ).  Default is [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).
- **`name`** : Optional name for the operation.


#### 返回：
An N-D  `Tensor`  the size of values containing the result of applying eitherlower_bound or upper_bound (depending on side) to each value.  The resultis not a global index to the entire  `Tensor` , but the index in the lastdimension.

#### 加薪：
- **`ValueError`** : If the last dimension of  `sorted_sequence >= 2^31-1`  elements.        If the total size of values exceeds  `2^31 - 1`  elements.        If the first  `N-1`  dimensions of the two tensors don't match.
