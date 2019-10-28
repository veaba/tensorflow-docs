Adds all input tensors element-wise.
### Aliases:
- `tf.add_n`
- `tf.compat.v1.add_n`
- `tf.compat.v1.math.add_n`
- `tf.compat.v2.add_n`
- `tf.compat.v2.math.add_n`

```
 tf.math.add_n(
    inputs,
    name=None
)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``U``s``e`` ``a`` ``G``P``U``
### Used in the tutorials:
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
Converts `IndexedSlices` objects into dense tensors prior to adding.
`tf.math.add_n` performs the same operation as `tf.math.accumulate_n`, but it waits for all of its inputs to be ready before beginning to sum. This buffering can result in higher memory consumption when inputs are ready at different times, since the minimum temporary storage required is proportional to the input size rather than the output size.
This op does not broadcast its inputs. If you need broadcasting, use `tf.math.add` (or the `+` operator) instead.
#### For example:

```
 a = tf.constant([[3, 5], [4, 8]])
b = tf.constant([[1, 6], [2, 9]])
tf.math.add_n([a, b, a])  # [[7, 16], [10, 25]]
```
#### Args:
- `inputs`: A list of `tf.Tensor` or `tf.IndexedSlices` objects, each with same shape and type.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of same shape and type as the elements of `inputs`.
#### Raises:
- `ValueError`: If `inputs` don't all have same shape and dtype or the shape cannot be inferred.
