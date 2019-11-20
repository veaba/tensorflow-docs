[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/RepeatVector) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L614-L654)  
---|---  
  
## Class `RepeatVector`

Repeats the input n times.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.RepeatVector`](/api_docs/python/tf/keras/layers/RepeatVector)
  * Class [`tf.compat.v2.keras.layers.RepeatVector`](/api_docs/python/tf/keras/layers/RepeatVector)

#### Example:

    
    
    model = Sequential()
    model.add(Dense(32, input_dim=32))
    # now: model.output_shape == (None, 32)
    # note: `None` is the batch dimension
    
    model.add(RepeatVector(3))
    # now: model.output_shape == (None, 3, 32)
    

#### Arguments:

  * **`n`** : Integer, repetition factor.

#### Input shape:

2D tensor of shape `(num_samples, features)`.

#### Output shape:

3D tensor of shape `(num_samples, n, features)`.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L639-L642)

    
    
    __init__(
        n,
        **kwargs
    )
    

