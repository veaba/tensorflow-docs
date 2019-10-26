Computes the categorical hinge loss between y_true and y_pred.
### Aliases:
- tf.compat.v1.keras.losses.categorical_hinge
- tf.compat.v2.keras.losses.categorical_hinge
- tf.compat.v2.losses.categorical_hinge
- tf.losses.categorical_hinge

```
 tf.keras.losses.categorical_hinge(
    y_true,
    y_pred
)
```
#### Args:
- y_true: The ground truth values. y_true values are expected to be -1 or 1. If binary (0 or 1) labels are provided they will be converted to -1 or 1.
- y_pred: The predicted values.
#### Returns:
A tensor.
