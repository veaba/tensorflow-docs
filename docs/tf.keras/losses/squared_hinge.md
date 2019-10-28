Computes the squared hinge loss between `y_true` and `y_pred`.
### Aliases:
- `tf.compat.v1.keras.losses.squared_hinge`
- `tf.compat.v1.keras.metrics.squared_hinge`
- `tf.compat.v2.keras.losses.squared_hinge`
- `tf.compat.v2.keras.metrics.squared_hinge`
- `tf.compat.v2.losses.squared_hinge`
- `tf.compat.v2.metrics.squared_hinge`
- `tf.keras.metrics.squared_hinge`
- `tf.losses.squared_hinge`
- `tf.metrics.squared_hinge`

```
 tf.keras.losses.squared_hinge(
    y_true,
    y_pred
)
```
#### Args:
- `y_true`: The ground truth values. `y_true` values are expected to be -1 or 1. If binary (0 or 1) labels are provided we will convert them to -1 or 1.
- `y_pred`: The predicted values.
#### Returns:
Tensor with one scalar loss entry per sample.
