
Defined in generated file: python/ops/gen_array_ops.py

Stops gradient computation.
### Aliases:
- `tf.compat.v1.stop_gradient`
- `tf.compat.v2.stop_gradient`

```
 tf.stop_gradient(
    input,
    name=None
)
```

When executed in a graph, this op outputs its input tensor as-is.

When building ops to compute gradients, this op prevents the contribution of its inputs to be taken into account. Normally, the gradient generator adds ops to a graph to compute the derivatives of a specified 'loss' by recursively finding out inputs that contributed to its computation. If you insert this op in the graph it inputs are masked from the gradient generator. They are not taken into account for computing gradients.

This is useful any time you want to compute a value with TensorFlow but need to pretend that the value was a constant. Some examples include:
- ``T``h``e`` ``E``M`` ``a``l``g``o``r``i``t``h``m`` ``w``h``e``r``e`` ``t``h``e`` ``M``-``s``t``e``p`` ``s``h``o``u``l``d`` ``n``o``t`` ``i``n``v``o``l``v``e`` ``b``a``c``k``p``r``o``p``a``g``a``t``i``o``n`` ``t``h``r``o``u``g``h`` ``t``h``e`` ``o``u``t``p``u``t`` ``o``f`` ``t``h``e`` ``E``-``s``t``e``p``.``
- ``C``o``n``t``r``a``s``t``i``v``e`` ``d``i``v``e``r``g``e``n``c``e`` ``t``r``a``i``n``i``n``g`` ``o``f`` ``B``o``l``t``z``m``a``n``n`` ``m``a``c``h``i``n``e``s`` ``w``h``e``r``e``,`` ``w``h``e``n`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``n``g`` ``t``h``e`` ``e``n``e``r``g``y`` ``f``u``n``c``t``i``o``n``,`` ``t``h``e`` ``t``r``a``i``n``i``n``g`` ``m``u``s``t`` ``n``o``t`` ``b``a``c``k``p``r``o``p``a``g``a``t``e`` ``t``h``r``o``u``g``h`` ``t``h``e`` ``g``r``a``p``h`` ``t``h``a``t`` ``g``e``n``e``r``a``t``e``d`` ``t``h``e`` ``s``a``m``p``l``e``s`` ``f``r``o``m`` ``t``h``e`` ``m``o``d``e``l``.``
- ``A``d``v``e``r``s``a``r``i``a``l`` ``t``r``a``i``n``i``n``g``,`` ``w``h``e``r``e`` ``n``o`` ``b``a``c``k``p``r``o``p`` ``s``h``o``u``l``d`` ``h``a``p``p``e``n`` ``t``h``r``o``u``g``h`` ``t``h``e`` ``a``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``g``e``n``e``r``a``t``i``o``n`` ``p``r``o``c``e``s``s``.``
#### Args:
- `input`: A `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as input.

Defined in generated file: python/ops/gen_array_ops.py

Stops gradient computation.
### Aliases:
- `tf.compat.v1.stop_gradient`
- `tf.compat.v2.stop_gradient`

```
 tf.stop_gradient(
    input,
    name=None
)
```

When executed in a graph, this op outputs its input tensor as-is.

When building ops to compute gradients, this op prevents the contribution of its inputs to be taken into account. Normally, the gradient generator adds ops to a graph to compute the derivatives of a specified 'loss' by recursively finding out inputs that contributed to its computation. If you insert this op in the graph it inputs are masked from the gradient generator. They are not taken into account for computing gradients.

This is useful any time you want to compute a value with TensorFlow but need to pretend that the value was a constant. Some examples include:
- ``T``h``e`` ``E``M`` ``a``l``g``o``r``i``t``h``m`` ``w``h``e``r``e`` ``t``h``e`` ``M``-``s``t``e``p`` ``s``h``o``u``l``d`` ``n``o``t`` ``i``n``v``o``l``v``e`` ``b``a``c``k``p``r``o``p``a``g``a``t``i``o``n`` ``t``h``r``o``u``g``h`` ``t``h``e`` ``o``u``t``p``u``t`` ``o``f`` ``t``h``e`` ``E``-``s``t``e``p``.``
- ``C``o``n``t``r``a``s``t``i``v``e`` ``d``i``v``e``r``g``e``n``c``e`` ``t``r``a``i``n``i``n``g`` ``o``f`` ``B``o``l``t``z``m``a``n``n`` ``m``a``c``h``i``n``e``s`` ``w``h``e``r``e``,`` ``w``h``e``n`` ``d``i``f``f``e``r``e``n``t``i``a``t``i``n``g`` ``t``h``e`` ``e``n``e``r``g``y`` ``f``u``n``c``t``i``o``n``,`` ``t``h``e`` ``t``r``a``i``n``i``n``g`` ``m``u``s``t`` ``n``o``t`` ``b``a``c``k``p``r``o``p``a``g``a``t``e`` ``t``h``r``o``u``g``h`` ``t``h``e`` ``g``r``a``p``h`` ``t``h``a``t`` ``g``e``n``e``r``a``t``e``d`` ``t``h``e`` ``s``a``m``p``l``e``s`` ``f``r``o``m`` ``t``h``e`` ``m``o``d``e``l``.``
- ``A``d``v``e``r``s``a``r``i``a``l`` ``t``r``a``i``n``i``n``g``,`` ``w``h``e``r``e`` ``n``o`` ``b``a``c``k``p``r``o``p`` ``s``h``o``u``l``d`` ``h``a``p``p``e``n`` ``t``h``r``o``u``g``h`` ``t``h``e`` ``a``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``g``e``n``e``r``a``t``i``o``n`` ``p``r``o``c``e``s``s``.``
#### Args:
- `input`: A `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as input.
