Functional interface for transposed 3D convolution layer. (deprecated)

```
 tf.compat.v1.layers.conv3d_transpose(
    inputs,
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
    reuse=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.keras.layers.Conv3DTranspose` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv3DTranspose) instead.


#### Arguments:
- **`inputs`** : Input tensor.
- **`filters`** : Integer, the dimensionality of the output space (i.e. the numberof filters in the convolution).
- **`kernel_size`** : A tuple or list of 3 positive integers specifying the spatialdimensions of the filters. Can be a single integer to specify the samevalue for all spatial dimensions.
- **`strides`** : A tuple or list of 3 positive integers specifying the stridesof the convolution. Can be a single integer to specify the same value forall spatial dimensions.
- **`padding`** : one of  `"valid"`  or  `"same"`  (case-insensitive).
- **`data_format`** : A string, one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, depth, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, depth, height, width)` .
- **`activation`** : Activation function. Set it to None to maintain alinear activation.
- **`use_bias`** : Boolean, whether the layer uses a bias.
- **`kernel_initializer`** : An initializer for the convolution kernel.
- **`bias_initializer`** : An initializer for the bias vector. If None, the defaultinitializer will be used.
- **`kernel_regularizer`** : Optional regularizer for the convolution kernel.
- **`bias_regularizer`** : Optional regularizer for the bias vector.
- **`activity_regularizer`** : Optional regularizer function for the output.
- **`kernel_constraint`** : Optional projection function to be applied to thekernel after being updated by an  `Optimizer`  (e.g. used to implementnorm constraints or value constraints for layer weights). The functionmust take as input the unprojected variable and must return theprojected variable (which must have the same shape). Constraints arenot safe to use when doing asynchronous distributed training.
- **`bias_constraint`** : Optional projection function to be applied to thebias after being updated by an  `Optimizer` .
- **`trainable`** : Boolean, if  `True`  also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
- **`name`** : A string, the name of the layer.
- **`reuse`** : Boolean, whether to reuse the weights of a previous layerby the same name.


#### Returns:
Output tensor.

#### Raises:
- **`ValueError`** : if eager execution is enabled.
