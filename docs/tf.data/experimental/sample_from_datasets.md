
Samples elements at random from the datasets in datasets.
### Aliases:
- `tf.compat.v2.data.experimental.sample_from_datasets`

```
 tf.data.experimental.sample_from_datasets(
    datasets,
    weights=None,
    seed=None
)
```
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
#### Args:
- `datasets`: A list of `tf.data.Dataset` objects with compatible structure.
- `weights`: (Optional.) A list of len(`datasets`) floating-point values where `weights`[i] represents the probability with which an element should be sampled from `datasets`[i], or a `tf.data.Dataset` object where each element is such a list. Defaults to a uniform distribution across `datasets`.
- `seed`: (Optional.) A `tf.int64` scalar `tf.Tensor`, representing the random `seed` that will be used to create the distribution. See `tf.compat.v1.set_random_seed` for behavior.
#### Returns:

A dataset that interleaves elements from datasets at random, according to weights if provided, otherwise with uniform probability.
#### Raises:
- `TypeError`: If the `datasets` or `weights` arguments have the wrong type.
- `ValueError`: If the `weights` argument is specified and does not match the length of the `datasets` element.
