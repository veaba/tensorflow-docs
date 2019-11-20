[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/losses/losses_impl.py#L138-L203)  
---  
  
Computes the weighted loss.

    
    
    tf.compat.v1.losses.compute_weighted_loss(
        losses,
        weights=1.0,
        scope=None,
        loss_collection=tf.GraphKeys.LOSSES,
        reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
    )
    

#### Args:

  * **`losses`** : `Tensor` of shape `[batch_size, d1, ... dN]`.
  * **`weights`** : Optional `Tensor` whose rank is either 0, or the same rank as `losses`, and must be broadcastable to `losses` (i.e., all dimensions must be either `1`, or the same as the corresponding `losses` dimension).
  * **`scope`** : the scope for the operations performed in computing the loss.
  * **`loss_collection`** : the loss will be added to these collections.
  * **`reduction`** : Type of reduction to apply to loss.

#### Returns:

Weighted loss `Tensor` of the same type as `losses`. If `reduction` is `NONE`,
this has the same shape as `losses`; otherwise, it is scalar.

#### Raises:

  * **`ValueError`** : If `weights` is `None` or the shape is not compatible with `losses`, or if the number of dimensions (rank) of either `losses` or `weights` is missing.

#### Note:

When calculating the gradient of a weighted loss contributions from both
`losses` and `weights` are considered. If your `weights` depend on some model
parameters but you do not want this to affect the loss gradient, you need to
apply
[`tf.stop_gradient`](https://tensorflow.google.cn/api_docs/python/tf/stop_gradient)
to `weights` before passing them to `compute_weighted_loss`.

#### Eager Compatibility

The `loss_collection` argument is ignored when executing eagerly. Consider
holding on to the return value or collecting losses via a
[`tf.keras.Model`](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

