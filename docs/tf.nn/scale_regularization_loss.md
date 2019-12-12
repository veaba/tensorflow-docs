Scales the sum of the given regularization losses by number of replicas.

**Aliases** : [ `tf.compat.v1.nn.scale_regularization_loss` ](/api_docs/python/tf/nn/scale_regularization_loss), [ `tf.compat.v2.nn.scale_regularization_loss` ](/api_docs/python/tf/nn/scale_regularization_loss)

```
 tf.nn.scale_regularization_loss(regularization_loss)
 
```

Usage with distribution strategy and custom training loop:

```
 with strategy.scope():
  def compute_loss(self, label, predictions):
    per_example_loss = tf.keras.losses.sparse_categorical_crossentropy(
        labels, predictions)

    # Compute loss that is scaled by sample_weight and by global batch size.
    loss = tf.compute_average_loss(
        per_example_loss,
        sample_weight=sample_weight,
        global_batch_size=GLOBAL_BATCH_SIZE)

    # Add scaled regularization losses.
    loss += tf.scale_regularization_loss(tf.nn.l2_loss(weights))
    return loss
 
```

#### Args:
- **`regularization_loss`** : Regularization loss.


#### Returns:
Scalar loss value.

