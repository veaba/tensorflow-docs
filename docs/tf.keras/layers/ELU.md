

## Class  `ELU` 
Exponential Linear Unit.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**Aliases** : [ `tf.compat.v1.keras.layers.ELU` ](/api_docs/python/tf/keras/layers/ELU), [ `tf.compat.v2.keras.layers.ELU` ](/api_docs/python/tf/keras/layers/ELU)

#### It follows:
 `f(x) =  alpha * (exp(x) - 1.) for x < 0` , `f(x) = x for x >= 0` .

#### Input shape:
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### Output shape:
Same shape as the input.

#### Arguments:
- **`alpha`** : Scale for the negative factor.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L181-L184)

```
 __init__(
    alpha=1.0,
    **kwargs
)
 
```

