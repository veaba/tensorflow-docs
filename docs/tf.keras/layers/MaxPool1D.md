## Class MaxPool1D
Max pooling operation for temporal data.
### Aliases:
- Class `tf.compat.v1.keras.layers.MaxPool1D`
- Class `tf.compat.v1.keras.layers.MaxPooling1D`
- Class `tf.compat.v2.keras.layers.MaxPool1D`
- Class `tf.compat.v2.keras.layers.MaxPooling1D`
- Class `tf.keras.layers.MaxPooling1D`
#### Arguments:
- `pool_size`: Integer, size of the max pooling windows.
- `strides`: Integer, or None. Factor by which to downscale. E.g. 2 will halve the input. If None, it will default to `pool_size`.
- `padding`: One of `"valid"` or `"same"` (case-insensitive).
- `data_format`: A string, one of `channels_last` (default) or `channels_first`. The ordering of the dimensions in the inputs. `channels_last` corresponds to inputs with shape `batch, steps, features)` while `channels_first` corresponds to inputs with shape `batch, features, steps)`.
#### Input shape:
- If `data_format='channels_last'`: 3D tensor with shape `batch_size, steps, features)`.
- If `data_format='channels_first'`: 3D tensor with shape `batch_size, features, steps)`.
#### Output shape:
- If `data_format='channels_last'`: 3D tensor with shape `batch_size, downsampled_steps, features)`.
- If `data_format='channels_first'`: 3D tensor with shape `batch_size, features, downsampled_steps)`.
## __init__
View source

```
 __init__(
    pool_size=2,
    strides=None,
    padding='valid',
    data_format='channels_last',
    **kwargs
)
```
