[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Conv3DTranspose) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L893-L1175)  
  
  
## Class `Conv3DTranspose`

Transposed convolution layer (sometimes called Deconvolution).

Inherits From:
[`Conv3D`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv3D)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Conv3DTranspose`](/api_docs/python/tf/keras/layers/Conv3DTranspose)
  * Class [`tf.compat.v1.keras.layers.Convolution3DTranspose`](/api_docs/python/tf/keras/layers/Conv3DTranspose)
  * Class [`tf.compat.v2.keras.layers.Conv3DTranspose`](/api_docs/python/tf/keras/layers/Conv3DTranspose)
  * Class [`tf.compat.v2.keras.layers.Convolution3DTranspose`](/api_docs/python/tf/keras/layers/Conv3DTranspose)
  * Class [`tf.keras.layers.Convolution3DTranspose`](/api_docs/python/tf/keras/layers/Conv3DTranspose)

The need for transposed convolutions generally arises from the desire to use a
transformation going in the opposite direction of a normal convolution, i.e.,
from something that has the shape of the output of some convolution to
something that has the shape of its input while maintaining a connectivity
pattern that is compatible with said convolution.

When using this layer as the first layer in a model, provide the keyword
argument `input_shape` (tuple of integers, does not include the sample axis),
e.g. `input_shape=(128, 128, 128, 3)` for a 128x128x128 volume with 3 channels
if `data_format="channels_last"`.

#### Arguments:

  * **`filters`** : Integer, the dimensionality of the output space (i.e. the number of output filters in the convolution).
  * **`kernel_size`** : An integer or tuple/list of 3 integers, specifying the depth, height and width of the 3D convolution window. Can be a single integer to specify the same value for all spatial dimensions.
  * **`strides`** : An integer or tuple/list of 3 integers, specifying the strides of the convolution along the depth, height and width. Can be a single integer to specify the same value for all spatial dimensions. Specifying any stride value != 1 is incompatible with specifying any `dilation_rate` value != 1.
  * **`padding`** : one of `"valid"` or `"same"` (case-insensitive).
  * **`output_padding`** : An integer or tuple/list of 3 integers, specifying the amount of padding along the depth, height, and width. Can be a single integer to specify the same value for all spatial dimensions. The amount of output padding along a given dimension must be lower than the stride along that same dimension. If set to `None` (default), the output shape is inferred.
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, depth, height, width, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, depth, height, width)`. It defaults to the `image_data_format` value found in your Keras config file at `~/.keras/keras.json`. If you never set it, then it will be "channels_last".
  * **`dilation_rate`** : an integer or tuple/list of 3 integers, specifying the dilation rate to use for dilated convolution. Can be a single integer to specify the same value for all spatial dimensions. Currently, specifying any `dilation_rate` value != 1 is incompatible with specifying any stride value != 1.
  * **`activation`** : Activation function to use. If you don't specify anything, no activation is applied (ie. "linear" activation: `a(x) = x`).
  * **`use_bias`** : Boolean, whether the layer uses a bias vector.
  * **`kernel_initializer`** : Initializer for the `kernel` weights matrix.
  * **`bias_initializer`** : Initializer for the bias vector.
  * **`kernel_regularizer`** : Regularizer function applied to the `kernel` weights matrix.
  * **`bias_regularizer`** : Regularizer function applied to the bias vector.
  * **`activity_regularizer`** : Regularizer function applied to the output of the layer (its "activation").
  * **`kernel_constraint`** : Constraint function applied to the kernel matrix.
  * **`bias_constraint`** : Constraint function applied to the bias vector.

#### Input shape:

5D tensor with shape: `(batch, channels, depth, rows, cols)` if
data_format='channels_first' or 5D tensor with shape: `(batch, depth, rows,
cols, channels)` if data_format='channels_last'.

#### Output shape:

5D tensor with shape: `(batch, filters, new_depth, new_rows, new_cols)` if
data_format='channels_first' or 5D tensor with shape: `(batch, new_depth,
new_rows, new_cols, filters)` if data_format='channels_last'. `depth` and
`rows` and `cols` values might have changed due to padding.

#### References:

  * [A guide to convolution arithmetic for deep learning](https://arxiv.org/abs/1603.07285v1)
  * [Deconvolutional Networks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L984-L1026)

    
    
    __init__(
        filters,
        kernel_size,
        strides=(1, 1, 1),
        padding='valid',
        output_padding=None,
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
        **kwargs
    )
    

