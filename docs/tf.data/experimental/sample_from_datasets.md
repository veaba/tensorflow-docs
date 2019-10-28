Samples elements at random from the `datasets` in `datasets`.
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
### Used in the tutorials:
- ``C``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``o``n`` ``i``m``b``a``l``a``n``c``e``d`` ``d``a``t``a``
#### Args:
- `datasets`: A list of `tf.data.Dataset` objects with compatible structure.
#### Returns:
A dataset that interleaves elements from `datasets` at random, according to `weights` if provided, otherwise with uniform probability.
#### Raises:
- `TypeError`: If the `datasets` or `weights` arguments have the wrong type.
- `ValueError`: If the `weights` argument is specified and does not match the length of the `datasets` element.
