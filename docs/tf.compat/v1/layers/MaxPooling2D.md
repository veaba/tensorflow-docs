## Class MaxPooling2D

Max pooling layer for 2D inputs (e.g. images).
[MaxPool2D](https://www.tensorflow.org/api_docs/python/tf/keras/layers/MaxPool2D)Inherits From: , Layer

#### Arguments:
- `pool_size`: An integer or tuple/list of 2 integers: (pool_height, pool_width) specifying the size of the pooling window. Can be a single integer to specify the same value for all spatial dimensions.
- `strides`: An integer or tuple/list of 2 integers, specifying the `strides` of the pooling operation. Can be a single integer to specify the same value for all spatial dimensions.
- `padding`: A string. The `padding` method, either 'valid' or 'same'. Case-insensitive.
- `data_format`: A string. The ordering of the dimensions in the inputs. `channels_last` (default) and `channels_first` are supported. `channels_last` corresponds to inputs with shape (`batch, height, width, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, height, width`).
- `name`: A string, the `name` of the layer.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L264-L271)


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
