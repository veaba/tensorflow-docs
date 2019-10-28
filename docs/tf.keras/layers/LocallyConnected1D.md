## Class LocallyConnected1D
Locally-connected layer for 1D inputs.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.LocallyConnected1D`
- Class `tf.compat.v2.keras.layers.LocallyConnected1D`
The `LocallyConnected1D` layer works similarly to the `Conv1D` layer, except that weights are unshared, that is, a different set of filters is applied at each different patch of the input.
#### Example:

```
     # apply a unshared weight convolution 1d of length 3 to a sequence with
    # 10 timesteps, with 64 output filters
    model = Sequential()
    model.add(LocallyConnected1D(64, 3, input_shape=(10, 32)))
    # now model.output_shape == (None, 8, 64)
    # add a new conv1d on top
    model.add(LocallyConnected1D(32, 3))
    # now model.output_shape == (None, 6, 32)
```
#### Arguments:
- `filters`: Integer, the dimensionality of the output space (i.e. the number of output `filters` in the convolution).
- `kernel_size`: An integer or tuple/list of a single integer, specifying the length of the 1D convolution window.
- `strides`: An integer or tuple/list of a single integer, specifying the stride length of the convolution. Specifying any stride value != 1 is incompatible with specifying any `dilation_rate` value != 1.
- `padding`: Currently only supports `"valid"` (case-insensitive). `"same"` may be supported in the future.
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, length, channels)` while `channels_first` corresponds to inputs with shape `batch, channels, length)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "`channels_last`".
- `activation`: Activation function to use. If you don't specify anything, no `activation` is applied (ie. "linear" `activation`: a(x) = x).
- `use_bias`: Boolean, whether the layer uses a bias vector.
- `kernel_initializer`: Initializer for the `kernel` weights matrix.
- `bias_initializer`: Initializer for the bias vector.
- `kernel_regularizer`: Regularizer function applied to the `kernel` weights matrix.
- `bias_regularizer`: Regularizer function applied to the bias vector.
- `activity_regularizer`: Regularizer function applied to the output of the layer (its "activation")..
- `kernel_constraint`: Constraint function applied to the kernel matrix.
- `bias_constraint`: Constraint function applied to the bias vector.
#### Input shape:
3D tensor with shape: `batch_size, steps, input_dim)`
#### Output shape:
3D tensor with shape: `batch_size, new_steps, filters)` `steps` value might have changed due to padding or strides.
## __init__
View source

```
 __init__(
    filters,
    kernel_size,
    strides=1,
    padding='valid',
    data_format=None,
    activation=None,
    use_bias=True,
    kernel_initializer='glorot_uniform',
    bias_initializer='zeros',
    kernel_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    bias_constraint=None,
    implementation=1,
    **kwargs
)
```
