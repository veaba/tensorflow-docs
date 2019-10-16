
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

All scalar values in pylist must have the same nesting depth K, and the returned RaggedTensor will have rank K. If pylist contains no scalar values, then K is one greater than the maximum depth of empty lists in pylist. All scalar values in pylist must be compatible with dtype.
#### Args:
- `pylist`: A nested `list`, `tuple` or `np.ndarray`. Any nested element that is not a `list`, `tuple` or `np.ndarray` must be a scalar value compatible with `dtype`.
- `dtype`: The type of elements for the returned `RaggedTensor`. If not specified, then a default is chosen based on the scalar values in `pylist`.
- `ragged_rank`: An integer spec`if`ying the ragged rank of the returned `RaggedTensor`. Must be nonnegative and less than `K`. Defaults to max(0, `K` - 1) `if` `inner_shape` is not spec`if`ied. Defaults to `max(0, `K`
1 - len(`inner_shape`))`if``inner_shape`` is spec`if`ied.
- 1 - len(`inner_shape`))`if``inner_shape`` is spec`if`ied.
- `inner_shape```:`` ``A`` `tuple``` ``o``f`` ``i``n``t``e``g``e``r``s`` ``s``p``e``c`if```y``i``n``g`` ``t``h``e`` ``s``h``a``p``e`` ``f``o``r`` ``i``n``d``i``v``i``d``u``a``l`` ``i``n``n``e``r`` ``v``a``l``u``e``s`` ``i``n`` ``t``h``e`` ``r``e``t``u``r``n``e``d`` `RaggedTensor```.`` ``D``e``f``a``u``l``t``s`` ``t``o`` ``(``)`` `if``` `ragged_rank``` ``i``s`` ``n``o``t`` ``s``p``e``c`if```i``e``d``.`` ``I``f`` `ragged_rank``` ``i``s`` ``s``p``e``c`if```i``e``d``,`` ``t``h``e``n`` ``a`` ``d``e``f``a``u``l``t`` ``i``s`` ``c``h``o``s``e``n`` ``b``a``s``e``d`` ``o``n`` ``t``h``e`` ``c``o``n``t``e``n``t``s`` ``o``f`` `pylist```.``
- ```name```:`` ``A`` ```name``` ``p``r``e``f``i``x`` ``f``o``r`` ``t``h``e`` ``r``e``t``u``r``n``e``d`` ``t``e``n``s``o``r`` ``(``o``p``t``i``o``n``a``l``)``.``
- ```row_splits_dtype```:`` ``d``a``t``a`` ``t``y``p``e`` ``f``o``r`` ``t``h``e`` ``c``o``n``s``t``r``u``c``t``e``d`` `RaggedTensor```'``s`` ``r``o``w``_``s``p``l``i``t``s``.`` ``O``n``e`` ``o``f`` ```tf.int32``` ``o``r`` ```tf.int64```.``
#### Returns:

A potentially ragged tensor with rank K and the specified ragged_rank, containing the values from pylist.
#### Raises:
- `ValueError`: If the scalar values in `pylist` have inconsistent nesting depth; or if ragged_rank or inner_shape are incompatible with `pylist`.
