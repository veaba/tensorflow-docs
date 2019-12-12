

## Class  `LocallyConnected1D` 
Locally-connected layer for 1D inputs.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.LocallyConnected1D` ](/api_docs/python/tf/keras/layers/LocallyConnected1D), [ `tf.compat.v2.keras.layers.LocallyConnected1D` ](/api_docs/python/tf/keras/layers/LocallyConnected1D)

The  `LocallyConnected1D`  layer works similarly tothe  `Conv1D`  layer, except that weights are unshared,that is, a different set of filters is applied at each different patchof the input.

#### 示例：


```
     # apply a unshared weight convolution 1d of length 3 to a sequence with
    # 10 timesteps, with 64 output filters
    model = Sequential()
    model.add(LocallyConnected1D(64, 3, input_shape=(10, 32)))
    # now model.output_shape == (None, 8, 64)
    # add a new conv1d on top
    model.add(LocallyConnected1D(32, 3))
    # now model.output_shape == (None, 6, 32)
 
```

#### 参数：
- **`filters`** : Integer, the dimensionality of the output space(i.e. the number of output filters in the convolution).
- **`kernel_size`** : An integer or tuple/list of a single integer,specifying the length of the 1D convolution window.
- **`strides`** : An integer or tuple/list of a single integer,specifying the stride length of the convolution.Specifying any stride value != 1 is incompatible with specifyingany  `dilation_rate`  value != 1.
- **`padding`** : Currently only supports  `"valid"`  (case-insensitive). `"same"`  may be supported in the future.
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, length, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, length)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".
- **`activation`** : Activation function to use.If you don't specify anything, no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation")..
- **`kernel_constraint`** : Constraint function applied to the kernel matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.
- **`implementation`** : implementation mode, either  `1` ,  `2` , or  `3` . `1`  loops over input spatial locations to perform the forward pass.It is memory-efficient but performs a lot of (small) ops.

 `2`  stores layer weights in a dense but sparsely-populated 2D matrixand implements the forward pass as a single matrix-multiply. It usesa lot of RAM but performs few (large) ops.

 `3`  stores layer weights in a sparse tensor and implements the forwardpass as a single sparse matrix-multiply.

如何选择：

 `1` : large, dense models, `2` : small models, `3` : large, sparse models,

where "large" stands for large input/output activations(i.e. many  `filters` ,  `input_filters` , large  `input_size` , `output_size` ), and "sparse" stands for few connections between inputsand outputs, i.e. small ratio `filters * input_filters * kernel_size / (input_size * strides)` ,where inputs to and outputs of the layer are assumed to have shapes `(input_size, input_filters)` ,  `(output_size, filters)` respectively.

It is recommended to benchmark each in the setting of interest to pickthe most efficient one (in terms of speed and memory usage). Correctchoice of implementation can lead to dramatic speed improvements (e.g.50X), potentially at the expense of RAM.

Also, only  `padding="valid"`  is supported by  `implementation=1` .


#### 输入形状：
3D tensor with shape:  `(batch_size, steps, input_dim)` 

#### 输出形状：
3D tensor with shape:  `(batch_size, new_steps, filters)`  `steps`  value might have changed due to padding or strides.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/local.py#L131-L168)

```
 __init__(
    filters,
    kernel_size,
    strides=1,
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

