Converts a  `SparseTensor`  into a dense tensor.

**别名** : [ `tf.compat.v1.sparse.to_dense` ](/api_docs/python/tf/sparse/to_dense), [ `tf.compat.v1.sparse_tensor_to_dense` ](/api_docs/python/tf/sparse/to_dense), [ `tf.compat.v2.sparse.to_dense` ](/api_docs/python/tf/sparse/to_dense)

```
 tf.sparse.to_dense(
    sp_input,
    default_value=None,
    validate_indices=True,
    name=None
)
 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
This op is a convenience wrapper around  `sparse_to_dense`  for  `SparseTensor` s.

For example, if  `sp_input`  has shape  `[3, 5]`  and non-empty string values:

```
 [0, 1]: a
[0, 3]: b
[2, 0]: c
 
```

and  `default_value`  is  `x` , then the output will be a dense  `[3, 5]` string tensor with values:

```
 [[x a x b x]
 [x x x x x]
 [c x x x x]]
 
```

Indices must be without repeats.  This is onlytested if  `validate_indices`  is  `True` .

#### 参数：
- **`sp_input`** : The input  `SparseTensor` .
- **`default_value`** : Scalar value to set for indices not specified in `sp_input` .  Defaults to zero.
- **`validate_indices`** : A boolean value.  If  `True` , indices are checked to makesure they are sorted in lexicographic order and that there are no repeats.
- **`name`** : A name prefix for the returned tensors (optional).


#### 返回：
A dense tensor with shape  `sp_input.dense_shape`  and values specified bythe non-empty values in  `sp_input` . Indices not in  `sp_input`  are assigned `default_value` .

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
