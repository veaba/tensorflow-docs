[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/util.py#L197-L208)  
---  
  
Gets the list of losses from the loss_collection.

    
    
    tf.compat.v1.losses.get_losses(
        scope=None,
        loss_collection=tf.GraphKeys.LOSSES
    )
    

#### Args:

  * **`scope`** : An optional scope name for filtering the losses to return.
  * **`loss_collection`** : Optional losses collection.

#### Returns:

a list of loss tensors.

