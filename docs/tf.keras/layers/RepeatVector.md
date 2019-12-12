

## Class  `RepeatVector` 
重复输入n次。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.RepeatVector` ](/api_docs/python/tf/keras/layers/RepeatVector), [ `tf.compat.v2.keras.layers.RepeatVector` ](/api_docs/python/tf/keras/layers/RepeatVector)

#### 示例：


```
 model = Sequential()
model.add(Dense(32, input_dim=32))
# now: model.output_shape == (None, 32)
# 注意：`None` is the batch dimension

model.add(RepeatVector(3))
# now: model.output_shape == (None, 3, 32)
 
```

#### 参数：
- **`n`** : Integer, repetition factor.


#### 输入形状：
2D tensor of shape  `(num_samples, features)` .

#### 输出形状：
3D tensor of shape  `(num_samples, n, features)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L639-L642)

```
 __init__(
    n,
    **kwargs
)
 
```

