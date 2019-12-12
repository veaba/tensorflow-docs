

## Class  `Cropping1D` 
用于1D输入的裁剪层（例如时间序列）。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Cropping1D` ](/api_docs/python/tf/keras/layers/Cropping1D), [ `tf.compat.v2.keras.layers.Cropping1D` ](/api_docs/python/tf/keras/layers/Cropping1D)

它沿着时间维度（轴1）生长。

#### 参数：
- **`cropping`** : Int or tuple of int (length 2)How many units should be trimmed off at the beginning and end ofthe cropping dimension (axis 1).If a single int is provided, the same value will be used for both.


#### 输入形状：
3D tensor with shape  `(batch, axis_to_crop, features)` 

#### 输出形状：
3D tensor with shape  `(batch, cropped_axis, features)` 

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2352-L2355)

```
 __init__(
    cropping=(1, 1),
    **kwargs
)
 
```

