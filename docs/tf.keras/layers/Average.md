

## Class  `Average` 
平均输入列表的层。

**别名** : [ `tf.compat.v1.keras.layers.Average` ](/api_docs/python/tf/keras/layers/Average), [ `tf.compat.v2.keras.layers.Average` ](/api_docs/python/tf/keras/layers/Average)

It takes as input a list of tensors,all of the same shape, and returnsa single tensor (also of the same shape).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)

```
 __init__(**kwargs)
 
```

Functional interface to the  `Average`  layer.

**别名** : [ `tf.compat.v1.keras.layers.average` ](/api_docs/python/tf/keras/layers/average), [ `tf.compat.v2.keras.layers.average` ](/api_docs/python/tf/keras/layers/average)

```
 tf.keras.layers.average(
    inputs,
    **kwargs
)
 
```

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


#### 参数：
- **`inputs`** : A list of input tensors (at least 2).
- **`**kwargs`** : Standard layer keyword arguments.


#### 返回：
A tensor, the average of the inputs.

