## Class Softmax

Softmax activation function.
[Layer](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.Softmax`
- Class `tf.compat.v2.keras.layers.Softmax`
#### Input shape:

Arbitrary. Use the keyword argument input_shape (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:

Same shape as the input.
#### Arguments:
- `axis`: Integer, `axis` along which the softmax normalization is applied.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L254-L257)


```
 __init__(
    axis=-1,
    **kwargs
)
```