## Class ReLU
Rectified Linear Unit activation function.
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.ReLU
- Class tf.compat.v2.keras.layers.ReLU
### Used in the tutorials:
- Pix2Pix
With default values, it returns element-wise max(x, 0).
Otherwise, it follows: f(x) = max_value for x >= max_value, f(x) = x for threshold <= x < max_value, f(x) = negative_slope * (x - threshold) otherwise.
#### Input shape:
Arbitrary. Use the keyword argument input_shape (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as the input.
#### Arguments:
- max_value: Float >= 0. Maximum activation value.
- negative_slope: Float >= 0. Negative slope coefficient.
- threshold: Float. Threshold value for thresholded activation.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L297-L311)


```
 __init__(
    max_value=None,
    negative_slope=0,
    threshold=0,
    **kwargs
)
```
