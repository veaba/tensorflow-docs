

## Class  `Conv1D` 
1D convolution layer (e.g. temporal convolution).



### Aliases:

- Class [ `tf.compat.v1.keras.layers.Conv1D` ](/api_docs/python/tf/keras/layers/Conv1D)

- Class [ `tf.compat.v1.keras.layers.Convolution1D` ](/api_docs/python/tf/keras/layers/Conv1D)

- Class [ `tf.compat.v2.keras.layers.Conv1D` ](/api_docs/python/tf/keras/layers/Conv1D)

- Class [ `tf.compat.v2.keras.layers.Convolution1D` ](/api_docs/python/tf/keras/layers/Conv1D)

- Class [ `tf.keras.layers.Convolution1D` ](/api_docs/python/tf/keras/layers/Conv1D)



### Used in the guide:

- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

This layer creates a convolution kernel that is convolved
with the layer input over a single spatial (or temporal) dimension
to produce a tensor of outputs.
If  `use_bias`  is True, a bias vector is created and added to the outputs.
Finally, if  `activation`  is not  `None` ,
it is applied to the outputs as well.

When using this layer as the first layer in a model,
provide an  `input_shape`  argument
(tuple of integers or  `None` , e.g.
 `(10, 128)`  for sequences of 10 vectors of 128-dimensional vectors,
or  `(None, 128)`  for variable-length sequences of 128-dimensional vectors.



#### Arguments:

- **`filters`** : Integer, the dimensionality of the output space
(i.e. the number of output filters in the convolution).

- **`kernel_size`** : An integer or tuple/list of a single integer,
specifying the length of the 1D convolution window.

- **`strides`** : An integer or tuple/list of a single integer,
specifying the stride length of the convolution.
Specifying any stride value != 1 is incompatible with specifying
any  `dilation_rate`  value != 1.

- **`padding`** : One of  `"valid"` ,  `"causal"`  or  `"same"`  (case-insensitive).
 `"causal"`  results in causal (dilated) convolutions, e.g. output[t]
does not depend on input[t+1:]. Useful when modeling temporal data
where the model should not violate the temporal order.
See <a href="https://arxiv.org/abs/1609.03499">WaveNet: A Generative Model for Raw Audio, section
2.1</a>.

- **`data_format`** : A string,
one of  `channels_last`  (default) or  `channels_first` .

- **`dilation_rate`** : an integer or tuple/list of a single integer, specifying
the dilation rate to use for dilated convolution.
Currently, specifying any  `dilation_rate`  value != 1 is
incompatible with specifying any  `strides`  value != 1.

- **`activation`** : Activation function to use.
If you don't specify anything, no activation is applied
(ie. "linear" activation:  `a(x) = x` ).

- **`use_bias`** : Boolean, whether the layer uses a bias vector.

- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix.

- **`bias_initializer`** : Initializer for the bias vector.

- **`kernel_regularizer`** : Regularizer function applied to
the  `kernel`  weights matrix.

- **`bias_regularizer`** : Regularizer function applied to the bias vector.

- **`activity_regularizer`** : Regularizer function applied to
the output of the layer (its "activation")..

- **`kernel_constraint`** : Constraint function applied to the kernel matrix.

- **`bias_constraint`** : Constraint function applied to the bias vector.



#### Examples:


```
 # Small convolutional model for 128-length vectors with 6 timesteps
# model.input_shape == (None, 6, 128)

model = Sequential()
model.add(Conv1D(32, 3, 
          activation='relu', 
          input_shape=(6, 128)))

# now: model.output_shape == (None, 4, 32)
 
```



#### Input shape:
3D tensor with shape:  `(batch_size, steps, input_dim)` 



#### Output shape:
3D tensor with shape:  `(batch_size, new_steps, filters)` 
   `steps`  value might have changed due to padding or strides.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L348-L382)



```
 __init__(
    filters,
    kernel_size,
    strides=1,
    padding='valid',
    data_format='channels_last',
    dilation_rate=1,
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

