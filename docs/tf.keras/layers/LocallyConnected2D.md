

## Class  `LocallyConnected2D` 
Locally-connected layer for 2D inputs.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.LocallyConnected2D` ](/api_docs/python/tf/keras/layers/LocallyConnected2D), [ `tf.compat.v2.keras.layers.LocallyConnected2D` ](/api_docs/python/tf/keras/layers/LocallyConnected2D)

The  `LocallyConnected2D`  layer works similarlyto the  `Conv2D`  layer, except that weights are unshared,that is, a different set of filters is applied at eachdifferent patch of the input.

#### 示例：


```
  `:
    model = Sequential()
    model.add(LocallyConnected2D(64, (3, 3), input_shape=(32, 32, 3)))
    # now model.output_shape == (None, 30, 30, 64)
    # notice that this layer will consume (30*30)*(3*3*3*64) + (30*30)*64
    parameters

    # add a 3x3 unshared weights convolution on top, with 32 output filters:
    model.add(LocallyConnected2D(32, (3, 3)))
    # now model.output_shape == (None, 28, 28, 32)
 
```

#### 参数：
- **`filters`** : Integer, the dimensionality of the output space(i.e. the number of output filters in the convolution).
- **`kernel_size`** : An integer or tuple/list of 2 integers, specifying thewidth and height of the 2D convolution window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 2 integers,specifying the strides of the convolution along the width and height.Can be a single integer to specify the same value forall spatial dimensions.
- **`padding`** : Currently only support  `"valid"`  (case-insensitive). `"same"`  will be supported in future.
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".
- **`activation`** : Activation function to use.If you don't specify anything, no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation").
- **`kernel_constraint`** : Constraint function applied to the kernel matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`implementation`** : implementation mode, either  `1` ,  `2` , or  `3` . `1`  loops over input spatial locations to perform the forward pass.It is memory-efficient but performs a lot of (small) ops.

 `2`  stores layer weights in a dense but sparsely-populated 2D matrixand implements the forward pass as a single matrix-multiply. It usesa lot of RAM but performs few (large) ops.

 `3`  stores layer weights in a sparse tensor and implements the forwardpass as a single sparse matrix-multiply.

如何选择：

 `1` : large, dense models, `2` : small models, `3` : large, sparse models,

where "large" stands for large input/output activations(i.e. many  `filters` ,  `input_filters` , large  `np.prod(input_size)` , `np.prod(output_size)` ), and "sparse" stands for few connectionsbetween inputs and outputs, i.e. small ratio`filters * input_filters * np.prod(kernel_size) / (np.prod(input_size)

It is recommended to benchmark each in the setting of interest to pickthe most efficient one (in terms of speed and memory usage). Correctchoice of implementation can lead to dramatic speed improvements (e.g.50X), potentially at the expense of RAM.

Also, only  `padding="valid"`  is supported by  `implementation=1` .


    - np.prod(strides)) `, where inputs to and outputs of the layer areassumed to have shapes` input_size + (input_filters,) `,` output_size + (filters,)` respectively.


#### 输入形状：
4D tensor with shape: `(samples, channels, rows, cols)`  if data_format='channels_first'or 4D tensor with shape: `(samples, rows, cols, channels)`  if data_format='channels_last'.

#### 输出形状：
4D tensor with shape: `(samples, filters, new_rows, new_cols)`  if data_format='channels_first'or 4D tensor with shape: `(samples, new_rows, new_cols, filters)`  if data_format='channels_last'. `rows`  and  `cols`  values might have changed due to padding.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/local.py#L442-L479)

```
 __init__(
    filters,
    kernel_size,
    strides=(1, 1),
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

