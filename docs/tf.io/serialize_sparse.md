[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/serialize_sparse) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L1943-L1966)  
  
  
Serialize a `SparseTensor` into a 3-vector (1-D `Tensor`) object.

### Aliases:

  * [`tf.compat.v2.io.serialize_sparse`](/api_docs/python/tf/io/serialize_sparse)

    
    
    tf.io.serialize_sparse(
        sp_input,
        out_type=tf.dtypes.string,
        name=None
    )
    

#### Args:

  * **`sp_input`** : The input `SparseTensor`.
  * **`out_type`** : The `dtype` to use for serialization.
  * **`name`** : A name prefix for the returned tensors (optional).

#### Returns:

A 3-vector (1-D `Tensor`), with each column representing the serialized
`SparseTensor`'s indices, values, and shape (respectively).

#### Raises:

  * **`TypeError`** : If `sp_input` is not a `SparseTensor`.

