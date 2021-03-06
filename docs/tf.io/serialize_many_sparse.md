Serialize  `N` -minibatch  `SparseTensor`  into an  `[N, 3]`   `Tensor` .

```
 tf.io.serialize_many_sparse(    sp_input,    out_type=tf.dtypes.string,    name=None) 
```

The  `SparseTensor`  must have rank  `R`  greater than 1, and the first dimensionis treated as the minibatch dimension.  Elements of the  `SparseTensor` must be sorted in increasing order of this first dimension.  The serialized `SparseTensor`  objects going into each row of the output  `Tensor`  will haverank  `R-1` .

The minibatch size  `N`  is extracted from  `sparse_shape[0]` .

#### 参数：
- **`sp_input`** : The input rank  `R`   `SparseTensor` .
- **`out_type`** : The  `dtype`  to use for serialization.
- **`name`** : A name prefix for the returned tensors (optional).


#### 返回：
A matrix (2-D  `Tensor` ) with  `N`  rows and  `3`  columns. Each columnrepresents serialized  `SparseTensor` 's indices, values, and shape(respectively).

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
