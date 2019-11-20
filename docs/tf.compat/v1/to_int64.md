[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L800-L816)  
---  
  
Casts a tensor to type `int64`. (deprecated)

    
    
    tf.compat.v1.to_int64(
        x,
        name='ToInt64'
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`tf.cast`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/cast)
instead.

#### Args:

  * **`x`** : A `Tensor` or `SparseTensor` or `IndexedSlices`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` or `SparseTensor` or `IndexedSlices` with same shape as `x` with
type `int64`.

#### Raises:

  * **`TypeError`** : If `x` cannot be cast to the `int64`.

