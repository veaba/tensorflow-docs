

## Class  `Dense` 
Just your regular densely-connected NN layer.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**Aliases** : [ `tf.compat.v1.keras.layers.Dense` ](/api_docs/python/tf/keras/layers/Dense), [ `tf.compat.v2.keras.layers.Dense` ](/api_docs/python/tf/keras/layers/Dense)

### Used in the guide:
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)


### Used in the tutorials:
- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)
- [Load a pandas.DataFrame](https://tensorflow.google.cn/tutorials/load_data/pandas_dataframe)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
 `Dense`  implements the operation: `output = activation(dot(input, kernel) + bias)` where  `activation`  is the element-wise activation functionpassed as the  `activation`  argument,  `kernel`  is a weights matrixcreated by the layer, and  `bias`  is a bias vector created by the layer(only applicable if  `use_bias`  is  `True` ).


**Note:**  If the input to the layer has a rank greater than 2, thenit is flattened prior to the initial dot product with  `kernel` .


#### Example:


```
 # as first layer in a sequential model:
model = Sequential()
model.add(Dense(32, input_shape=(16,)))
# now the model will take as input arrays of shape (*, 16)
# and output arrays of shape (*, 32)

# after the first layer, you don't need to specify
# the size of the input anymore:
model.add(Dense(32))
 
```

#### Arguments:
- **`units`** : Positive integer, dimensionality of the output space.
- **`activation`** : Activation function to use.If you don't specify anything, no activation is applied(ie. "linear" activation:  `a(x) = x` ).
- **`use_bias`** : Boolean, whether the layer uses a bias vector.
- **`kernel_initializer`** : Initializer for the  `kernel`  weights matrix.
- **`bias_initializer`** : Initializer for the bias vector.
- **`kernel_regularizer`** : Regularizer function applied tothe  `kernel`  weights matrix.
- **`bias_regularizer`** : Regularizer function applied to the bias vector.
- **`activity_regularizer`** : Regularizer function applied tothe output of the layer (its "activation")..
- **`kernel_constraint`** : Constraint function applied tothe  `kernel`  weights matrix.
- **`bias_constraint`** : Constraint function applied to the bias vector.


#### Input shape:
N-D tensor with shape:  `(batch_size, ..., input_dim)` .The most common situation would bea 2D input with shape  `(batch_size, input_dim)` .

#### Output shape:
N-D tensor with shape:  `(batch_size, ..., units)` .For instance, for a 2D input with shape  `(batch_size, input_dim)` ,the output would have shape  `(batch_size, units)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L978-L1006)

```
 __init__(
    units,
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

