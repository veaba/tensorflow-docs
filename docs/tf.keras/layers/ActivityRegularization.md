[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/ActivityRegularization)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L1091-L1120)  
---|---  
  
## Class `ActivityRegularization`

Layer that applies an update to the cost function based input activity.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.ActivityRegularization`](/api_docs/python/tf/keras/layers/ActivityRegularization)
  * Class [`tf.compat.v2.keras.layers.ActivityRegularization`](/api_docs/python/tf/keras/layers/ActivityRegularization)

#### Arguments:

  * **`l1`** : L1 regularization factor (positive float).
  * **`l2`** : L2 regularization factor (positive float).

#### Input shape:

Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not
include the samples axis) when using this layer as the first layer in a model.

#### Output shape:

Same shape as input.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L1107-L1112)

    
    
    __init__(
        l1=0.0,
        l2=0.0,
        **kwargs
    )
    

