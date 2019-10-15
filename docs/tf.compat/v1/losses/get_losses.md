
Gets the list of losses from the loss_collection.

```
 tf.compat.v1.losses.get_losses(
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES
)
```
#### Args:
- `scope`: An optional `scope` name for filtering the losses to return.
- `loss_collection`: Optional losses collection.
#### Returns:

a list of loss tensors.
