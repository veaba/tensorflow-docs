Finds unique elements in a 1-D tensor.

**别名** : [ `tf.compat.v1.unique` ](/api_docs/python/tf/unique), [ `tf.compat.v2.unique` ](/api_docs/python/tf/unique)

```
 tf.unique(
    x,
    out_idx=tf.dtypes.int32,
    name=None
)
 
```

This operation returns a tensor  `y`  containing all of the unique elements of  `x` sorted in the same order that they occur in  `x` . This operation also returns atensor  `idx`  the same size as  `x`  that contains the index of each value of  `x` in the unique output  `y` . In other words:

 `y[idx[i]] = x[i] for i in [0, 1,...,rank(x) - 1]` 

#### 例如：


```
 # tensor 'x' is [1, 1, 2, 4, 4, 4, 7, 8, 8]
y, idx = unique(x)
y ==> [1, 2, 4, 7, 8]
idx ==> [0, 0, 1, 2, 2, 2, 3, 4, 4]
 
```

#### 参数：
- **`x`** : A  `Tensor` . 1-D.
- **`out_idx`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (y, idx).

- **`y`** : A  `Tensor` . Has the same type as  `x` .
- **`idx`** : A  `Tensor`  of type  `out_idx` .
