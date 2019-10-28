## Class PReLU
Parametric Rectified Linear Unit.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.PReLU`
- Class `tf.compat.v2.keras.layers.PReLU`
#### It follows:
f(x) = `` * x for x < 0, f(x) = x for x >= 0, where `` is a learned array with the same shape as x.
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as the input.
#### Arguments:
- `alpha_initializer`: Initializer function for the weights.
- `alpha_regularizer`: Regularizer for the weights.
- `alpha_constraint`: Constraint for the weights.
- `shared_axes`: The axes along which to share learnable parameters for the activation function. For example, if the incoming feature maps are from a 2D convolution with output shape `batch, height, width, channels)`, and you wish to share parameters across space so that each filter only has one set of parameters, set `shared_axes`=[1, 2].
## __init__
View source

```
 __init__(
    alpha_initializer='zeros',
    alpha_regularizer=None,
    alpha_constraint=None,
    shared_axes=None,
    **kwargs
)
```
