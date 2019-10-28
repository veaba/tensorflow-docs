Merges summaries.

```
 tf.compat.v1.summary.merge(
    inputs,
    collections=None,
    name=None
)
```
This op creates a `Summary` protocol buffer that contains the union of all the values in the input summaries.
When the Op is run, it reports an `InvalidArgument` error if multiple values in the summaries to merge use the same tag.
#### Args:
- `inputs`: A list of `string` `Tensor` objects containing serialized `Summary` protocol buffers.
- `collections`: Optional list of graph `collections` keys. The new summary op is added to these `collections`. Defaults to `[]`.
- `name`: A `name` for the operation (optional).
#### Returns:
A scalar `Tensor` of type `string`. The serialized `Summary` protocol buffer resulting from the merging.
#### Raises:
- `RuntimeError`: If called with eager mode enabled.
#### Eager Compatibility
Not compatible with eager execution. To write TensorBoard summaries under eager execution, use `tf.contrib.summary` instead.
