

## Class  `AveragePooling2D` 
空间数据的平均池操作。

**别名** : [ `tf.compat.v1.keras.layers.AveragePooling2D` ](/api_docs/python/tf/keras/layers/AveragePooling2D), [ `tf.compat.v1.keras.layers.AvgPool2D` ](/api_docs/python/tf/keras/layers/AveragePooling2D), [ `tf.compat.v2.keras.layers.AveragePooling2D` ](/api_docs/python/tf/keras/layers/AveragePooling2D), [ `tf.compat.v2.keras.layers.AvgPool2D` ](/api_docs/python/tf/keras/layers/AveragePooling2D), [ `tf.keras.layers.AvgPool2D` ](/api_docs/python/tf/keras/layers/AveragePooling2D)

#### 参数：
- **`pool_size`** : integer or tuple of 2 integers,factors by which to downscale (vertical, horizontal). `(2, 2)`  will halve the input in both spatial dimension.If only one integer is specified, the same window lengthwill be used for both dimensions.
- **`strides`** : Integer, tuple of 2 integers, or None.Strides values.If None, it will default to  `pool_size` .
- **`padding`** : One of  `"valid"`  or  `"same"`  (case-insensitive).
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### 输入形状：
- If  `data_format='channels_last'` :4D tensor with shape  `(batch_size, rows, cols, channels)` .
- If  `data_format='channels_first'` :4D tensor with shape  `(batch_size, channels, rows, cols)` .


#### 输出形状：
- If  `data_format='channels_last'` :4D tensor with shape  `(batch_size, pooled_rows, pooled_cols, channels)` .
- If  `data_format='channels_first'` :4D tensor with shape  `(batch_size, channels, pooled_rows, pooled_cols)` .


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L369-L378)

```
 __init__(
    pool_size=(2, 2),
    strides=None,
    padding='valid',
    data_format=None,
    **kwargs
)
 
```

