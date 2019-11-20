[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/ELU) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L162-L196)  
---|---  
  
## Class `ELU`

Exponential Linear Unit.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.ELU`](/api_docs/python/tf/keras/layers/ELU)
  * Class [`tf.compat.v2.keras.layers.ELU`](/api_docs/python/tf/keras/layers/ELU)

#### It follows:

`f(x) = alpha * (exp(x) - 1.) for x < 0`, `f(x) = x for x >= 0`.

#### Input shape:

Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not
include the samples axis) when using this layer as the first layer in a model.

#### Output shape:

Same shape as the input.

#### Arguments:

  * **`alpha`** : Scale for the negative factor.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L181-L184)

    
    
    __init__(
        alpha=1.0,
        **kwargs
    )
    

