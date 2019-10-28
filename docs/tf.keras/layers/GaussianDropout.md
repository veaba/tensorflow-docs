## Class GaussianDropout
Apply multiplicative 1-centered Gaussian noise.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.GaussianDropout`
- Class `tf.compat.v2.keras.layers.GaussianDropout`
As it is a regularization layer, it is only active at training time.
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
    **kwargs
)
```
