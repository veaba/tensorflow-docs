[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L99-L128)  
---  
  
## Class `MaxPooling1D`

Max Pooling layer for 1D inputs.

Inherits From:
[`MaxPool1D`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/MaxPool1D),
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

#### Arguments:

  * **`pool_size`** : An integer or tuple/list of a single integer, representing the size of the pooling window.
  * **`strides`** : An integer or tuple/list of a single integer, specifying the strides of the pooling operation.
  * **`padding`** : A string. The padding method, either 'valid' or 'same'. Case-insensitive.
  * **`data_format`** : A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `(batch, length, channels)` while `channels_first` corresponds to inputs with shape `(batch, channels, length)`.
  * **`name`** : A string, the name of the layer.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/pooling.py#L117-L128)

    
    
    __init__(
        pool_size,
        strides,
        padding='valid',
        data_format='channels_last',
        name=None,
        **kwargs
    )
    

## Properties

### `graph`

DEPRECATED FUNCTION

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Stop using this property because tf.layers
layers no longer track their graph.

### `scope_name`

