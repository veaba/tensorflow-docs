

## Class  `AlphaDropout` 
Applies Alpha Dropout to the input.

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)



### Aliases:

- Class [ `tf.compat.v1.keras.layers.AlphaDropout` ](/api_docs/python/tf/keras/layers/AlphaDropout)

- Class [ `tf.compat.v2.keras.layers.AlphaDropout` ](/api_docs/python/tf/keras/layers/AlphaDropout)

Alpha Dropout is a  `Dropout`  that keeps mean and variance of inputs
to their original values, in order to ensure the self-normalizing property
even after this dropout.
Alpha Dropout fits well to Scaled Exponential Linear Units
by randomly setting activations to the negative saturation value.



#### Arguments:

- **`rate`** : float, drop probability (as with  `Dropout` ).
The multiplicative noise will have
standard deviation  `sqrt(rate / (1 - rate))` .

- **`seed`** : A Python integer to use as random seed.



#### Call arguments:

- **`inputs`** : Input tensor (of any rank).

- **`training`** : Python boolean indicating whether the layer should behave in
training mode (adding dropout) or in inference mode (doing nothing).



#### Input shape:
Arbitrary. Use the keyword argument  `input_shape` 
(tuple of integers, does not include the samples axis)
when using this layer as the first layer in a model.



#### Output shape:
Same shape as input.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/noise.py#L163-L168)



```
 __init__(
    rate,
    noise_shape=None,
    seed=None,
    **kwargs
)
 
```

