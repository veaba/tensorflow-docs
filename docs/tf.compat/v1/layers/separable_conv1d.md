Functional interface for the depthwise separable 1D convolution layer. (deprecated)

```
 tf.compat.v1.layers.separable_conv1d(    inputs,    filters,    kernel_size,    strides=1,    padding='valid',    data_format='channels_last',    dilation_rate=1,    depth_multiplier=1,    activation=None,    use_bias=True,    depthwise_initializer=None,    pointwise_initializer=None,    bias_initializer=tf.zeros_initializer(),    depthwise_regularizer=None,    pointwise_regularizer=None,    bias_regularizer=None,    activity_regularizer=None,    depthwise_constraint=None,    pointwise_constraint=None,    bias_constraint=None,    trainable=True,    name=None,    reuse=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.keras.layers.SeparableConv1D` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/SeparableConv1D) instead.
This layer performs a depthwise convolution that acts separately onchannels, followed by a pointwise convolution that mixes channels.If  `use_bias`  is True and a bias initializer is provided,it adds a bias vector to the output.It then optionally applies an activation function to produce the final output.

#### 参数：
- **`inputs`** : Input tensor.
- **`filters`** : Integer, the dimensionality of the output space (i.e. the numberof filters in the convolution).
- **`kernel_size`** : A single integer specifying the spatialdimensions of the filters.
- **`strides`** : A single integer specifying the stridesof the convolution.Specifying any  `stride`  value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : One of  `"valid"`  or  `"same"`  (case-insensitive).
- **`data_format`** : A string, one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, length, channels)`  while  `channels_first`  corresponds toinputs with shape  `(batch, channels, length)` .
- **`dilation_rate`** : A single integer, specifyingthe dilation rate to use for dilated convolution.Currently, specifying any  `dilation_rate`  value != 1 isincompatible with specifying any stride value != 1.
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
- **`reuse`** : Boolean, whether to reuse the weights of a previous layerby the same name.


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
