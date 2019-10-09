## Class SeparableConv1D

Depthwise separable 1D convolution.
### Aliases:
- Class `tf.compat.v1.keras.layers.SeparableConv1D`
- Class `tf.compat.v1.keras.layers.SeparableConvolution1D`
- Class `tf.compat.v2.keras.layers.SeparableConv1D`
- Class `tf.compat.v2.keras.layers.SeparableConvolution1D`
- Class `tf.keras.layers.SeparableConvolution1D`

This layer performs a depthwise convolution that acts separately on channels, followed by a pointwise convolution that mixes channels. If use_bias is True and a bias initializer is provided, it adds a bias vector to the output. It then optionally applies an activation function to produce the final output.
#### Arguments:
- `filters`: Integer, the dimensionality of the output space (i.e. the number of `filters` in the convolution).
- `kernel_size`: A single integer specifying the spatial dimensions of the `filters`.
- `strides`: A single integer specifying the `strides` of the convolution. Specifying any `stride` value != 1 is incompatible with specifying any `dilation_rate` value != 1.
- `padding`: One of `"valid"`, `"same"`, or `"causal"` (case-insensitive).
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, length, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, length`).
- `dilation_rate`: A single integer, specifying the dilation rate to use for dilated convolution. Currently, specifying any `dilation_rate` value != 1 is incompatible with specifying any `stride` value != 1.
- `depth_multiplier`: The number of depthwise convolution output channels for each input channel. The total number of depthwise convolution output channels will be equal to num_`filters`_in * `depth_multiplier`.
- `activation`: Activation function. Set it to None to maintain a linear `activation`.
- `use_bias`: Boolean, whether the layer uses a bias.
- `depthwise_initializer`: An initializer for the depthwise convolution kernel.
- `pointwise_initializer`: An initializer for the pointwise convolution kernel.
- `bias_initializer`: An initializer for the bias vector. If None, the default initializer will be used.
- `depthwise_regularizer`: Optional regularizer for the depthwise convolution kernel.
- `pointwise_regularizer`: Optional regularizer for the pointwise convolution kernel.
- `bias_regularizer`: Optional regularizer for the bias vector.
- `activity_regularizer`: Optional regularizer function for the output.
- `depthwise_constraint`: Optional projection function to be applied to the depthwise kernel after being updated by an `Optimizer` (e.g. used for norm constraints or value constraints for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constraints are not safe to use when doing asynchronous distributed training.
- `pointwise_constraint`: Optional projection function to be applied to the pointwise kernel after being updated by an `Optimizer`.
- `bias_constraint`: Optional projection function to be applied to the bias after being updated by an `Optimizer`.
- `trainable`: Boolean, if `True` the weights of this layer will be marked as `trainable` (and listed in `layer.trainable_weights`).
- `name`: A string, the `name` of the layer.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1446-L1488)


```
 __init__(
    filters,
    kernel_size,
    strides=1,
    padding='valid',
    data_format=None,
    dilation_rate=1,
    depth_multiplier=1,
    activation=None,
    use_bias=True,
    depthwise_initializer='glorot_uniform',
    pointwise_initializer='glorot_uniform',
    bias_initializer='zeros',
    depthwise_regularizer=None,
    pointwise_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    depthwise_constraint=None,
    pointwise_constraint=None,
    bias_constraint=None,
    **kwargs
)
```