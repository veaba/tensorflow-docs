## Class AveragePooling3D

Average pooling layer for 3D inputs (e.g. volumes).
[AveragePooling3D](https://www.tensorflow.org/api_docs/python/tf/keras/layers/AveragePooling3D)Inherits From: , Layer

#### Arguments:
- `pool_size`: An integer or tuple/list of 3 integers: (pool_depth, pool_height, pool_width) specifying the size of the pooling window. Can be a single integer to specify the same value for all spatial dimensions.
- `strides`: An integer or tuple/list of 3 integers, specifying the `strides` of the pooling operation. Can be a single integer to specify the same value for all spatial dimensions.
- `padding`: A string. The `padding` method, either 'valid' or 'same'. Case-insensitive.
- `data_format`: A string. The ordering of the dimensions in the inputs. `channels_last` (default) and `channels_first` are supported. `channels_last` corresponds to inputs with shape (`batch, depth, height, width, channels`) while `channels_first` corresponds to inputs with shape (`batch, channels, depth, height, width`).
- `name`: A string, the `name` of the layer.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L339-L346)


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
