## Class AlphaDropout
Applies Alpha Dropout to the input.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.AlphaDropout`
- Class `tf.compat.v2.keras.layers.AlphaDropout`
Alpha `Dropout` is a `Dropout` that keeps mean and variance of inputs to their original values, in order to ensure the self-normalizing property even after this dropout. Alpha `Dropout` fits well to Scaled Exponential Linear Units by randomly setting activations to the negative saturation value.
#### Arguments:
#### Call arguments:
- `inputs`: Input tensor (of any rank).
- `training`: Python boolean indicating whether the layer should behave in `training` mode (adding dropout) or in inference mode (doing nothing).
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as input.
## __init__
View source

```
 __init__(
    rate,
    noise_shape=None,
    seed=None,
    **kwargs
)
```
