Serialize a  `SparseTensor`  into a 3-vector (1-D  `Tensor` ) object.

```
 tf.io.serialize_sparse(    sp_input,    out_type=tf.dtypes.string,    name=None) 
```

#### 参数：
- **`sp_input`** : The input  `SparseTensor` .
- **`out_type`** : The  `dtype`  to use for serialization.
- **`name`** : A name prefix for the returned tensors (optional).


#### 返回：
A 3-vector (1-D  `Tensor` ), with each column representing the serialized `SparseTensor` 's indices, values, and shape (respectively).

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
