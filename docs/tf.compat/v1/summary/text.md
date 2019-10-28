Summarizes textual data.

```
 tf.compat.v1.summary.text(
    name,
    tensor,
    collections=None
)
```
Text data summarized via this plugin will be visible in the Text Dashboard in TensorBoard. The standard TensorBoard Text Dashboard will render markdown in the strings, and will automatically organize 1d and 2d tensors into tables. If a tensor with more than 2 dimensions is provided, a 2d subarray will be displayed along with a warning message. (Note that this behavior is not intrinsic to the text summary api, but rather to the default TensorBoard text plugin.)
#### Args:
- `name`: A `name` for the generated node. Will also serve as a series `name` in TensorBoard.
- `tensor`: a string-type Tensor to summarize.
- `collections`: Optional list of ops.GraphKeys. The `collections` to add the summary to. Defaults to [_ops.GraphKeys.SUMMARIES]
#### Returns:
A `Tensor``Summary` op that is configured so that `Tensor`Board will recognize that it contains textual data. The `Tensor``Summary` is a scalar `Tensor` of type `string` which contains `Summary` protobufs.
#### Raises:
- `ValueError`: If tensor has the wrong type.
