Computes the cosine similarity between labels and predictions.
### Aliases:
- `tf.compat.v1.keras.losses.cosine`
- `tf.compat.v1.keras.losses.cosine_proximity`
- `tf.compat.v1.keras.losses.cosine_similarity`
- `tf.compat.v1.keras.metrics.cosine`
- `tf.compat.v1.keras.metrics.cosine_proximity`
- `tf.compat.v2.keras.losses.cosine_similarity`
- `tf.compat.v2.losses.cosine_similarity`
- `tf.losses.cosine_similarity`

```
 tf.keras.losses.cosine_similarity(
    y_true,
    y_pred,
    axis=-1
)
```
Note that it is a negative quantity between -1 and 0, where 0 indicates orthogonality and values closer to -1 indicate greater similarity. This makes it usable as a loss function in a setting where you try to maximize the proximity between predictions and targets.
