[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Wrapper) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/wrappers.py#L39-L86)  
  
  
## Class `Wrapper`

Abstract wrapper base class.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Wrapper`](/api_docs/python/tf/keras/layers/Wrapper)
  * Class [`tf.compat.v2.keras.layers.Wrapper`](/api_docs/python/tf/keras/layers/Wrapper)

Wrappers take another layer and augment it in various ways. Do not use this
class as a layer, it is only an abstract base class. Two usable wrappers are
the `TimeDistributed` and `Bidirectional` wrappers.

#### Arguments:

  * **`layer`** : The layer to be wrapped.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/wrappers.py#L50-L57)

    
    
    __init__(
        layer,
        **kwargs
    )
    

