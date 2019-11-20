[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/unique_with_counts) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L1630-L1636)  
  
  
Finds unique elements in a 1-D tensor.

### Aliases:

  * [`tf.compat.v1.unique_with_counts`](/api_docs/python/tf/unique_with_counts)
  * [`tf.compat.v2.unique_with_counts`](/api_docs/python/tf/unique_with_counts)

    
    
    tf.unique_with_counts(
        x,
        out_idx=tf.dtypes.int32,
        name=None
    )
    

This operation returns a tensor `y` containing all of the unique elements of
`x` sorted in the same order that they occur in `x`. This operation also
returns a tensor `idx` the same size as `x` that contains the index of each
value of `x` in the unique output `y`. Finally, it returns a third tensor
`count` that contains the count of each element of `y` in `x`. In other words:

`y[idx[i]] = x[i] for i in [0, 1,...,rank(x) - 1]`

#### For example:

    
    
    # tensor 'x' is [1, 1, 2, 4, 4, 4, 7, 8, 8]
    y, idx, count = unique_with_counts(x)
    y ==> [1, 2, 4, 7, 8]
    idx ==> [0, 0, 1, 2, 2, 2, 3, 4, 4]
    count ==> [2, 1, 3, 1, 2]
    

#### Args:

  * **`x`** : A `Tensor`. 1-D.
  * **`out_idx`** : An optional [`tf.DType`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from: `tf.int32, tf.int64`. Defaults to [`tf.int32`](https://tensorflow.google.cn/api_docs/python/tf#int32).
  * **`name`** : A name for the operation (optional).

#### Returns:

A tuple of `Tensor` objects (y, idx, count).

  * **`y`** : A `Tensor`. Has the same type as `x`.
  * **`idx`** : A `Tensor` of type `out_idx`.
  * **`count`** : A `Tensor` of type `out_idx`.

