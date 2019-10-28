## Class Flatten
Flattens an input tensor while preserving the batch axis (axis 0).
Inherits From: `Flatten`, `Layer`
#### Arguments:
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, ..., channels)` while `channels_first` corresponds to inputs with shape `batch, channels, ...)`.
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
View source

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
Flattens an input tensor while preserving the batch axis (axis 0). (deprecated)

```
 tf.compat.v1.layers.flatten(
    inputs,
    name=None,
    data_format='channels_last'
)
```
#### Arguments:
- `inputs`: Tensor input.
- `name`: The `name` of the layer (string).
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, height, width, channels)` while `channels_first` corresponds to inputs with shape `batch, channels, height, width)`.
#### Returns:
Reshaped tensor.
#### Examples:

```
   x = tf.compat.v1.placeholder(shape=(None, 4, 4), dtype='float32')
  y = flatten(x)
  # now `y` has shape `(None, 16)`

  x = tf.compat.v1.placeholder(shape=(None, 3, None), dtype='float32')
  y = flatten(x)
  # now `y` has shape `(None, None)`
```
