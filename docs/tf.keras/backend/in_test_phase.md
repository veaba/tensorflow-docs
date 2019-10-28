Selects `x` in test phase, and `alt` otherwise.
### Aliases:
- `tf.compat.v1.keras.backend.in_test_phase`
- `tf.compat.v2.keras.backend.in_test_phase`

```
 tf.keras.backend.in_test_phase(
    x,
    alt,
    training=None
)
```
Note that `alt` should have the same shape as `x`.
#### Arguments:
- `x`: What to return in test phase (tensor or callable that returns a tensor).
- `alt`: What to return otherwise (tensor or callable that returns a tensor).
- `training`: Optional scalar tensor (or Python boolean, or Python integer) specifying the learning phase.
#### Returns:
Either `x` or `alt` based on `K.learning_phase`.
