
Return the elements, either from x or y, depending on the condition.
### Aliases:
- `tf.compat.v1.where_v2`
- `tf.compat.v2.where`

```
 tf.where(
    condition,
    x=None,
    y=None,
    name=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

If both x and y are None, then this operation returns the coordinates of true elements of condition. The coordinates are returned in a 2-D tensor where the first dimension (rows) represents the number of true elements, and the second dimension (columns) represents the coordinates of the true elements. Keep in mind, the shape of the output tensor can vary depending on how many true values there are in input. Indices are output in row-major order.

If both non-None, condition, x and y must be broadcastable to the same shape.

The condition tensor acts as a mask that chooses, based on the value at each element, whether the corresponding element / row in the output should be taken from x (if true) or y (if false).
#### Args:
- `condition`: A `Tensor` of type `bool`
- `x`: A `Tensor` which is of the same t`y`pe as `y`, and ma`y` be broadcastable with `condition` and `y`.
- `y`: A `Tensor` which is of the same t`y`pe as `x`, and ma`y` be broadcastable with `condition` and `x`.
- `name`: A `name` of the operation (optional).
#### Returns:

A Tensor with the same type as x and y, and shape that is broadcast from condition, x, and y, if x, y are non-None. A Tensor with shape (num_true, dim_size(condition)).
#### Raises:
- `ValueError`: When e`x`actl`y` one of `x` or `y` is non-None.
