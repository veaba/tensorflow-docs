从嵌套的python列表构造常量raggedtensor。

**别名** : [ `tf.compat.v1.ragged.constant` ](/api_docs/python/tf/ragged/constant), [ `tf.compat.v2.ragged.constant` ](/api_docs/python/tf/ragged/constant)

```
 tf.ragged.constant(
    pylist,
    dtype=None,
    ragged_rank=None,
    inner_shape=None,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)


#### 示例：


```
 ragged.constant([[1, 2], [3], [4, 5, 6]]).eval() 
 RaggedTensorValue(values=[1, 2, 3, 4, 5, 6], splits=[0, 2, 3, 6]) 

```

All scalar values in  `pylist`  must have the same nesting depth  `K` , and thereturned  `RaggedTensor`  will have rank  `K` .  If  `pylist`  contains no scalarvalues, then  `K`  is one greater than the maximum depth of empty lists in `pylist` .  All scalar values in  `pylist`  must be compatible with  `dtype` .

#### 参数：
- **`pylist`** : A nested  `list` ,  `tuple`  or  `np.ndarray` .  Any nested element thatis not a  `list` ,  `tuple`  or  `np.ndarray`  must be a scalar valuecompatible with  `dtype` .
- **`dtype`** : The type of elements for the returned  `RaggedTensor` .  If notspecified, then a default is chosen based on the scalar values in `pylist` .
- **`ragged_rank`** : An integer specifying the ragged rank of the returned `RaggedTensor` .  Must be nonnegative and less than  `K` . Defaults to `max(0, K - 1)`  if  `inner_shape`  is not specified.  Defaults to `max(0, K
- **`inner_shape`** : A tuple of integers specifying the shape for individual innervalues in the returned  `RaggedTensor` .  Defaults to  `()`  if  `ragged_rank` is not specified.  If  `ragged_rank`  is specified, then a default is chosenbased on the contents of  `pylist` .
- **`name`** : A name prefix for the returned tensor (optional).
- **`row_splits_dtype`** : data type for the constructed  `RaggedTensor` 's row_splits.One of [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).
    - 1 - len(inner_shape)) `if` inner_shape` is specified.


#### 返回：
A potentially ragged tensor with rank  `K`  and the specified  `ragged_rank` ,containing the values from  `pylist` .

#### 加薪：
- **`ValueError`** : If the scalar values in  `pylist`  have inconsistent nestingdepth; or if ragged_rank or inner_shape are incompatible with  `pylist` .
