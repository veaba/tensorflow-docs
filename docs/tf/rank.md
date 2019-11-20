[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/rank) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L586-L617)  
---|---  
  
Returns the rank of a tensor.

### Aliases:

  * [`tf.compat.v1.rank`](/api_docs/python/tf/rank)
  * [`tf.compat.v2.rank`](/api_docs/python/tf/rank)

    
    
    tf.rank(
        input,
        name=None
    )
    

Returns a 0-D `int32` `Tensor` representing the rank of `input`.

#### For example:

    
    
    # shape of tensor 't' is [2, 2, 3]
    t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
    tf.rank(t)  # 3
    

**Note** : The rank of a tensor is not the same as the rank of a matrix. The
rank of a tensor is the number of indices required to uniquely select each
element of the tensor. Rank is also known as "order", "degree", or "ndims."

#### Args:

  * **`input`** : A `Tensor` or `SparseTensor`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `int32`.

#### Numpy Compatibility

Equivalent to np.ndim

