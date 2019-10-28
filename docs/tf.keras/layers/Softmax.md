## Class Softmax
Softmax activation function.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Softmax`
- Class `tf.compat.v2.keras.layers.Softmax`
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as the input.
#### Arguments:
- `axis`: Integer, `axis` along which the softmax normalization is applied.
## __init__
View source

```
 __init__(
    axis=-1,
    **kwargs
)
```
