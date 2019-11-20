[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/from_dense) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L103-L123)  
  
  
Converts a dense tensor into a sparse tensor.

### Aliases:

  * [`tf.compat.v1.sparse.from_dense`](/api_docs/python/tf/sparse/from_dense)
  * [`tf.compat.v2.sparse.from_dense`](/api_docs/python/tf/sparse/from_dense)

    
    
    tf.sparse.from_dense(
        tensor,
        name=None
    )
    

Only elements not equal to zero will be present in the result. The resulting
`SparseTensor` has the same dtype and shape as the input.

#### Args:

  * **`tensor`** : A dense `Tensor` to be converted to a `SparseTensor`.
  * **`name`** : Optional name for the op.

#### Returns:

The `SparseTensor`.

