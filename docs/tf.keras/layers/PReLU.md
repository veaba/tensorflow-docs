

## Class  `PReLU` 
Parametric Rectified Linear Unit.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**Aliases** : [ `tf.compat.v1.keras.layers.PReLU` ](/api_docs/python/tf/keras/layers/PReLU), [ `tf.compat.v2.keras.layers.PReLU` ](/api_docs/python/tf/keras/layers/PReLU)

#### It follows:
 `f(x) = alpha * x for x < 0` , `f(x) = x for x >= 0` ,where  `alpha`  is a learned array with the same shape as x.

#### Input shape:
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### Output shape:
Same shape as the input.

#### Arguments:
- **`alpha_initializer`** : Initializer function for the weights.
- **`alpha_regularizer`** : Regularizer for the weights.
- **`alpha_constraint`** : Constraint for the weights.
- **`shared_axes`** : The axes along which to share learnableparameters for the activation function.For example, if the incoming feature mapsare from a 2D convolutionwith output shape  `(batch, height, width, channels)` ,and you wish to share parameters across spaceso that each filter only has one set of parameters,set  `shared_axes=[1, 2]` .


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L102-L118)

```
 __init__(
    alpha_initializer='zeros',
    alpha_regularizer=None,
    alpha_constraint=None,
    shared_axes=None,
    **kwargs
)
 
```

