Applies a boolean mask to data without flattening the mask dimensions.
### Aliases:
- tf.compat.v1.ragged.boolean_mask
- tf.compat.v2.ragged.boolean_mask

```
 tf.ragged.boolean_mask(
    data,
    mask,
    name=None
)
```
Returns a potentially ragged tensor that is formed by retaining the elements in data where the corresponding value in mask is True.
- output[a1...aA, i, b1...bB] = data[a1...aA, j, b1...bB]
Where j is the ith True entry of mask[a1...aA].
[tf.boolean_mask](https://tensorflow.google.cn/api_docs/python/tf/boolean_mask)Note that output preserves the mask dimensions a1...aA; this differs from , which flattens those dimensions.

#### Args:
- data: A potentially ragged tensor.
- mask: A potentially ragged boolean tensor. mask's shape must be a prefix of data's shape. rank``(mask)`` must be known statically.
- name: A name prefix for the returned tensor (optional).
#### Returns:
A potentially ragged tensor that is formed by retaining the elements in data where the corresponding value in mask is True.
- rank(output) = rank(data).
- output.ragged_rank = max(data.ragged_rank, rank(mask) - 1).
#### Raises:
- ValueError: if rank(mask) is not known statically; or if mask.shape is not a prefix of data.shape.
#### Examples:
