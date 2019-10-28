Applies a boolean mask to `data` without flattening the mask dimensions.
### Aliases:
- `tf.compat.v1.ragged.boolean_mask`
- `tf.compat.v2.ragged.boolean_mask`

```
 tf.ragged.boolean_mask(
    data,
    mask,
    name=None
)
```
Returns a potentially ragged tensor that is formed by retaining the elements in `data` where the corresponding value in `mask` is `True`.
- `output[a1...aA, i, b1...bB] = data[a1...aA, j, b1...bB]`
Where `j` `i`s the `i`th `True` entry of `mask[a1...aA]`.
Note that `output` preserves the mask dimensions `a1...aA`; this differs from `tf.boolean_mask`, which flattens those dimensions.
#### Args:
- `data`: A potentially ragged tensor.
#### Returns:
A potentially ragged tensor that is formed by retaining the elements in `data` where the corresponding value in `mask` is `True`.
#### Raises:
#### Examples:
