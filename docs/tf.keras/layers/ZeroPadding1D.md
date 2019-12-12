

## Class  `ZeroPadding1D` 
Zero-padding layer for 1D input (e.g. temporal sequence).

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.ZeroPadding1D` ](/api_docs/python/tf/keras/layers/ZeroPadding1D), [ `tf.compat.v2.keras.layers.ZeroPadding1D` ](/api_docs/python/tf/keras/layers/ZeroPadding1D)

#### 参数：
- **`padding`** : Int, or tuple of int (length 2), or dictionary.
    - If int:How many zeros to add at the beginning and end ofthe padding dimension (axis 1).
    - If tuple of int (length 2):How many zeros to add at the beginning and at the end ofthe padding dimension ( `(left_pad, right_pad)` ).


#### 输入形状：
3D tensor with shape  `(batch, axis_to_pad, features)` 

#### 输出形状：
3D tensor with shape  `(batch, padded_axis, features)` 

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2092-L2095)

```
 __init__(
    padding=1,
    **kwargs
)
 
```

