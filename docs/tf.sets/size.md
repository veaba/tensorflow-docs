[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sets/size) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sets_impl.py#L34-L58)  
  
  
Compute number of unique elements along last dimension of `a`.

### Aliases:

  * [`tf.compat.v1.sets.set_size`](/api_docs/python/tf/sets/size)
  * [`tf.compat.v1.sets.size`](/api_docs/python/tf/sets/size)
  * [`tf.compat.v2.sets.size`](/api_docs/python/tf/sets/size)

    
    
    tf.sets.size(
        a,
        validate_indices=True
    )
    

#### Args:

  * **`a`** : `SparseTensor`, with indices sorted in row-major order.
  * **`validate_indices`** : Whether to validate the order and range of sparse indices in `a`.

#### Returns:

`int32` `Tensor` of set sizes. For `a` ranked `n`, this is a `Tensor` with
rank `n-1`, and the same 1st `n-1` dimensions as `a`. Each value is the number
of unique elements in the corresponding `[0...n-1]` dimension of `a`.

#### Raises:

  * **`TypeError`** : If `a` is an invalid types.

