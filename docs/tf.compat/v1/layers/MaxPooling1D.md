## Class MaxPooling1D

Max Pooling layer for 1D inputs.
[MaxPool1D](https://www.tensorflow.org/api_docs/python/tf/keras/layers/MaxPool1D)Inherits From: , Layer

#### Arguments:
- `pool_size`: An integer or tuple/list of a single integer, representing the size of the pooling window.
- `strides`: An integer or tuple/list of a single integer, specifying the `strides` of the pooling operation.
- `padding`: A string. The `padding` method, either 'valid' or 'same'. Case-insensitive.
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape (`batch, length, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, length`).
- `name`: A string, the `name` of the layer.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L117-L128)


```
 __init__(
    pool_size,
    strides,
    padding='valid',
    data_format='channels_last',
    name=None,
    **kwargs
)
```
## Properties
### graph

DEPRECATED FUNCTION
### scope_name
