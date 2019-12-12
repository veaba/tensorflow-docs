

## Class  `Conv2DTranspose` 
转置卷积层（有时称为反卷积）。

Inherits From: [ `Conv2D` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Conv2D)

**别名** : [ `tf.compat.v1.keras.layers.Conv2DTranspose` ](/api_docs/python/tf/keras/layers/Conv2DTranspose), [ `tf.compat.v1.keras.layers.Convolution2DTranspose` ](/api_docs/python/tf/keras/layers/Conv2DTranspose), [ `tf.compat.v2.keras.layers.Conv2DTranspose` ](/api_docs/python/tf/keras/layers/Conv2DTranspose), [ `tf.compat.v2.keras.layers.Convolution2DTranspose` ](/api_docs/python/tf/keras/layers/Conv2DTranspose), [ `tf.keras.layers.Convolution2DTranspose` ](/api_docs/python/tf/keras/layers/Conv2DTranspose)

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)
The need for transposed convolutions generally arisesfrom the desire to use a transformation going in the opposite directionof a normal convolution, i.e., from something that has the shape of theoutput of some convolution to something that has the shape of its inputwhile maintaining a connectivity pattern that is compatible withsaid convolution.

When using this layer as the first layer in a model,provide the keyword argument  `input_shape` (tuple of integers, does not include the sample axis),e.g.  `input_shape=(128, 128, 3)`  for 128x128 RGB picturesin  `data_format="channels_last"` .

#### 参数：
- **`filters`** : Integer, the dimensionality of the output space(i.e. the number of output filters in the convolution).
- **`kernel_size`** : An integer or tuple/list of 2 integers, specifying theheight and width of the 2D convolution window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 2 integers,specifying the strides of the convolution along the height and width.Can be a single integer to specify the same value forall spatial dimensions.Specifying any stride value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : one of  `"valid"`  or  `"same"`  (case-insensitive).
- **`output_padding`** : An integer or tuple/list of 2 integers,specifying the amount of padding along the height and widthof the output tensor.Can be a single integer to specify the same value for allspatial dimensions.The amount of output padding along a given dimension must belower than the stride along that same dimension.If set to  `None`  (default), the output shape is inferred.
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


#### 输入形状：
4D tensor with shape: `(batch, channels, rows, cols)`  if data_format='channels_first'or 4D tensor with shape: `(batch, rows, cols, channels)`  if data_format='channels_last'.

#### 输出形状：
4D tensor with shape: `(batch, filters, new_rows, new_cols)`  if data_format='channels_first'or 4D tensor with shape: `(batch, new_rows, new_cols, filters)`  if data_format='channels_last'. `rows`  and  `cols`  values might have changed due to padding.

#### 参考文献：
- [A guide to convolution arithmetic for deeplearning](https://arxiv.org/abs/1603.07285v1)
- [DeconvolutionalNetworks](https://www.matthewzeiler.com/mattzeiler/deconvolutionalnetworks.pdf)


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L709-L753)

```
 __init__(
    filters,
    kernel_size,
    strides=(1, 1),
    padding='valid',
    output_padding=None,
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

