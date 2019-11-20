[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/util.py#L224-L239)  
---  
  
Gets the total regularization loss.

    
    
    tf.compat.v1.losses.get_regularization_loss(
        scope=None,
        name='total_regularization_loss'
    )
    

#### Args:

  * **`scope`** : An optional scope name for filtering the losses to return.
  * **`name`** : The name of the returned tensor.

#### Returns:

A scalar regularization loss.

