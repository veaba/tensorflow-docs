Creates a two-dimensional sparse tensor with ones along the diagonal.

**别名** : [ `tf.compat.v1.sparse.eye` ](/api_docs/python/tf/sparse/eye), [ `tf.compat.v2.sparse.eye` ](/api_docs/python/tf/sparse/eye)

```
 tf.sparse.eye(
    num_rows,
    num_columns=None,
    dtype=tf.dtypes.float32,
    name=None
)
 
```

#### 参数：
- **`num_rows`** : Non-negative integer or  `int32`  scalar  `tensor`  giving the numberof rows in the resulting matrix.
- **`num_columns`** : Optional non-negative integer or  `int32`  scalar  `tensor`  givingthe number of columns in the resulting matrix. Defaults to  `num_rows` .
- **`dtype`** : The type of element in the resulting  `Tensor` .
- **`name`** : A name for this  `Op` . Defaults to "eye".


#### 返回：
A  `SparseTensor`  of shape [num_rows, num_columns] with ones along thediagonal.

