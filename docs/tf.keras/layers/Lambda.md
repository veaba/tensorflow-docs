

## Class  `Lambda` 
Wraps arbitrary expressions as a  `Layer`  object.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Lambda` ](/api_docs/python/tf/keras/layers/Lambda), [ `tf.compat.v2.keras.layers.Lambda` ](/api_docs/python/tf/keras/layers/Lambda)

The  `Lambda`  layer exists so that arbitrary TensorFlow functionscan be used when constructing  `Sequential`  and Functional APImodels.  `Lambda`  layers are best suited for simple operations orquick experimentation. For more advanced use cases, subclassing[ `keras.layers.Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer) is preferred. One reason for this is thatwhen saving a Model,  `Lambda`  layers are saved by serializing thePython bytecode, whereas subclassed Layers are saved via overridingtheir  `get_config`  method and are thus more portable. Models that relyon subclassed Layers are also often easier to visualize and reasonabout.

#### 示例：


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

Variables can be created within a  `Lambda`  layer. Like withother layers, these variables will be created only once and reusedif the  `Lambda`  layer is called on new inputs. If creating morethan one variable in a given  `Lambda`  instance, be sure to usea different name for each variable. Note that calling sublayersfrom within a  `Lambda`  is not supported.

变量创建示例：

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

Note that creating two instances of  `Lambda`  using the same functionwill *not* share Variables between the two instances. Each instance of `Lambda`  will create and manage its own weights.

#### 参数：
- **`function`** : The function to be evaluated. Takes input tensor as firstargument.
- **`output_shape`** : Expected output shape from function. This argument can beinferred if not explicitly provided. Can be a tuple or function. If atuple, it only specifies the first dimension onward;sample dimension is assumed either the same as the input:  `output_shape =(input_shape[0], ) + output_shape`  or, the input is  `None`  andthe sample dimension is also  `None` :  `output_shape = (None, ) +output_shape`  If a function, it specifies the entire shape as a functionof theinput shape:  `output_shape = f(input_shape)` 
- **`mask`** : Either None (indicating no masking) or a callable with the samesignature as the  `compute_mask`  layer method, or a tensor that will bereturned as output mask regardless what the input is.
- **`arguments`** : Optional dictionary of keyword arguments to be passed to thefunction.Input shape: Arbitrary. Use the keyword argument input_shape (tuple ofintegers, does not include the samples axis) when using this layer as thefirst layer in a model.Output shape: Specified by  `output_shape`  argument


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

