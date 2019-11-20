[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/serialize_many_sparse) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L1998-L2030)  
  
  
Serialize `N`-minibatch `SparseTensor` into an `[N, 3]` `Tensor`.

### Aliases:

  * [`tf.compat.v2.io.serialize_many_sparse`](/api_docs/python/tf/io/serialize_many_sparse)

    
    
    tf.io.serialize_many_sparse(
        sp_input,
        out_type=tf.dtypes.string,
        name=None
    )
    

The `SparseTensor` must have rank `R` greater than 1, and the first dimension
is treated as the minibatch dimension. Elements of the `SparseTensor` must be
sorted in increasing order of this first dimension. The serialized
`SparseTensor` objects going into each row of the output `Tensor` will have
rank `R-1`.

The minibatch size `N` is extracted from `sparse_shape[0]`.

#### Args:

  * **`sp_input`** : The input rank `R` `SparseTensor`.
  * **`out_type`** : The `dtype` to use for serialization.
  * **`name`** : A name prefix for the returned tensors (optional).

#### Returns:

A matrix (2-D `Tensor`) with `N` rows and `3` columns. Each column represents
serialized `SparseTensor`'s indices, values, and shape (respectively).

#### Raises:

  * **`TypeError`** : If `sp_input` is not a `SparseTensor`.

