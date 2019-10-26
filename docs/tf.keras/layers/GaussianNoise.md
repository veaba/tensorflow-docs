## Class GaussianNoise
Apply additive zero-centered Gaussian noise.
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.GaussianNoise
- Class tf.compat.v2.keras.layers.GaussianNoise
This is useful to mitigate overfitting (you could see it as a form of random data augmentation). Gaussian Noise (GS) is a natural choice as corruption process for real valued inputs.
As it is a regularization layer, it is only active at training time.
#### Arguments:
- stddev: Float, standard deviation of the noise distribution.
#### Call arguments:
- inputs: Input tensor (of any rank).
- training: Python boolean indicating whether the layer should behave in training mode (adding noise) or in inference mode (doing nothing).
#### Input shape:
Arbitrary. Use the keyword argument input_shape (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as input.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/noise.py#L59-L62)


```
 __init__(
    stddev,
    **kwargs
)
```
