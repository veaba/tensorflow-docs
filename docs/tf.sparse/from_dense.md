将密集张量转换为稀疏张量。

**别名** : [ `tf.compat.v1.sparse.from_dense` ](/api_docs/python/tf/sparse/from_dense), [ `tf.compat.v2.sparse.from_dense` ](/api_docs/python/tf/sparse/from_dense)

```
 tf.sparse.from_dense(
    tensor,
    name=None
)
 
```

Only elements not equal to zero will be present in the result. The resulting `SparseTensor`  has the same dtype and shape as the input.

#### 参数：
- **`tensor`** : A dense  `Tensor`  to be converted to a  `SparseTensor` .
- **`name`** : Optional name for the op.


#### 返回：
The  `SparseTensor` .

