

## Class  `DepthwiseConv2D` 
可分离二维卷积。

Inherits From: [ `Conv2D` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv2D)

**别名** : [ `tf.compat.v1.keras.layers.DepthwiseConv2D` ](/api_docs/python/tf/keras/layers/DepthwiseConv2D), [ `tf.compat.v2.keras.layers.DepthwiseConv2D` ](/api_docs/python/tf/keras/layers/DepthwiseConv2D)

Depthwise Separable convolutions consists in performingjust the first step in a depthwise spatial convolution(which acts on each input channel separately).The  `depth_multiplier`  argument controls how manyoutput channels are generated per input channel in the depthwise step.

#### 参数：
- **`kernel_size`** : An integer or tuple/list of 2 integers, specifying theheight and width of the 2D convolution window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 2 integers,specifying the strides of the convolution along the height and width.Can be a single integer to specify the same value forall spatial dimensions.Specifying any stride value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : one of  `'valid'`  or  `'same'`  (case-insensitive).
- **`depth_multiplier`** : The number of depthwise convolution output channelsfor each input channel.The total number of depthwise convolution outputchannels will be equal to  `filters_in * depth_multiplier` .
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be 'channels_last'.
- **`activation`** : Activation function to use.If you don't specify anything, no activation is applied(ie. 'linear' activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`depthwise_initializer`** : Initializer for the depthwise kernel matrix.
- **`bias_initializer`** : Initializer for the bias vector.
- **`depthwise_regularizer`** : Regularizer function applied tothe depthwise kernel matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its 'activation').
- **`depthwise_constraint`** : Constraint function applied tothe depthwise kernel matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.


#### 输入形状：
4D tensor with shape: `[batch, channels, rows, cols]`  if data_format='channels_first'or 4D tensor with shape: `[batch, rows, cols, channels]`  if data_format='channels_last'.

#### 输出形状：
4D tensor with shape: `[batch, filters, new_rows, new_cols]`  if data_format='channels_first'or 4D tensor with shape: `[batch, new_rows, new_cols, filters]`  if data_format='channels_last'. `rows`  and  `cols`  values might have changed due to padding.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1750-L1782)

```
 __init__(
    kernel_size,
    strides=(1, 1),
    padding='valid',
    depth_multiplier=1,
    data_format=None,
    activation=None,
    use_bias=True,
    depthwise_initializer='glorot_uniform',
    bias_initializer='zeros',
    depthwise_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    depthwise_constraint=None,
    bias_constraint=None,
    **kwargs
)
 
```

