

## Class  `UpSampling3D` 
三维输入的上采样层。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.UpSampling3D` ](/api_docs/python/tf/keras/layers/UpSampling3D), [ `tf.compat.v2.keras.layers.UpSampling3D` ](/api_docs/python/tf/keras/layers/UpSampling3D)

Repeats the 1st, 2nd and 3rd dimensionsof the data by  `size[0]` ,  `size[1]`  and  `size[2]`  respectively.

#### 参数：
- **`size`** : Int, or tuple of 3 integers.The upsampling factors for dim1, dim2 and dim3.
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, spatial_dim1, spatial_dim2, spatial_dim3, channels)` while  `channels_first`  corresponds to inputs with shape `(batch, channels, spatial_dim1, spatial_dim2, spatial_dim3)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### 输入形状：
5D tensor with shape:

- If  `data_format`  is  `"channels_last"` : `(batch, dim1, dim2, dim3, channels)` 
- If  `data_format`  is  `"channels_first"` : `(batch, channels, dim1, dim2, dim3)` 


#### 输出形状：
5D tensor with shape:

- If  `data_format`  is  `"channels_last"` : `(batch, upsampled_dim1, upsampled_dim2, upsampled_dim3, channels)` 
- If  `data_format`  is  `"channels_first"` : `(batch, channels, upsampled_dim1, upsampled_dim2, upsampled_dim3)` 


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2035-L2039)

```
 __init__(
    size=(2, 2, 2),
    data_format=None,
    **kwargs
)
 
```

