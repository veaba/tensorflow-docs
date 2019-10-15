Creates a constant tensor.
### Aliases:
- `tf.compat.v2.constant`

```
 tf.constant(
    value,
    dtype=None,
    shape=None,
    name='Const'
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
- ``U``s``e`` ``a`` ``G``P``U``
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
### Used in the tutorials:
- ``A``u``t``o``m``a``t``i``c`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``o``n`` ``a``n``d`` ``g``r``a``d``i``e``n``t`` ``t``a``p``e``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``D``e``e``p``D``r``e``a``m``
- ``L``o``a``d`` ``a`` ``p``a``n``d``a``s``.``D``a``t``a``F``r``a``m``e``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``
- ``W``o``r``d`` ``e``m``b``e``d``d``i``n``g``s``
The resulting tensor is populated with `value`s of type `dtype`, as specified by arguments `value` and (optionally) `shape` (see examples below).
The argument `value` can be a constant `value`, or a list of `value`s of type `dtype`. If `value` is a list, then the length of the list must be less than or equal to the number of elements implied by the `shape` argument (if specified). In the case where the list length is less than the number of elements specified by `shape`, the last element in the list will be used to fill the remaining entries.
The argument `shape` is optional. If present, it specifies the dimensions of the resulting tensor. If not present, the `shape` of `value` is used.
If the argument `dtype` is not specified, then the type is inferred from the type of `value`.
#### For example:

```
 # Constant 1-D Tensor populated with value list.
tensor = tf.constant([1, 2, 3, 4, 5, 6]) => [1 2 3 4 5 6]

# Constant 1-D Tensor populated with value list.
tensor = tf.constant([1, 2, 3, 4, 5, 6], shape=(2,3))
     => [[1 2 3], [4 5 6]]

# Constant 2-D tensor populated with scalar value -1.
tensor = tf.constant(-1.0, shape=[2, 3]) => [[-1. -1. -1.]
                                             [-1. -1. -1.]]
```
[tf.constant](https://tensorflow.google.cn/api_docs/python/tf/constant) differs from tf.fill in a few ways:

- `tf.constant` supports arbitrary constants, not just uniform scalar Tensors like `tf.fill`.
- `tf.constant` creates a `Const` node in the computation graph with the exact value at graph construction time. On the other hand, `tf.fill` creates an Op in the graph that is expanded at runtime.
- Because `tf.constant` only embeds constant values in the graph, it does not support dynamic shapes based on other runtime Tensors, whereas `tf.fill` does.
#### Args:
- `value`: A constant `value` (or list) of output type `dtype`.
- `dtype`: The type of the elements of the resulting tensor.
- `shape`: Optional dimensions of resulting tensor.
- `name`: Optional `name` for the tensor.
#### Returns:
A Constant Tensor.
#### Raises:
- `TypeError`: if shape is incorrectly specified or unsupported.
