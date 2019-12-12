

## Class  `ActivityRegularization` 
对基于成本函数的输入活动应用更新的层。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.ActivityRegularization` ](/api_docs/python/tf/keras/layers/ActivityRegularization), [ `tf.compat.v2.keras.layers.ActivityRegularization` ](/api_docs/python/tf/keras/layers/ActivityRegularization)

#### 参数：
- **`l1`** : L1 regularization factor (positive float).
- **`l2`** : L2 regularization factor (positive float).


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L1107-L1112)

```
 __init__(
    l1=0.0,
    l2=0.0,
    **kwargs
)
 
```

