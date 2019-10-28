Samples elements at random from the `datasets` in `datasets`.

```
 tf.compat.v1.data.experimental.sample_from_datasets(
    datasets,
    weights=None,
    seed=None
)
```
#### Args:
- `datasets`: A list of `tf.data.Dataset` objects with compatible structure.
#### Returns:
A dataset that interleaves elements from `datasets` at random, according to `weights` if provided, otherwise with uniform probability.
#### Raises:
- `TypeError`: If the `datasets` or `weights` arguments have the wrong type.
- `ValueError`: If the `weights` argument is specified and does not match the length of the `datasets` element.
