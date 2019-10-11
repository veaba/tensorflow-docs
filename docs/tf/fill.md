
Creates a tensor filled with a scalar value.
### Aliases:
- `tf.compat.v1.fill`
- `tf.compat.v2.fill`

```
 tf.fill(
    dims,
    value,
    name=None
)
```
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``

This operation creates a tensor of shape dims and fills it with value.
#### For example:

```
 # Output tensor has shape [2, 3].
fill([2, 3], 9) ==> [[9, 9, 9]
                     [9, 9, 9]]
```
[tf.fill](https://tensorflow.google.cn/api_docs/python/tf/fill) differs from tf.constant in a few ways:

- `tf.fill` only supports scalar contents, whereas `tf.constant` supports Tensor values.
- `tf.fill` creates an Op in the computation graph that constructs the actual Tensor value at runtime. This is in contrast to `tf.constant` which embeds the entire Tensor into the graph with a `Const` node.
- Because `tf.fill` evaluates at graph runtime, it supports dynamic shapes based on other runtime Tensors, unlike `tf.constant`.
#### Args:
- `dims`: A `Tensor`. Must be one of the following types: `int32`, `int64`. 1-D. Represents the shape of the output tensor.
- `value`: A `Tensor`. 0-D (scalar). Value to fill the returned tensor. @compatibility(numpy) Equivalent to np.full @end_compatibility
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as value.
