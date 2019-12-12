

## Class  `StackedRNNCells` 
包装器，允许一堆RNN单元作为单个单元运行。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.StackedRNNCells` ](/api_docs/python/tf/keras/layers/StackedRNNCells), [ `tf.compat.v2.keras.layers.StackedRNNCells` ](/api_docs/python/tf/keras/layers/StackedRNNCells)

用于实现高效的堆叠RNN。

#### 参数：
- **`cells`** : List of RNN cell instances.


#### 示例：


```
 cells = [
    keras.layers.LSTMCell(output_dim),
    keras.layers.LSTMCell(output_dim),
    keras.layers.LSTMCell(output_dim),
]

inputs = keras.Input((timesteps, input_dim))
x = keras.layers.RNN(cells)(inputs)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L71-L91)

```
 __init__(
    cells,
    **kwargs
)
 
```

## 属性


###  `output_size` 


###  `state_size` 


## 方法


###  `get_initial_state` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L107-L118)

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
 
```

