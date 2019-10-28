A transformation that prefetches dataset values to the given `device`.
### Aliases:
- `tf.compat.v1.data.experimental.prefetch_to_device`
- `tf.compat.v2.data.experimental.prefetch_to_device`

```
 tf.data.experimental.prefetch_to_device(
    device,
    buffer_size=None
)
```
NOTE: Although the transformation creates a `tf.data.Dataset`, the transformation must be the final `Dataset` in the input pipeline.
#### Args:
- `device`: A string. The name of a `device` to which elements will be prefetched.
- `buffer_size`: (Optional.) The number of elements to buffer on `device`. Defaults to an automatically chosen value.
#### Returns:
A `Dataset` transformation function, which can be passed to `tf.data.Dataset.apply`.
