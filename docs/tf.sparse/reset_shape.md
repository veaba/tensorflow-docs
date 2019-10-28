Resets the shape of a `SparseTensor` with indices and values unchanged.
### Aliases:
- `tf.compat.v1.sparse.reset_shape`
- `tf.compat.v1.sparse_reset_shape`
- `tf.compat.v2.sparse.reset_shape`

```
 tf.sparse.reset_shape(
    sp_input,
    new_shape=None
)
```
If `new_shape` is None, returns a copy of `sp_input` with its shape reset to the tight bounding box of `sp_input`. This will be a shape consisting of all zeros if `sp_input` has no values.
If `new_shape` is provided, then it must be larger or equal in all dimensions compared to the shape of `sp_input`. When this condition is met, the returned SparseTensor will have its shape reset to `new_shape` and its indices and values unchanged from that of `sp_input`.
#### For example:
Consider a `sp_input` with shape [2, 3, 5]:
- It is an error to set `new_shape` as [3, 7] since this represents a rank-2 tensor while `sp_input` is rank-3. This is either a ValueError during graph construction (if both shapes are known) or an OpError during run time.
- Setting `new_shape` as [2, 3, 6] will be fine as this shape is larger or equal in every dimension compared to the original shape [2, 3, 5].
- ``O``n`` ``t``h``e`` ``o``t``h``e``r`` ``h``a``n``d``,`` ``s``e``t``t``i``n``g`` ``n``e``w``_``s``h``a``p``e`` ``a``s`` ``[``2``,`` ``3``,`` ``4``]`` ``i``s`` ``a``l``s``o`` ``a``n`` ``e``r``r``o``r``:`` ``T``h``e`` ``t``h``i``r``d`` ``d``i``m``e``n``s``i``o``n`` ``i``s`` ``s``m``a``l``l``e``r`` ``t``h``a``n`` ``t``h``e`` ``o``r``i``g``i``n``a``l`` ``s``h``a``p``e`` ``2``,`` ``3``,`` ``5``.``
- If `new_shape` is None, the returned SparseTensor will have a shape [2, 3, 4], which is the tight bounding box of `sp_input`.
#### Args:
- `sp_input`: The input `SparseTensor`.
- `new_shape`: None or a vector representing the new shape for the returned `SparseTensor`.
#### Returns:
A `SparseTensor` indices and values unchanged from `input_sp`. Its shape is `new_shape` if that is set. Otherwise it is the tight bounding box of `input_sp`
#### Raises:
- `TypeError`: If `sp_input` is not a `SparseTensor`.
- `ValueError`: If `new_shape` represents a tensor with a different rank from that of `sp_input` (if shapes are known when graph is constructed).
- `ValueError`: If `new_shape` is determined during graph build to have dimension sizes that are too small.
- `OpError`: - If `new_shape` has dimension sizes that are too small.
If shapes are not known during graph construction time, and during run time it is found out that the ranks do not match.
- ``I``f`` ``s``h``a``p``e``s`` ``a``r``e`` ``n``o``t`` ``k``n``o``w``n`` ``d``u``r``i``n``g`` ``g``r``a``p``h`` ``c``o``n``s``t``r``u``c``t``i``o``n`` ``t``i``m``e``,`` ``a``n``d`` ``d``u``r``i``n``g`` ``r``u``n`` ``t``i``m``e`` ``i``t`` ``i``s`` ``f``o``u``n``d`` ``o``u``t`` ``t``h``a``t`` ``t``h``e`` ``r``a``n``k``s`` ``d``o`` ``n``o``t`` ``m``a``t``c``h``.``
