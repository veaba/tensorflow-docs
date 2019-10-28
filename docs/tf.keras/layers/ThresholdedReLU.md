## Class ThresholdedReLU
Thresholded Rectified Linear Unit.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.ThresholdedReLU`
- Class `tf.compat.v2.keras.layers.ThresholdedReLU`
#### It follows:
f(x) = x for x > theta, f(x) = 0 otherwise.
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as the input.
#### Arguments:
- `theta`: Float >= 0. Threshold location of activation.
## __init__
View source

```
 __init__(
    theta=1.0,
    **kwargs
)
```
