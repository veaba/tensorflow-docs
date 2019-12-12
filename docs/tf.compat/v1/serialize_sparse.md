Serialize a  `SparseTensor`  into a 3-vector (1-D  `Tensor` ) object.

```
 tf.compat.v1.serialize_sparse(
    sp_input,
    name=None,
    out_type=tf.dtypes.string
)
 
```

#### 参数：
- **`sp_input`** : The input  `SparseTensor` .
- **`name`** : A name prefix for the returned tensors (optional).
- **`out_type`** : The  `dtype`  to use for serialization.


#### 返回：
A 3-vector (1-D  `Tensor` ), with each column representing the serialized `SparseTensor` 's indices, values, and shape (respectively).

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
