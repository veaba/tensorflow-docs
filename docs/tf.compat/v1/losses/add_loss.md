[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/util.py#L182-L194)  
---  
  
Adds a externally defined loss to the collection of losses.

    
    
    tf.compat.v1.losses.add_loss(
        loss,
        loss_collection=tf.GraphKeys.LOSSES
    )
    

#### Args:

  * **`loss`** : A loss `Tensor`.
  * **`loss_collection`** : Optional collection to add the loss to.

