## Class Activation
Applies an activation function to an output.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Activation`
- Class `tf.compat.v2.keras.layers.Activation`
### Used in the guide:
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
#### Arguments:
- `activation`: Activation function, such as `tf.nn.relu`, or string name of built-in `activation` function, such as "relu".
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as input.
## __init__
View source

```
 __init__(
    activation,
    **kwargs
)
```
