## Class ZeroPadding1D
Zero-padding layer for 1D input (e.g. temporal sequence).
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.ZeroPadding1D
- Class tf.compat.v2.keras.layers.ZeroPadding1D
#### Arguments:
- padding: Int, or tuple of int (length 2), or dictionary.
If int: How many zeros to add at the beginning and end of the padding dimension (axis 1).
If tuple of int (length 2): How many zeros to add at the beginning and at the end of the padding dimension `((left_pad, right_pad))`.
- If int: How many zeros to add at the beginning and end of the padding dimension (axis 1).
- If tuple of int (length 2): How many zeros to add at the beginning and at the end of the padding dimension ``((left_pad, right_pad))``.
#### Input shape:
3D tensor with shape (batch, axis_to_pad, features)
#### Output shape:
3D tensor with shape (batch, padded_axis, features)
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2092-L2095)


```
 __init__(
    padding=1,
    **kwargs
)
```
