
Creates a tensor with all elements set to zero.
### Aliases:
- `tf.compat.v1.zeros`
- `tf.compat.v2.zeros`

```
 tf.zeros(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``C``u``s``t``o``m`` ``l``a``y``e``r``s``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``t``f``.``d``i``s``t``r``i``b``u``t``e``.``S``t``r``a``t``e``g``y``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``b``a``s``i``c``s``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``

This operation returns a tensor of type dtype with shape shape and all elements set to zero.
#### For example:

```
 tf.zeros([3, 4], tf.int32)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```
#### Args:
- `shape`: A list of integers, a tuple of integers, or a 1-D `Tensor` of type `int32`.
- `dtype`: The type of an element in the resulting `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor with all elements set to zero.

Creates a tensor with all elements set to zero.
### Aliases:
- `tf.compat.v1.zeros`
- `tf.compat.v2.zeros`

```
 tf.zeros(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``C``u``s``t``o``m`` ``l``a``y``e``r``s``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``t``f``.``d``i``s``t``r``i``b``u``t``e``.``S``t``r``a``t``e``g``y``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``b``a``s``i``c``s``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``

This operation returns a tensor of type dtype with shape shape and all elements set to zero.
#### For example:

```
 tf.zeros([3, 4], tf.int32)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```
#### Args:
- `shape`: A list of integers, a tuple of integers, or a 1-D `Tensor` of type `int32`.
- `dtype`: The type of an element in the resulting `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor with all elements set to zero.
