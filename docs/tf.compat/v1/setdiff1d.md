计算两个数字或字符串列表之间的差异。

```
 tf.compat.v1.setdiff1d(    x,    y,    index_dtype=tf.dtypes.int32,    name=None) 
```

Given a list  `x`  and a list  `y` , this operation returns a list  `out`  thatrepresents all values that are in  `x`  but not in  `y` . The returned list  `out` is sorted in the same order that the numbers appear in  `x`  (duplicates arepreserved). This operation also returns a list  `idx`  that represents theposition of each  `out`  element in  `x` . In other words:

 `out[i] = x[idx[i]] for i in [0, 1, ..., len(out) - 1]` 

For example, given this input:

```
 x = [1, 2, 3, 4, 5, 6]
y = [1, 3, 5]
 
```

此操作将返回：

```
 out ==> [2, 4, 6]
idx ==> [1, 3, 5]
 
```

#### 参数：
- **`x`** : A  `Tensor` . 1-D. Values to keep.
- **`y`** : A  `Tensor` . Must have the same type as  `x` . 1-D. Values to remove.
- **`out_idx`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (out, idx).

- **`out`** : A  `Tensor` . Has the same type as  `x` .
- **`idx`** : A  `Tensor`  of type  `out_idx` .
