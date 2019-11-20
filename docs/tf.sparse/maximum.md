[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/maximum) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L2448-L2483)  
---|---  
  
Returns the element-wise max of two SparseTensors.

### Aliases:

  * [`tf.compat.v1.sparse.maximum`](/api_docs/python/tf/sparse/maximum)
  * [`tf.compat.v1.sparse_maximum`](/api_docs/python/tf/sparse/maximum)
  * [`tf.compat.v2.sparse.maximum`](/api_docs/python/tf/sparse/maximum)

    
    
    tf.sparse.maximum(
        sp_a,
        sp_b,
        name=None
    )
    

Assumes the two SparseTensors have the same shape, i.e., no broadcasting.
Example:

    
    
    sp_zero = sparse_tensor.SparseTensor([[0]], [0], [7])
    sp_one = sparse_tensor.SparseTensor([[1]], [1], [7])
    res = tf.sparse.maximum(sp_zero, sp_one).eval()
    # "res" should be equal to SparseTensor([[0], [1]], [0, 1], [7]).
    

#### Args:

  * **`sp_a`** : a `SparseTensor` operand whose dtype is real, and indices lexicographically ordered.
  * **`sp_b`** : the other `SparseTensor` operand with the same requirements (and the same shape).
  * **`name`** : optional name of the operation.

#### Returns:

  * **`output`** : the output SparseTensor.

