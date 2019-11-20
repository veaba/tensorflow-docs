[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/util.py#L242-L271)  
---  
  
Returns a tensor whose value represents the total loss.

    
    
    tf.compat.v1.losses.get_total_loss(
        add_regularization_losses=True,
        name='total_loss',
        scope=None
    )
    

In particular, this adds any losses you have added with `tf.add_loss()` to any
regularization losses that have been added by regularization parameters on
layers constructors e.g. `tf.layers`. Be very sure to use this if you are
constructing a loss_op manually. Otherwise regularization arguments on
`tf.layers` methods will not function.

#### Args:

  * **`add_regularization_losses`** : A boolean indicating whether or not to use the regularization losses in the sum.
  * **`name`** : The name of the returned tensor.
  * **`scope`** : An optional scope name for filtering the losses to return. Note that this filters the losses added with `tf.add_loss()` as well as the regularization losses to that scope.

#### Returns:

A `Tensor` whose value represents the total loss.

#### Raises:

  * **`ValueError`** : if `losses` is not iterable.

