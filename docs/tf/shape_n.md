[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/shape_n) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L489-L505)  
  
  
Returns shape of tensors.

### Aliases:

  * [`tf.compat.v1.shape_n`](/api_docs/python/tf/shape_n)
  * [`tf.compat.v2.shape_n`](/api_docs/python/tf/shape_n)

    
    
    tf.shape_n(
        input,
        out_type=tf.dtypes.int32,
        name=None
    )
    

#### Args:

  * **`input`** : A list of at least 1 `Tensor` object with the same type.
  * **`out_type`** : The specified output type of the operation (`int32` or `int64`). Defaults to [`tf.int32`](https://tensorflow.google.cn/api_docs/python/tf#int32)(optional).
  * **`name`** : A name for the operation (optional).

#### Returns:

A list with the same length as `input` of `Tensor` objects with type
`out_type`.

