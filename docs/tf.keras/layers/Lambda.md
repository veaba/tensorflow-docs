## Class Lambda
Wraps arbitrary expressions as a `Layer` object.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.Lambda`
- Class `tf.compat.v2.keras.layers.Lambda`
The `Lambda` layer exists so that arbitrary TensorFlow functions can be used when constructing `Sequential` and Functional API models. `Lambda` layers are best suited for simple operations or quick experimentation. For more advanced use cases, subclassing `keras.layers.Layer` is preferred. One reason for this is that when saving a Model, `Lambda` layers are saved by serializing the Python bytecode, whereas subclassed Layers are saved via overriding their `get_config` method and are thus more portable. Models that rely on subclassed Layers are also often easier to visualize and reason about.
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
Variables can be created within a `Lambda` layer. Like with other layers, these variables will be created only once and reused if the `Lambda` layer is called on new inputs. If creating more than one variable in a given `Lambda` instance, be sure to use a different name for each variable. Note that calling sublayers from within a `Lambda` is not supported.
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
Note that creating two instances of `Lambda` using the same function will not share Variables between the two instances. Each instance of `Lambda` will create and manage its own weights.
#### Arguments:
- `function`: The `function` to be evaluated. Takes input tensor as first argument.
## __init__
View source

```
 __init__(
    function,
    output_shape=None,
    mask=None,
    arguments=None,
    **kwargs
)
```
