

## Class  `ThresholdedReLU` 
阈值校正线性单元。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.ThresholdedReLU` ](/api_docs/python/tf/keras/layers/ThresholdedReLU), [ `tf.compat.v2.keras.layers.ThresholdedReLU` ](/api_docs/python/tf/keras/layers/ThresholdedReLU)

#### 它如下：
 `f(x) = x for x > theta` , `f(x) = 0 otherwise` .

#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

#### 参数：
- **`theta`** : Float >= 0. Threshold location of activation.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/advanced_activations.py#L219-L222)

```
 __init__(
    theta=1.0,
    **kwargs
)
 
```

