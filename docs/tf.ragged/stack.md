[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/ragged/stack) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_concat_ops.py#L74-L113)  
  
  
Stacks a list of rank-`R` tensors into one rank-`(R+1)` `RaggedTensor`.

### Aliases:

  * [`tf.compat.v1.ragged.stack`](/api_docs/python/tf/ragged/stack)
  * [`tf.compat.v2.ragged.stack`](/api_docs/python/tf/ragged/stack)

    
    
    tf.ragged.stack(
        values,
        axis=0,
        name=None
    )
    

Given a list of tensors or ragged tensors with the same rank `R` (`R >=
axis`), returns a rank-`R+1` `RaggedTensor` `result` such that
`result[i0...iaxis]` is `[value[i0...iaxis] for value in values]`.

#### Example:

>
>     >>> t1 = tf.ragged.constant([[1, 2], [3, 4, 5]])
>     >>> t2 = tf.ragged.constant([[6], [7, 8, 9]])
>     >>> tf.ragged.stack([t1, t2], axis=0)
>     [[[1, 2], [3, 4, 5]], [[6], [7, 9, 0]]]
>     >>> tf.ragged.stack([t1, t2], axis=1)
>     [[[1, 2], [6]], [[3, 4, 5], [7, 8, 9]]]
>  

#### Args:

  * **`values`** : A list of [`tf.Tensor`](https://tensorflow.google.cn/api_docs/python/tf/Tensor) or [`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor). May not be empty. All `values` must have the same rank and the same dtype; but unlike [`tf.stack`](https://tensorflow.google.cn/api_docs/python/tf/stack), they can have arbitrary dimension sizes.
  * **`axis`** : A python integer, indicating the dimension along which to stack. (Note: Unlike [`tf.stack`](https://tensorflow.google.cn/api_docs/python/tf/stack), the `axis` parameter must be statically known.) Negative values are supported only if the rank of at least one `values` value is statically known.
  * **`name`** : A name prefix for the returned tensor (optional).

#### Returns:

A `RaggedTensor` with rank `R+1`. `result.ragged_rank=1+max(axis,
max(rt.ragged_rank for rt in values]))`.

#### Raises:

  * **`ValueError`** : If `values` is empty, if `axis` is out of bounds or if the input tensors have different ranks.

