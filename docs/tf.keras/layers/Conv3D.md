

## Class  `Conv3D` 
3D convolution layer (e.g. spatial convolution over volumes).

**别名** : [ `tf.compat.v1.keras.layers.Conv3D` ](/api_docs/python/tf/keras/layers/Conv3D), [ `tf.compat.v1.keras.layers.Convolution3D` ](/api_docs/python/tf/keras/layers/Conv3D), [ `tf.compat.v2.keras.layers.Conv3D` ](/api_docs/python/tf/keras/layers/Conv3D), [ `tf.compat.v2.keras.layers.Convolution3D` ](/api_docs/python/tf/keras/layers/Conv3D), [ `tf.keras.layers.Convolution3D` ](/api_docs/python/tf/keras/layers/Conv3D)

This layer creates a convolution kernel that is convolvedwith the layer input to produce a tensor ofoutputs. If  `use_bias`  is True,a bias vector is created and added to the outputs. Finally, if `activation`  is not  `None` , it is applied to the outputs as well.

When using this layer as the first layer in a model,provide the keyword argument  `input_shape` (tuple of integers, does not include the sample axis),e.g.  `input_shape=(128, 128, 128, 1)`  for 128x128x128 volumeswith a single channel,in  `data_format="channels_last"` .

#### 参数：
- **`filters`** : Integer, the dimensionality of the output space(i.e. the number of output filters in the convolution).
- **`kernel_size`** : An integer or tuple/list of 3 integers, specifying thedepth, height and width of the 3D convolution window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 3 integers,specifying the strides of the convolution along each spatialdimension.Can be a single integer to specify the same value forall spatial dimensions.Specifying any stride value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : one of  `"valid"`  or  `"same"`  (case-insensitive).
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, spatial_dim1, spatial_dim2, spatial_dim3, channels)` while  `channels_first`  corresponds to inputs with shape `(batch, channels, spatial_dim1, spatial_dim2, spatial_dim3)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".
- **`dilation_rate`** : an integer or tuple/list of 3 integers, specifyingthe dilation rate to use for dilated convolution.Can be a single integer to specify the same value forall spatial dimensions.Currently, specifying any  `dilation_rate`  value != 1 isincompatible with specifying any stride value != 1.
- **`activation`** : Activation function to use.If you don't specify anything, no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation")..
- **`kernel_constraint`** : Constraint function applied to the kernel matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.


#### 输入形状：
5D tensor with shape: `(samples, channels, conv_dim1, conv_dim2, conv_dim3)`  if  data_format='channels_first'or 5D tensor with shape: `(samples, conv_dim1, conv_dim2, conv_dim3, channels)`  if  data_format='channels_last'.

#### 输出形状：
5D tensor with shape: `(samples, filters, new_conv_dim1, new_conv_dim2, new_conv_dim3)`  if  data_format='channels_first'or 5D tensor with shape: `(samples, new_conv_dim1, new_conv_dim2, new_conv_dim3, filters)`  if  data_format='channels_last'. `new_conv_dim1` ,  `new_conv_dim2`  and  `new_conv_dim3`  values might have  changed due to padding.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L582-L616)

```
 __init__(
    filters,
    kernel_size,
    strides=(1, 1, 1),
    padding='valid',
    data_format=None,
    dilation_rate=(1, 1, 1),
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
 
```

