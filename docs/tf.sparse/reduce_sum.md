[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/reduce_sum) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L1254-L1318)  
  
  
Computes the sum of elements across dimensions of a SparseTensor.

### Aliases:

  * [`tf.compat.v2.sparse.reduce_sum`](/api_docs/python/tf/sparse/reduce_sum)

    
    
    tf.sparse.reduce_sum(
        sp_input,
        axis=None,
        keepdims=None,
        output_is_sparse=False,
        name=None
    )
    

This Op takes a SparseTensor and is the sparse counterpart to
[`tf.reduce_sum()`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_sum).
In particular, this Op also returns a dense `Tensor` if `output_is_sparse` is
`False`, or a `SparseTensor` if `output_is_sparse` is `True`.

**Note:** if `output_is_sparse` is True, a gradient is not defined for this
function, so it can't be used in training models that need gradient descent.

Reduces `sp_input` along the dimensions given in `axis`. Unless `keepdims` is
true, the rank of the tensor is reduced by 1 for each entry in `axis`. If
`keepdims` is true, the reduced dimensions are retained with length 1.

If `axis` has no entries, all dimensions are reduced, and a tensor with a
single element is returned. Additionally, the axes can be negative, similar to
the indexing rules in Python.

#### For example:

    
    
    # 'x' represents [[1, ?, 1]
    #                 [?, 1, ?]]
    # where ? is implicitly-zero.
    tf.sparse.reduce_sum(x) ==> 3
    tf.sparse.reduce_sum(x, 0) ==> [1, 1, 1]
    tf.sparse.reduce_sum(x, 1) ==> [2, 1]  # Can also use -1 as the axis.
    tf.sparse.reduce_sum(x, 1, keepdims=True) ==> [[2], [1]]
    tf.sparse.reduce_sum(x, [0, 1]) ==> 3
    

#### Args:

  * **`sp_input`** : The SparseTensor to reduce. Should have numeric type.
  * **`axis`** : The dimensions to reduce; list or scalar. If `None` (the default), reduces all dimensions.
  * **`keepdims`** : If true, retain reduced dimensions with length 1.
  * **`output_is_sparse`** : If true, returns a `SparseTensor` instead of a dense `Tensor` (the default).
  * **`name`** : A name for the operation (optional).

#### Returns:

The reduced Tensor or the reduced SparseTensor if `output_is_sparse` is True.

