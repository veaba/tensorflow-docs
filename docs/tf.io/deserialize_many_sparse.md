Deserialize and concatenate  `SparseTensors`  from a serialized minibatch.

**别名** : [ `tf.compat.v1.deserialize_many_sparse` ](/api_docs/python/tf/io/deserialize_many_sparse), [ `tf.compat.v1.io.deserialize_many_sparse` ](/api_docs/python/tf/io/deserialize_many_sparse), [ `tf.compat.v2.io.deserialize_many_sparse` ](/api_docs/python/tf/io/deserialize_many_sparse)

```
 tf.io.deserialize_many_sparse(
    serialized_sparse,
    dtype,
    rank=None,
    name=None
)
 
```

The input  `serialized_sparse`  must be a string matrix of shape  `[N x 3]`  where `N`  is the minibatch size and the rows correspond to packed outputs of `serialize_sparse` .  The ranks of the original  `SparseTensor`  objectsmust all match.  When the final  `SparseTensor`  is created, it has rank onehigher than the ranks of the incoming  `SparseTensor`  objects (they have beenconcatenated along a new row dimension).

The output  `SparseTensor`  object's shape values for all dimensions but thefirst are the max across the input  `SparseTensor`  objects' shape valuesfor the corresponding dimensions.  Its first shape value is  `N` , the minibatchsize.

The input  `SparseTensor`  objects' indices are assumed ordered instandard lexicographic order.  If this is not the case, after thisstep run [ `sparse.reorder` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reorder) to restore index ordering.

For example, if the serialized input is a  `[2, 3]`  matrix representing twooriginal  `SparseTensor`  objects:

```
 index = [ 0]
        [10]
        [20]
values = [1, 2, 3]
shape = [50]
 
```

and

```
 index = [ 2]
        [10]
values = [4, 5]
shape = [30]
 
```

then the final deserialized  `SparseTensor`  will be:

```
 index = [0  0]
        [0 10]
        [0 20]
        [1  2]
        [1 10]
values = [1, 2, 3, 4, 5]
shape = [2 50]
 
```

#### 参数：
- **`serialized_sparse`** : 2-D  `Tensor`  of type  `string`  of shape  `[N, 3]` .The serialized and packed  `SparseTensor`  objects.
- **`dtype`** : The  `dtype`  of the serialized  `SparseTensor`  objects.
- **`rank`** : (optional) Python int, the rank of the  `SparseTensor`  objects.
- **`name`** : A name prefix for the returned tensors (optional)


#### 返回：
A  `SparseTensor`  representing the deserialized  `SparseTensor` s,concatenated along the  `SparseTensor` s' first dimension.

All of the serialized  `SparseTensor` s must have had the same rank and type.

