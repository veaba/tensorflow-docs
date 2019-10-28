## Class ELU
Exponential Linear Unit.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.ELU`
- Class `tf.compat.v2.keras.layers.ELU`
#### It follows:
f(x) = alpha * (exp(x) - 1.) for x < 0, f(x) = x for x >= 0.
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as the input.
#### Arguments:
- `alpha`: Scale for the negative factor.
## __init__
View source

```
 __init__(
    alpha=1.0,
    **kwargs
)
```
