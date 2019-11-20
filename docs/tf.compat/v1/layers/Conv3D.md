[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/convolutional.py#L428-L521)  
---  
  
## Class `Conv3D`

3D convolution layer (e.g. spatial convolution over volumes).

Inherits From:
[`Conv3D`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv3D),
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

This layer creates a convolution kernel that is convolved (actually cross-
correlated) with the layer input to produce a tensor of outputs. If `use_bias`
is True (and a `bias_initializer` is provided), a bias vector is created and
added to the outputs. Finally, if `activation` is not `None`, it is applied to
the outputs as well.

#### Arguments:

  * **`filters`** : Integer, the dimensionality of the output space (i.e. the number of filters in the convolution).
  * **`kernel_size`** : An integer or tuple/list of 3 integers, specifying the depth, height and width of the 3D convolution window. Can be a single integer to specify the same value for all spatial dimensions.
  * **`strides`** : An integer or tuple/list of 3 integers, specifying the strides of the convolution along the depth, height and width. Can be a single integer to specify the same value for all spatial dimensions. Specifying any stride value != 1 is incompatible with specifying any `dilation_rate` value != 1.
  * **`padding`** : One of `"valid"` or `"same"` (case-insensitive).
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, depth, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, depth, height, width)`.
  * **`dilation_rate`** : An integer or tuple/list of 3 integers, specifying the dilation rate to use for dilated convolution. Can be a single integer to specify the same value for all spatial dimensions. Currently, specifying any `dilation_rate` value != 1 is incompatible with specifying any stride value != 1.
  * **`activation`** : Activation function. Set it to None to maintain a linear activation.
  * **`use_bias`** : Boolean, whether the layer uses a bias.
  * **`kernel_initializer`** : An initializer for the convolution kernel.
  * **`bias_initializer`** : An initializer for the bias vector. If None, the default initializer will be used.
  * **`kernel_regularizer`** : Optional regularizer for the convolution kernel.
  * **`bias_regularizer`** : Optional regularizer for the bias vector.
  * **`activity_regularizer`** : Optional regularizer function for the output.
  * **`kernel_constraint`** : Optional projection function to be applied to the kernel after being updated by an `Optimizer` (e.g. used to implement norm constraints or value constraints for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constraints are not safe to use when doing asynchronous distributed training.
  * **`bias_constraint`** : Optional projection function to be applied to the bias after being updated by an `Optimizer`.
  * **`trainable`** : Boolean, if `True` also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES` (see [`tf.Variable`](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
  * **`name`** : A string, the name of the layer.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/convolutional.py#L486-L521)

    
    
    __init__(
        filters,
        kernel_size,
        strides=(1, 1, 1),
        padding='valid',
        data_format='channels_last',
        dilation_rate=(1, 1, 1),
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
    

## Properties

### `graph`

DEPRECATED FUNCTION

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Stop using this property because tf.layers
layers no longer track their graph.

### `scope_name`

[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/convolutional.py#L524-L632)  
---  
  
Functional interface for the 3D convolution layer. (deprecated)

    
    
    tf.compat.v1.layers.conv3d(
        inputs,
        filters,
        kernel_size,
        strides=(1, 1, 1),
        padding='valid',
        data_format='channels_last',
        dilation_rate=(1, 1, 1),
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
        reuse=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`tf.keras.layers.Conv3D`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv3D)
instead.

This layer creates a convolution kernel that is convolved (actually cross-
correlated) with the layer input to produce a tensor of outputs. If `use_bias`
is True (and a `bias_initializer` is provided), a bias vector is created and
added to the outputs. Finally, if `activation` is not `None`, it is applied to
the outputs as well.

#### Arguments:

  * **`inputs`** : Tensor input.
  * **`filters`** : Integer, the dimensionality of the output space (i.e. the number of filters in the convolution).
  * **`kernel_size`** : An integer or tuple/list of 3 integers, specifying the depth, height and width of the 3D convolution window. Can be a single integer to specify the same value for all spatial dimensions.
  * **`strides`** : An integer or tuple/list of 3 integers, specifying the strides of the convolution along the depth, height and width. Can be a single integer to specify the same value for all spatial dimensions. Specifying any stride value != 1 is incompatible with specifying any `dilation_rate` value != 1.
  * **`padding`** : One of `"valid"` or `"same"` (case-insensitive).
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, depth, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, depth, height, width)`.
  * **`dilation_rate`** : An integer or tuple/list of 3 integers, specifying the dilation rate to use for dilated convolution. Can be a single integer to specify the same value for all spatial dimensions. Currently, specifying any `dilation_rate` value != 1 is incompatible with specifying any stride value != 1.
  * **`activation`** : Activation function. Set it to None to maintain a linear activation.
  * **`use_bias`** : Boolean, whether the layer uses a bias.
  * **`kernel_initializer`** : An initializer for the convolution kernel.
  * **`bias_initializer`** : An initializer for the bias vector. If None, the default initializer will be used.
  * **`kernel_regularizer`** : Optional regularizer for the convolution kernel.
  * **`bias_regularizer`** : Optional regularizer for the bias vector.
  * **`activity_regularizer`** : Optional regularizer function for the output.
  * **`kernel_constraint`** : Optional projection function to be applied to the kernel after being updated by an `Optimizer` (e.g. used to implement norm constraints or value constraints for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constraints are not safe to use when doing asynchronous distributed training.
  * **`bias_constraint`** : Optional projection function to be applied to the bias after being updated by an `Optimizer`.
  * **`trainable`** : Boolean, if `True` also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES` (see [`tf.Variable`](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
  * **`name`** : A string, the name of the layer.
  * **`reuse`** : Boolean, whether to reuse the weights of a previous layer by the same name.

#### Returns:

Output tensor.

#### Raises:

  * **`ValueError`** : if eager execution is enabled.

