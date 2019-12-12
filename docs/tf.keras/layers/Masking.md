

## Class  `Masking` 
通过使用掩码值跳过时间步来屏蔽序列。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Masking` ](/api_docs/python/tf/keras/layers/Masking), [ `tf.compat.v2.keras.layers.Masking` ](/api_docs/python/tf/keras/layers/Masking)

### 在指南中使用：
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)
For each timestep in the input tensor (dimension #1 in the tensor),if all values in the input tensor at that timestepare equal to  `mask_value` , then the timestep will be masked (skipped)in all downstream layers (as long as they support masking).

If any downstream layer does not support masking yet receives suchan input mask, an exception will be raised.

#### 示例：
Consider a Numpy data array  `x`  of shape  `(samples, timesteps, features)` ,to be fed to an LSTM layer.You want to mask timestep #3 and #5 because you lack data forthese timesteps. You can:

- Set  `x[:, 3, :] = 0.`  and  `x[:, 5, :] = 0.` 
- Insert a  `Masking`  layer with  `mask_value=0.`  before the LSTM layer:


```
 model = Sequential()
model.add(Masking(mask_value=0., input_shape=(timesteps, features)))
model.add(LSTM(32))
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L83-L87)

```
 __init__(
    mask_value=0.0,
    **kwargs
)
 
```

