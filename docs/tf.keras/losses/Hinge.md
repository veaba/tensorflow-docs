## Class Hinge
Computes the hinge loss between `y_true` and `y_pred`.
### Aliases:
- Class `tf.compat.v1.keras.losses.Hinge`
- Class `tf.compat.v2.keras.losses.Hinge`
- Class `tf.compat.v2.losses.Hinge`
- Class `tf.losses.Hinge`
Computes the hinge loss between `y_true` and `y_pred`.
### Aliases:
- `tf.compat.v1.keras.losses.hinge`
- `tf.compat.v1.keras.metrics.hinge`
- `tf.compat.v2.keras.losses.hinge`
- `tf.compat.v2.keras.metrics.hinge`
- `tf.compat.v2.losses.hinge`
- `tf.compat.v2.metrics.hinge`
- `tf.keras.metrics.hinge`
- `tf.losses.hinge`
- `tf.metrics.hinge`

```
 tf.keras.losses.hinge(
    y_true,
    y_pred
)
```
#### Args:
- `y_true`: The ground truth values. `y_true` values are expected to be -1 or 1. If binary (0 or 1) labels are provided they will be converted to -1 or 1.
- `y_pred`: The predicted values.
#### Returns:
Tensor with one scalar loss entry per sample.
