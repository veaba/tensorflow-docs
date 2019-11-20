[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L1923-L1940)  
---  
  
Serialize a `SparseTensor` into a 3-vector (1-D `Tensor`) object.

### Aliases:

  * [`tf.compat.v1.io.serialize_sparse`](/api_docs/python/tf/compat/v1/serialize_sparse)

    
    
    tf.compat.v1.serialize_sparse(
        sp_input,
        name=None,
        out_type=tf.dtypes.string
    )
    

#### Args:

  * **`sp_input`** : The input `SparseTensor`.
  * **`name`** : A name prefix for the returned tensors (optional).
  * **`out_type`** : The `dtype` to use for serialization.

#### Returns:

A 3-vector (1-D `Tensor`), with each column representing the serialized
`SparseTensor`'s indices, values, and shape (respectively).

#### Raises:

  * **`TypeError`** : If `sp_input` is not a `SparseTensor`.

