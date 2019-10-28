## Class Concatenate
Layer that concatenates a list of inputs.
### Aliases:
- Class `tf.compat.v1.keras.layers.Concatenate`
- Class `tf.compat.v2.keras.layers.Concatenate`
### Used in the tutorials:
- ``P``i``x``2``P``i``x``
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
It takes as input a list of tensors, all of the same shape except for the concatenation axis, and returns a single tensor, the concatenation of all inputs.
#### Arguments:
- `axis`: Axis along which to concatenate.
## __init__
View source

```
 __init__(
    axis=-1,
    **kwargs
)
```
Functional interface to the `Concatenate` layer.
### Aliases:
- `tf.compat.v1.keras.layers.concatenate`
- `tf.compat.v2.keras.layers.concatenate`

```
 tf.keras.layers.concatenate(
    inputs,
    axis=-1,
    **kwargs
)
```
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``P``i``x``2``P``i``x``
#### Arguments:
- `inputs`: A list of input tensors (at least 2).
- `axis`: Concatenation `axis`.
#### Returns:
A tensor, the concatenation of the inputs alongside `axis` `axis`.
