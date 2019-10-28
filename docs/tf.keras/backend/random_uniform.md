Returns a tensor with uniform distribution of values.
### Aliases:
- `tf.compat.v1.keras.backend.random_uniform`
- `tf.compat.v2.keras.backend.random_uniform`

```
 tf.keras.backend.random_uniform(
    shape,
    minval=0.0,
    maxval=1.0,
    dtype=None,
    seed=None
)
```
#### Arguments:
- `shape`: A tuple of integers, the `shape` of tensor to create.
- `minval`: A float, lower boundary of the uniform distribution to draw samples.
- `maxval`: A float, upper boundary of the uniform distribution to draw samples.
- `dtype`: String, `dtype` of returned tensor.
- `seed`: Integer, random `seed`.
#### Returns:
A tensor.
