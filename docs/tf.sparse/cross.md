从稀疏和稠密张量列表生成稀疏交叉。

**别名** : [ `tf.compat.v1.sparse.cross` ](/api_docs/python/tf/sparse/cross), [ `tf.compat.v2.sparse.cross` ](/api_docs/python/tf/sparse/cross)

```
 tf.sparse.cross(
    inputs,
    name=None
)
 
```

For example, if the inputs are

```
 * inputs[0]: SparseTensor with shape = [2, 2]
  [0, 0]: "a"
  [1, 0]: "b"
  [1, 1]: "c"
* inputs[1]: SparseTensor with shape = [2, 1]
  [0, 0]: "d"
  [1, 0]: "e"
* inputs[2]: Tensor [["f"], ["g"]]
 
```

那么输出将是：

```
 shape = [2, 2]
[0, 0]: "a_X_d_X_f"
[1, 0]: "b_X_e_X_g"
[1, 1]: "c_X_e_X_g"
 
```

#### 参数：
- **`inputs`** : An iterable of  `Tensor`  or  `SparseTensor` .
- **`name`** : Optional name for the op.


#### 返回：
A  `SparseTensor`  of type  `string` .

