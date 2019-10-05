
A transformation that prefetches dataset values to the given device.
### Aliases:
- `tf.compat.v1.data.experimental.prefetch_to_device`
- `tf.compat.v2.data.experimental.prefetch_to_device`

```
 tf.data.experimental.prefetch_to_device(
    device,
    buffer_size=None
)
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)NOTE: Although the transformation creates a , the transformation must be the final Dataset in the input pipeline.

#### Args:
- `device`: A string. The name of a `device` to which elements will be prefetched.
- `buffer_size`: (Optional.) The number of elements to buffer on `device`. Defaults to an automatically chosen value.
#### Returns:
[tf.data.Dataset.apply](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

