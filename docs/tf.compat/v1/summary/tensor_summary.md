Outputs a `Summary` protocol buffer with a serialized tensor.proto.

```
 tf.compat.v1.summary.tensor_summary(
    name,
    tensor,
    summary_description=None,
    collections=None,
    summary_metadata=None,
    family=None,
    display_name=None
)
```
#### Args:
- `name`: A `name` for the generated node. If display_`name` is not set, it will also serve as the tag `name` in TensorBoard. (In that case, the tag `name` will inherit tf `name` scopes.)
- `tensor`: A `tensor` of any type and shape to serialize.
- `summary_description`: A long description of the summary sequence. Markdown is supported.
- `collections`: Optional list of graph `collections` keys. The new summary op is added to these `collections`. Defaults to `[GraphKeys.SUMMARIES]`.
- `summary_metadata`: Optional SummaryMetadata proto (which describes which plugins may use the summary value).
- `family`: Optional; if provided, used as the prefix of the summary tag, which controls the name used for display on TensorBoard when display_name is not set.
- `display_name`: A string used to name this data in TensorBoard. If this is not set, then the node name will be used instead.
#### Returns:
A scalar `Tensor` of type `string`. The serialized `Summary` protocol buffer.
