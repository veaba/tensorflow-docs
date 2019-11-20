[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/is_tensor) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_util.py#L934-L949)  
---|---  
  
Checks whether `x` is a tensor or "tensor-like".

### Aliases:

  * [`tf.compat.v1.is_tensor`](/api_docs/python/tf/is_tensor)
  * [`tf.compat.v2.is_tensor`](/api_docs/python/tf/is_tensor)

    
    
    tf.is_tensor(x)
    

If `is_tensor(x)` returns `True`, it is safe to assume that `x` is a tensor or
can be converted to a tensor using `ops.convert_to_tensor(x)`.

#### Args:

  * **`x`** : A python object to check.

#### Returns:

`True` if `x` is a tensor or "tensor-like", `False` if not.

