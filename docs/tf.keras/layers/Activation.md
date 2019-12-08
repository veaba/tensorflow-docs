

## Class  `Activation` 
Applies an activation function to an output.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)



### Aliases:

- Class [ `tf.compat.v1.keras.layers.Activation` ](/api_docs/python/tf/keras/layers/Activation)

- Class [ `tf.compat.v2.keras.layers.Activation` ](/api_docs/python/tf/keras/layers/Activation)



### Used in the guide:

- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)



#### Arguments:

- **`activation`** : Activation function, such as [ `tf.nn.relu` ](https://tensorflow.google.cn/api_docs/python/tf/nn/relu), or string name of
built-in activation function, such as "relu".



#### Input shape:
Arbitrary. Use the keyword argument  `input_shape` 
(tuple of integers, does not include the samples axis)
when using this layer as the first layer in a model.



#### Output shape:
Same shape as input.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L358-L361)



```
 __init__(
    activation,
    **kwargs
)
 
```

