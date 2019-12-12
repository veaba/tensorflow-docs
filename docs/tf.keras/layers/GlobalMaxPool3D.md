

## Class  `GlobalMaxPool3D` 
三维数据的全局最大池操作。

**别名** : [ `tf.compat.v1.keras.layers.GlobalMaxPool3D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool3D), [ `tf.compat.v1.keras.layers.GlobalMaxPooling3D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool3D), [ `tf.compat.v2.keras.layers.GlobalMaxPool3D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool3D), [ `tf.compat.v2.keras.layers.GlobalMaxPooling3D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool3D), [ `tf.keras.layers.GlobalMaxPooling3D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool3D)

#### 参数：
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, spatial_dim1, spatial_dim2, spatial_dim3, channels)` while  `channels_first`  corresponds to inputs with shape `(batch, channels, spatial_dim1, spatial_dim2, spatial_dim3)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### 输入形状：
- If  `data_format='channels_last'` :5D tensor with shape: `(batch_size, spatial_dim1, spatial_dim2, spatial_dim3, channels)` 
- If  `data_format='channels_first'` :5D tensor with shape: `(batch_size, channels, spatial_dim1, spatial_dim2, spatial_dim3)` 


#### 输出形状：
2D tensor with shape  `(batch_size, channels)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L779-L782)

```
 __init__(
    data_format=None,
    **kwargs
)
 
```

