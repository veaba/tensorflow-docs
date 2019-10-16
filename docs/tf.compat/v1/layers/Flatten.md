## Class Flatten

Flattens an input tensor while preserving the batch axis (axis 0).
[Flatten](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Flatten)Inherits From: , Layer

#### Arguments:
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, ..., channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, ...`).
#### Examples:

```
   x = tf.compat.v1.placeholder(shape=(None, 4, 4), dtype='float32')
  y = Flatten()(x)
  # now `y` has shape `(None, 16)`

  x = tf.compat.v1.placeholder(shape=(None, 3, None), dtype='float32')
  y = Flatten()(x)
  # now `y` has shape `(None, None)`
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L569-L572)


```
 __init__(
    data_format=None,
    **kwargs
)
```
## Properties
### graph

DEPRECATED FUNCTION
### scope_name
