Creates a tensor with all elements set to 1.
### Aliases:
- `tf.compat.v1.ones`
- `tf.compat.v2.ones`

```
 tf.ones(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``A``u``t``o``m``a``t``i``c`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``o``n`` ``a``n``d`` ``g``r``a``d``i``e``n``t`` ``t``a``p``e``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
This operation returns a tensor of type `dtype` with `shape` `shape` and all elements set to 1.
#### For example:

```
 tf.ones([2, 3], tf.int32)  # [[1, 1, 1], [1, 1, 1]]
```
#### Args:
- `shape`: A list of integers, a tuple of integers, or a 1-D `Tensor` of type `int32`.
- `dtype`: The type of an element in the resulting `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` with all elements set to 1.
