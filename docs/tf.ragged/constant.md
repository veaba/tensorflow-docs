Constructs a constant RaggedTensor from a nested Python list.
### Aliases:
- `tf.compat.v1.ragged.constant`
- `tf.compat.v2.ragged.constant`

```
 tf.ragged.constant(
    pylist,
    dtype=None,
    ragged_rank=None,
    inner_shape=None,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
```
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
#### Example:

```
 ragged.constant([[1, 2], [3], [4, 5, 6]]).eval()
RaggedTensorValue(values=[1, 2, 3, 4, 5, 6], splits=[0, 2, 3, 6])
```
All scalar values in `pylist` must have the same nesting depth `K`, and the returned `RaggedTensor` will have rank `K`. If `pylist` contains no scalar values, then `K` is one greater than the maximum depth of empty lists in `pylist`. All scalar values in `pylist` must be compatible with `dtype`.
#### Args:
- `pylist`: A nested `list`, `tuple` or `np.ndarray`. Any nested element that is not a `list`, `tuple` or `np.ndarray` must be a scalar value compatible with `dtype`.
- `dtype`: The type of elements for the returned `RaggedTensor`. If not specified, then a default is chosen based on the scalar values in `pylist`.
#### Returns:
A potentially ragged tensor with rank `K` and the specified `ragged_rank`, containing the values from `pylist`.
#### Raises:
- `ValueError`: If the scalar values in `pylist` have inconsistent nesting depth; or if ragged_rank or inner_shape are incompatible with `pylist`.
