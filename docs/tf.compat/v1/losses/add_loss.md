
Adds a externally defined loss to the collection of losses.

```
 tf.compat.v1.losses.add_loss(
    loss,
    loss_collection=tf.GraphKeys.LOSSES
)
```
#### Args:
- `loss`: A `loss` `Tensor`.
- `loss`_collection: Optional collection to add the `loss` to.
