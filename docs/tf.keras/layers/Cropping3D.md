

## Class  `Cropping3D` 
Cropping layer for 3D data (e.g. spatial or spatio-temporal).

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)



### Aliases:

- Class [ `tf.compat.v1.keras.layers.Cropping3D` ](/api_docs/python/tf/keras/layers/Cropping3D)

- Class [ `tf.compat.v2.keras.layers.Cropping3D` ](/api_docs/python/tf/keras/layers/Cropping3D)



#### Arguments:

- **`cropping`** : Int, or tuple of 3 ints, or tuple of 3 tuples of 2 ints.


- **`data_format`** : A string,
one of  `channels_last`  (default) or  `channels_first` .
The ordering of the dimensions in the inputs.
 `channels_last`  corresponds to inputs with shape
 `(batch, spatial_dim1, spatial_dim2, spatial_dim3, channels)` 
while  `channels_first`  corresponds to inputs with shape
 `(batch, channels, spatial_dim1, spatial_dim2, spatial_dim3)` .
It defaults to the  `image_data_format`  value found in your
Keras config file at  `~/.keras/keras.json` .
If you never set it, then it will be "channels_last".


    - If int: the same symmetric cropping
is applied to depth, height, and width.

    - If tuple of 3 ints: interpreted as two different
symmetric cropping values for depth, height, and width:
 `(symmetric_dim1_crop, symmetric_dim2_crop, symmetric_dim3_crop)` .

    - If tuple of 3 tuples of 2 ints: interpreted as
<code translate="no" dir="ltr">((left_dim1_crop, right_dim1_crop), (left_dim2_crop,
right_dim2_crop), (left_dim3_crop, right_dim3_crop))</code>



#### Input shape:
5D tensor with shape:


- If  `data_format`  is  `"channels_last"` :
<code translate="no" dir="ltr">(batch, first_axis_to_crop, second_axis_to_crop, third_axis_to_crop,
depth)</code>

- If  `data_format`  is  `"channels_first"` :
<code translate="no" dir="ltr">(batch, depth, first_axis_to_crop, second_axis_to_crop,
third_axis_to_crop)</code>



#### Output shape:
5D tensor with shape:


- If  `data_format`  is  `"channels_last"` :
<code translate="no" dir="ltr">(batch, first_cropped_axis, second_cropped_axis, third_cropped_axis,
depth)</code>

- If  `data_format`  is  `"channels_first"` :
<code translate="no" dir="ltr">(batch, depth, first_cropped_axis, second_cropped_axis,
third_cropped_axis)</code>



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2553-L2583)



```
 __init__(
    cropping=((1, 1), (1, 1), (1, 1)),
    data_format=None,
    **kwargs
)
 
```

