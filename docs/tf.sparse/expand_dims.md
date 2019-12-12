在张量的形状中插入尺寸1。

**别名** : [ `tf.compat.v1.sparse.expand_dims` ](/api_docs/python/tf/sparse/expand_dims), [ `tf.compat.v2.sparse.expand_dims` ](/api_docs/python/tf/sparse/expand_dims)

```
 tf.sparse.expand_dims(
    sp_input,
    axis=None,
    name=None
)
 
```

Given a tensor  `sp_input` , this operation inserts a dimension of 1 at thedimension index  `axis`  of  `sp_input` 's shape. The dimension index  `axis` starts at zero; if you specify a negative number for  `axis`  it is countedbackwards from the end.

#### 参数：
- **`sp_input`** : A  `SparseTensor` .
- **`axis`** : 0-D (scalar). Specifies the dimension index at which to expand theshape of  `input` . Must be in the range  `[-rank(sp_input) - 1,rank(sp_input)]` .
- **`name`** : The name of the output  `SparseTensor` .


#### 返回：
A  `SparseTensor`  with the same data as  `sp_input` , but its shape has anadditional dimension of size 1 added.

