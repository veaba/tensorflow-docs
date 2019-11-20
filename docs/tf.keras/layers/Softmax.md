[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Softmax) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L239-L269)  
---|---  
  
## Class `Softmax`

Softmax activation function.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Softmax`](/api_docs/python/tf/keras/layers/Softmax)
  * Class [`tf.compat.v2.keras.layers.Softmax`](/api_docs/python/tf/keras/layers/Softmax)

#### Input shape:

Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not
include the samples axis) when using this layer as the first layer in a model.

#### Output shape:

Same shape as the input.

#### Arguments:

  * **`axis`** : Integer, axis along which the softmax normalization is applied.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L254-L257)

    
    
    __init__(
        axis=-1,
        **kwargs
    )
    

