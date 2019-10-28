Selects `x` in train phase, and `alt` otherwise.
### Aliases:
- `tf.compat.v1.keras.backend.in_train_phase`
- `tf.compat.v2.keras.backend.in_train_phase`

```
 tf.keras.backend.in_train_phase(
    x,
    alt,
    training=None
)
```
Note that `alt` should have the same shape as `x`.
#### Arguments:
- `x`: What to return in train phase (tensor or callable that returns a tensor).
- `alt`: What to return otherwise (tensor or callable that returns a tensor).
- `training`: Optional scalar tensor (or Python boolean, or Python integer) specifying the learning phase.
#### Returns:
