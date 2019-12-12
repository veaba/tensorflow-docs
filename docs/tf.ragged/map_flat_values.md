Applies  `op`  to the values of one or more RaggedTensors.

**别名** : [ `tf.compat.v1.ragged.map_flat_values` ](/api_docs/python/tf/ragged/map_flat_values), [ `tf.compat.v2.ragged.map_flat_values` ](/api_docs/python/tf/ragged/map_flat_values)

```
 tf.ragged.map_flat_values(
    op,
    *args,
    **kwargs
)
 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
Replaces any  `RaggedTensor`  in  `args`  or  `kwargs`  with its  `flat_values` tensor, and then calls  `op` .  Returns a  `RaggedTensor`  that is constructedfrom the input  `RaggedTensor` s'  `nested_row_splits`  and the value returned bythe  `op` .

If the input arguments contain multiple  `RaggedTensor` s, then they must haveidentical  `nested_row_splits` .

#### 示例：


```
 rt = ragged.constant([[1, 2, 3], [], [4, 5], [6]]) 
 ragged.map_flat_values(tf.ones_like, rt).eval().tolist() 
 [[1, 1, 1], [], [1, 1], [1]] 
 ragged.map_flat_values(tf.multiply, rt, rt).eval().tolist() 
 [[1, 4, 9], [], [16, 25], [36]] 
 ragged.map_flat_values(tf.add, rt, 5).eval().tolist() 
 [[6, 7, 8], [], [9, 10], [11]] 

```

#### 参数：
- **`op`** : The operation that should be applied to the RaggedTensor  `flat_values` . `op`  is typically an element-wise operation (such as math_ops.add), butany operation that preserves the size of the outermost dimension can beused.  I.e.,  `shape[0]`  of the value returned by  `op`  must match `shape[0]`  of the  `RaggedTensor` s'  `flat_values`  tensors.
- **`*args`** : Arguments for  `op` .
- **`**kwargs`** : Keyword arguments for  `op` .


#### 返回：
A  `RaggedTensor`  whose  `ragged_rank`  matches the  `ragged_rank`  of allinput  `RaggedTensor` s.

#### 加薪：
- **`ValueError`** : If args contains no  `RaggedTensors` , or if the  `nested_splits` of the input  `RaggedTensor` s are not identical.
