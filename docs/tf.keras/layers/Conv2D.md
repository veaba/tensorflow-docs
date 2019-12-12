

## Class  `Conv2D` 
2D convolution layer (e.g. spatial convolution over images).

**Aliases** : [ `tf.compat.v1.keras.layers.Conv2D` ](/api_docs/python/tf/keras/layers/Conv2D), [ `tf.compat.v1.keras.layers.Convolution2D` ](/api_docs/python/tf/keras/layers/Conv2D), [ `tf.compat.v2.keras.layers.Conv2D` ](/api_docs/python/tf/keras/layers/Conv2D), [ `tf.compat.v2.keras.layers.Convolution2D` ](/api_docs/python/tf/keras/layers/Conv2D), [ `tf.keras.layers.Convolution2D` ](/api_docs/python/tf/keras/layers/Conv2D)

### Used in the guide:
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)


### Used in the tutorials:
- [Custom layers](https://tensorflow.google.cn/tutorials/customization/custom_layers)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Convolutional Neural Network (CNN)](https://tensorflow.google.cn/tutorials/images/cnn)
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
This layer creates a convolution kernel that is convolvedwith the layer input to produce a tensor ofoutputs. If  `use_bias`  is True,a bias vector is created and added to the outputs. Finally, if `activation`  is not  `None` , it is applied to the outputs as well.

When using this layer as the first layer in a model,provide the keyword argument  `input_shape` (tuple of integers, does not include the sample axis),e.g.  `input_shape=(128, 128, 3)`  for 128x128 RGB picturesin  `data_format="channels_last"` .

#### Arguments:
- **`filters`** : Integer, the dimensionality of the output space(i.e. the number of output filters in the convolution).
- **`kernel_size`** : An integer or tuple/list of 2 integers, specifying theheight and width of the 2D convolution window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 2 integers,specifying the strides of the convolution along the height and width.Can be a single integer to specify the same value forall spatial dimensions.Specifying any stride value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : one of  `"valid"`  or  `"same"`  (case-insensitive).
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".
- **`dilation_rate`** : an integer or tuple/list of 2 integers, specifyingthe dilation rate to use for dilated convolution.Can be a single integer to specify the same value forall spatial dimensions.Currently, specifying any  `dilation_rate`  value != 1 isincompatible with specifying any stride value != 1.
- **`activation`** : Activation function to use.If you don't specify anything, no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation")..
- **`kernel_constraint`** : Constraint function applied to the kernel matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.


#### Input shape:
4D tensor with shape: `(samples, channels, rows, cols)`  if data_format='channels_first'or 4D tensor with shape: `(samples, rows, cols, channels)`  if data_format='channels_last'.

#### Output shape:
4D tensor with shape: `(samples, filters, new_rows, new_cols)`  if data_format='channels_first'or 4D tensor with shape: `(samples, new_rows, new_cols, filters)`  if data_format='channels_last'. `rows`  and  `cols`  values might have changed due to padding.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L464-L498)

```
 __init__(
    filters,
    kernel_size,
    strides=(1, 1),
    padding='valid',
    data_format=None,
    dilation_rate=(1, 1),
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

