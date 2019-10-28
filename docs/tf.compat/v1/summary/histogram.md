Outputs a `Summary` protocol buffer with a histogram.

```
 tf.compat.v1.summary.histogram(
    name,
    values,
    collections=None,
    family=None
)
```
Adding a histogram summary makes it possible to visualize your data's distribution in TensorBoard. You can see a detailed explanation of the TensorBoard histogram dashboard here.
The generated `Summary` has one summary value containing a histogram for `values`.
This op reports an `InvalidArgument` error if any value is not finite.
#### Args:
- `name`: A `name` for the generated node. Will also serve as a series `name` in TensorBoard.
- `values`: A real numeric `Tensor`. Any shape. Values to use to build the histogram.
- `collections`: Optional list of graph `collections` keys. The new summary op is added to these `collections`. Defaults to `[GraphKeys.SUMMARIES]`.
- `family`: Optional; if provided, used as the prefix of the summary tag name, which controls the tab name used for display on Tensorboard.
#### Returns:
A scalar `Tensor` of type `string`. The serialized `Summary` protocol buffer.
