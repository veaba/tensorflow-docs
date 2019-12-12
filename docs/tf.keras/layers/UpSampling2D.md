

## Class  `UpSampling2D` 
二维输入的上采样层。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.UpSampling2D` ](/api_docs/python/tf/keras/layers/UpSampling2D), [ `tf.compat.v2.keras.layers.UpSampling2D` ](/api_docs/python/tf/keras/layers/UpSampling2D)

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
Repeats the rows and columns of the databy  `size[0]`  and  `size[1]`  respectively.

#### 参数：
- **`size`** : Int, or tuple of 2 integers.The upsampling factors for rows and columns.
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".
- **`interpolation`** : A string, one of  `nearest`  or  `bilinear` .


#### 输入形状：
4D tensor with shape:

- If  `data_format`  is  `"channels_last"` : `(batch, rows, cols, channels)` 
- If  `data_format`  is  `"channels_first"` : `(batch, channels, rows, cols)` 


#### 输出形状：
4D tensor with shape:

- If  `data_format`  is  `"channels_last"` : `(batch, upsampled_rows, upsampled_cols, channels)` 
- If  `data_format`  is  `"channels_first"` : `(batch, channels, upsampled_rows, upsampled_cols)` 


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1953-L1965)

```
 __init__(
    size=(2, 2),
    data_format=None,
    interpolation='nearest',
    **kwargs
)
 
```

