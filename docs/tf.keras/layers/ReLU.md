

## Class  `ReLU` 
校正线性单元激活函数。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.ReLU` ](/api_docs/python/tf/keras/layers/ReLU), [ `tf.compat.v2.keras.layers.ReLU` ](/api_docs/python/tf/keras/layers/ReLU)

### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
With default values, it returns element-wise  `max(x, 0)` .

Otherwise, it follows: `f(x) = max_value`  for  `x >= max_value` , `f(x) = x`  for  `threshold <= x < max_value` , `f(x) = negative_slope * (x - threshold)`  otherwise.

#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

#### 参数：
- **`max_value`** : Float >= 0. Maximum activation value.
- **`negative_slope`** : Float >= 0. Negative slope coefficient.
- **`threshold`** : Float. Threshold value for thresholded activation.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L297-L311)

```
 __init__(
    max_value=None,
    negative_slope=0,
    threshold=0,
    **kwargs
)
 
```

