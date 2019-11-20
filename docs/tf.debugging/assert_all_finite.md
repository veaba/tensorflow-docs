[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/debugging/assert_all_finite) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/numerics.py#L52-L69)  
---|---  
  
Assert that the tensor does not contain any NaN's or Inf's.

### Aliases:

  * [`tf.compat.v2.debugging.assert_all_finite`](/api_docs/python/tf/debugging/assert_all_finite)

    
    
    tf.debugging.assert_all_finite(
        x,
        message,
        name=None
    )
    

#### Args:

  * **`x`** : Tensor to check.
  * **`message`** : Message to log on failure.
  * **`name`** : A name for this operation (optional).

#### Returns:

Same tensor as `x`.

