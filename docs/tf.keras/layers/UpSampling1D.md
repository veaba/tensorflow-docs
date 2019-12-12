

## Class  `UpSampling1D` 
1D输入的上采样层。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.UpSampling1D` ](/api_docs/python/tf/keras/layers/UpSampling1D), [ `tf.compat.v2.keras.layers.UpSampling1D` ](/api_docs/python/tf/keras/layers/UpSampling1D)

Repeats each temporal step  `size`  times along the time axis.

#### 参数：
- **`size`** : Integer. Upsampling factor.


#### 输入形状：
3D tensor with shape:  `(batch, steps, features)` .

#### 输出形状：
3D tensor with shape:  `(batch, upsampled_steps, features)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L1896-L1899)

```
 __init__(
    size=2,
    **kwargs
)
 
```

