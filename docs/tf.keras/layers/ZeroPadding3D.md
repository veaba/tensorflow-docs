

## Class  `ZeroPadding3D` 
Zero-padding layer for 3D data (spatial or spatio-temporal).

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.ZeroPadding3D` ](/api_docs/python/tf/keras/layers/ZeroPadding3D), [ `tf.compat.v2.keras.layers.ZeroPadding3D` ](/api_docs/python/tf/keras/layers/ZeroPadding3D)

#### 参数：
- **`padding`** : Int, or tuple of 3 ints, or tuple of 3 tuples of 2 ints.
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, spatial_dim1, spatial_dim2, spatial_dim3, channels)` while  `channels_first`  corresponds to inputs with shape `(batch, channels, spatial_dim1, spatial_dim2, spatial_dim3)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".
    - If int: the same symmetric paddingis applied to height and width.
    - If tuple of 3 ints:interpreted as two differentsymmetric padding values for height and width: `(symmetric_dim1_pad, symmetric_dim2_pad, symmetric_dim3_pad)` .
    - If tuple of 3 tuples of 2 ints:interpreted as `((left_dim1_pad, right_dim1_pad), (left_dim2_pad,right_dim2_pad), (left_dim3_pad, right_dim3_pad))` 


#### 输入形状：
5D tensor with shape:

- If  `data_format`  is  `"channels_last"` : `(batch, first_axis_to_pad, second_axis_to_pad, third_axis_to_pad,  depth)` 
- If  `data_format`  is  `"channels_first"` : `(batch, depth, first_axis_to_pad, second_axis_to_pad,  third_axis_to_pad)` 


#### 输出形状：
5D tensor with shape:

- If  `data_format`  is  `"channels_last"` : `(batch, first_padded_axis, second_padded_axis, third_axis_to_pad,  depth)` 
- If  `data_format`  is  `"channels_first"` : `(batch, depth, first_padded_axis, second_padded_axis,  third_axis_to_pad)` 


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2261-L2288)

```
 __init__(
    padding=(1, 1, 1),
    data_format=None,
    **kwargs
)
 
```

