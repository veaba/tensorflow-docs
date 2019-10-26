Leaky version of a Rectified Linear Unit.
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.LeakyReLU
- Class tf.compat.v2.keras.layers.LeakyReLU
### Used in the tutorials:
- Deep Convolutional Generative Adversarial Network
- Pix2Pix
It allows a small gradient when the unit is not active: f(x) = alpha * x for x < 0, f(x) = x for x >= 0.
#### Input shape:
Arbitrary. Use the keyword argument input_shape (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as the input.
#### Arguments:
- alpha: Float >= 0. Negative slope coefficient.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L53-L56)


```
 __init__(
    alpha=0.3,
    **kwargs
)
```
