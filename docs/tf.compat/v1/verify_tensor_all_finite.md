[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/numerics.py#L31-L49)  
---  
  
Assert that the tensor does not contain any NaN's or Inf's.

### Aliases:

  * [`tf.compat.v1.debugging.assert_all_finite`](/api_docs/python/tf/compat/v1/verify_tensor_all_finite)

    
    
    tf.compat.v1.verify_tensor_all_finite(
        t=None,
        msg=None,
        name=None,
        x=None,
        message=None
    )
    

#### Args:

  * **`t`** : Tensor to check.
  * **`msg`** : Message to log on failure.
  * **`name`** : A name for this operation (optional).
  * **`x`** : Alias for t.
  * **`message`** : Alias for msg.

#### Returns:

Same tensor as `t`.

