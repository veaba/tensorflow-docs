
Stacks a list of rank-R tensors into one rank-(R+1) tensor.
### Aliases:
- `tf.compat.v1.stack`
- `tf.compat.v2.stack`

```
 tf.stack(
    values,
    axis=0,
    name='stack'
)
```
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``L``o``a``d`` ``C``S``V`` ``d``a``t``a``
- ``L``o``a``d`` ``a`` ``p``a``n``d``a``s``.``D``a``t``a``F``r``a``m``e``
- ``P``i``x``2``P``i``x``

Packs the list of tensors in values into a tensor with rank one higher than each tensor in values, by packing them along the axis dimension. Given a list of length N of tensors of shape (A, B, C);

if axis == 0 then the output tensor will have the shape (N, A, B, C). if axis == 1 then the output tensor will have the shape (A, N, B, C). Etc.
#### For example:

```
 x = tf.constant([1, 4])
y = tf.constant([2, 5])
z = tf.constant([3, 6])
tf.stack([x, y, z])  # [[1, 4], [2, 5], [3, 6]] (Pack along first dim.)
tf.stack([x, y, z], axis=1)  # [[1, 2, 3], [4, 5, 6]]
```

This is the opposite of unstack. The numpy equivalent is

```
 tf.stack([x, y, z]) = np.stack([x, y, z])
```
#### Args:
- `values`: A list of `Tensor` objects with the same shape and type.
#### Returns:
- `output`: A stacked `Tensor` with the same type as `values`.
#### Raises:
- `ValueError`: If `axis` is out of the range [-(R+1), R+1).

Stacks a list of rank-R tensors into one rank-(R+1) tensor.
### Aliases:
- `tf.compat.v1.stack`
- `tf.compat.v2.stack`

```
 tf.stack(
    values,
    axis=0,
    name='stack'
)
```
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``L``o``a``d`` ``C``S``V`` ``d``a``t``a``
- ``L``o``a``d`` ``a`` ``p``a``n``d``a``s``.``D``a``t``a``F``r``a``m``e``
- ``P``i``x``2``P``i``x``

Packs the list of tensors in values into a tensor with rank one higher than each tensor in values, by packing them along the axis dimension. Given a list of length N of tensors of shape (A, B, C);

if axis == 0 then the output tensor will have the shape (N, A, B, C). if axis == 1 then the output tensor will have the shape (A, N, B, C). Etc.
#### For example:

```
 x = tf.constant([1, 4])
y = tf.constant([2, 5])
z = tf.constant([3, 6])
tf.stack([x, y, z])  # [[1, 4], [2, 5], [3, 6]] (Pack along first dim.)
tf.stack([x, y, z], axis=1)  # [[1, 2, 3], [4, 5, 6]]
```

This is the opposite of unstack. The numpy equivalent is

```
 tf.stack([x, y, z]) = np.stack([x, y, z])
```
#### Args:
- `values`: A list of `Tensor` objects with the same shape and type.
#### Returns:
- `output`: A stacked `Tensor` with the same type as `values`.
#### Raises:
- `ValueError`: If `axis` is out of the range [-(R+1), R+1).
