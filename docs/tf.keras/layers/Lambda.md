

## Class  `Lambda` 
Wraps arbitrary expressions as a  `Layer`  object.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)



### Aliases:

- Class [ `tf.compat.v1.keras.layers.Lambda` ](/api_docs/python/tf/keras/layers/Lambda)

- Class [ `tf.compat.v2.keras.layers.Lambda` ](/api_docs/python/tf/keras/layers/Lambda)

The  `Lambda`  layer exists so that arbitrary TensorFlow functions
can be used when constructing  `Sequential`  and Functional API
models.  `Lambda`  layers are best suited for simple operations or
quick experimentation. For more advanced use cases, subclassing
[ `keras.layers.Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer) is preferred. One reason for this is that
when saving a Model,  `Lambda`  layers are saved by serializing the
Python bytecode, whereas subclassed Layers are saved via overriding
their  `get_config`  method and are thus more portable. Models that rely
on subclassed Layers are also often easier to visualize and reason
about.



#### Examples:


```
 # add a x -> x^2 layer
model.add(Lambda(lambda x: x ** 2))
 
```



```
 # add a layer that returns the concatenation
# of the positive part of the input and
# the opposite of the negative part

def antirectifier(x):
    x -= K.mean(x, axis=1, keepdims=True)
    x = K.l2_normalize(x, axis=1)
    pos = K.relu(x)
    neg = K.relu(-x)
    return K.concatenate([pos, neg], axis=1)

model.add(Lambda(antirectifier))
 
```

Variables can be created within a  `Lambda`  layer. Like with
other layers, these variables will be created only once and reused
if the  `Lambda`  layer is called on new inputs. If creating more
than one variable in a given  `Lambda`  instance, be sure to use
a different name for each variable. Note that calling sublayers
from within a  `Lambda`  is not supported.

Example of variable creation:



```
 def linear_transform(x):
  v1 = tf.Variable(1., name='multiplier')
  v2 = tf.Variable(0., name='bias')
  return x*v1 + v2

linear_layer = Lambda(linear_transform)
model.add(linear_layer)
model.add(keras.layers.Dense(10, activation='relu'))
model.add(linear_layer)  # Reuses existing Variables
 
```

Note that creating two instances of  `Lambda`  using the same function
will <em>not</em> share Variables between the two instances. Each instance of
 `Lambda`  will create and manage its own weights.



#### Arguments:

- **`function`** : The function to be evaluated. Takes input tensor as first
argument.

- **`output_shape`** : Expected output shape from function. This argument can be
inferred if not explicitly provided. Can be a tuple or function. If a
tuple, it only specifies the first dimension onward;
sample dimension is assumed either the same as the input: <code translate="no" dir="ltr">output_shape =
(input_shape[0], ) + output_shape</code> or, the input is  `None`  and
the sample dimension is also  `None` : <code translate="no" dir="ltr">output_shape = (None, ) +
output_shape</code> If a function, it specifies the entire shape as a function
of the
input shape:  `output_shape = f(input_shape)` 

- **`mask`** : Either None (indicating no masking) or a callable with the same
signature as the  `compute_mask`  layer method, or a tensor that will be
returned as output mask regardless what the input is.

- **`arguments`** : Optional dictionary of keyword arguments to be passed to the
function.
Input shape: Arbitrary. Use the keyword argument input_shape (tuple of
integers, does not include the samples axis) when using this layer as the
first layer in a model.
Output shape: Specified by  `output_shape`  argument



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L741-L757)



```
 __init__(
    function,
    output_shape=None,
    mask=None,
    arguments=None,
    **kwargs
)
 
```

