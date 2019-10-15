## Class Conv3DTranspose

Transposed 3D convolution layer (sometimes called 3D Deconvolution).
[Conv3DTranspose](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Conv3DTranspose)Inherits From: , Layer

#### Arguments:
- `filters`: Integer, the dimensionality of the output space (i.e. the number of `filters` in the convolution).
- `kernel_size`: An integer or tuple/list of 3 integers, specifying the depth, height and width of the 3D convolution window. Can be a single integer to specify the same value for all spatial dimensions.
- `strides`: An integer or tuple/list of 3 integers, specifying the `strides` of the convolution along the depth, height and width. Can be a single integer to specify the same value for all spatial dimensions.
- `padding`: One of `"valid"` or `"same"` (case-insensitive).
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, depth, height, width, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, depth, height, width`).
- `activation`: Activation function. Set it to `None` to maintain a linear `activation`.
- `use_bias`: Boolean, whether the layer uses a bias.
- `kernel_initializer`: An initializer for the convolution kernel.
- `bias_initializer`: An initializer for the bias vector. If `None`, the default initializer will be used.
- `kernel_regularizer`: Optional regularizer for the convolution kernel.
- `bias_regularizer`: Optional regularizer for the bias vector.
- `activity_regularizer`: Optional regularizer function for the output.
- `kernel_constraint`: Optional projection function to be applied to the kernel after being updated by an `Optimizer` (e.g. used to implement norm constraints or value constraints for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constraints are not safe to use when doing asynchronous distributed training.
- `bias_constraint`: Optional projection function to be applied to the bias after being updated by an `Optimizer`.
- `trainable`: Boolean, if `True` also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES` (see `tf.Variable`).
- `name`: A string, the `name` of the layer.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/convolutional.py#L1326-L1361)


```
 __init__(
    filters,
    kernel_size,
    strides=(1, 1, 1),
    padding='valid',
    data_format='channels_last',
    activation=None,
    use_bias=True,
    kernel_initializer=None,
    bias_initializer=tf.zeros_initializer(),
    kernel_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    bias_constraint=None,
    trainable=True,
    name=None,
    **kwargs
)
```
## Properties
### graph

DEPRECATED FUNCTION
### scope_name
