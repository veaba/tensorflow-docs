

## Class  `SeparableConv2D` 
Depthwise separable 2D convolution.

Inherits From: [ `SeparableConv2D` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/SeparableConv2D), [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

This layer performs a depthwise convolution that acts separately onchannels, followed by a pointwise convolution that mixes channels.If  `use_bias`  is True and a bias initializer is provided,it adds a bias vector to the output.It then optionally applies an activation function to produce the final output.

#### Arguments:
- **`filters`** : Integer, the dimensionality of the output space (i.e. the numberof filters in the convolution).
- **`kernel_size`** : A tuple or list of 2 integers specifying the spatialdimensions of the filters. Can be a single integer to specify the samevalue for all spatial dimensions.
- **`strides`** : A tuple or list of 2 positive integers specifying the stridesof the convolution. Can be a single integer to specify the same value forall spatial dimensions.Specifying any  `stride`  value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : One of  `"valid"`  or  `"same"`  (case-insensitive).
- **`data_format`** : A string, one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first`  corresponds toinputs with shape  `(batch, channels, height, width)` .


- **`dilation_rate`** : An integer or tuple/list of 2 integers, specifyingthe dilation rate to use for dilated convolution.Can be a single integer to specify the same value forall spatial dimensions.Currently, specifying any  `dilation_rate`  value != 1 isincompatible with specifying any stride value != 1.


- **`depth_multiplier`** : The number of depthwise convolution output channels foreach input channel. The total number of depthwise convolution outputchannels will be equal to  `num_filters_in * depth_multiplier` .


- **`activation`** : Activation function. Set it to None to maintain alinear activation.


- **`use_bias`** : Boolean, whether the layer uses a bias.


- **`depthwise_initializer`** : An initializer for the depthwise convolution kernel.


- **`pointwise_initializer`** : An initializer for the pointwise convolution kernel.


- **`bias_initializer`** : An initializer for the bias vector. If None, the defaultinitializer will be used.


- **`depthwise_regularizer`** : Optional regularizer for the depthwiseconvolution kernel.


- **`pointwise_regularizer`** : Optional regularizer for the pointwiseconvolution kernel.


- **`bias_regularizer`** : Optional regularizer for the bias vector.


- **`activity_regularizer`** : Optional regularizer function for the output.


- **`depthwise_constraint`** : Optional projection function to be applied to thedepthwise kernel after being updated by an  `Optimizer`  (e.g. used fornorm constraints or value constraints for layer weights). The functionmust take as input the unprojected variable and must return theprojected variable (which must have the same shape). Constraints arenot safe to use when doing asynchronous distributed training.


- **`pointwise_constraint`** : Optional projection function to be applied to thepointwise kernel after being updated by an  `Optimizer` .


- **`bias_constraint`** : Optional projection function to be applied to thebias after being updated by an  `Optimizer` .


- **`trainable`** : Boolean, if  `True`  also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).


- **`name`** : A string, the name of the layer.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/convolutional.py#L807-L851)

```
 __init__(
    filters,
    kernel_size,
    strides=(1, 1),
    padding='valid',
    data_format='channels_last',
    dilation_rate=(1, 1),
    depth_multiplier=1,
    activation=None,
    use_bias=True,
    depthwise_initializer=None,
    pointwise_initializer=None,
    bias_initializer=tf.zeros_initializer(),
    depthwise_regularizer=None,
    pointwise_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    depthwise_constraint=None,
    pointwise_constraint=None,
    bias_constraint=None,
    trainable=True,
    name=None,
    **kwargs
)
 
```

## Properties


###  `graph` 
DEPRECATED FUNCTION


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `scope_name` 
