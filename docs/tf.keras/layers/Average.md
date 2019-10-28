## Class Average
Layer that averages a list of inputs.
### Aliases:
- Class `tf.compat.v1.keras.layers.Average`
- Class `tf.compat.v2.keras.layers.Average`
It takes as input a list of tensors, all of the same shape, and returns a single tensor (also of the same shape).
## __init__
View source

```
 __init__(**kwargs)
```
Functional interface to the `Average` layer.
### Aliases:
- `tf.compat.v1.keras.layers.average`
- `tf.compat.v2.keras.layers.average`

```
 tf.keras.layers.average(
    inputs,
    **kwargs
)
```
### Used in the guide:
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
#### Arguments:
- `inputs`: A list of input tensors (at least 2).
#### Returns:
A tensor, the average of the inputs.
