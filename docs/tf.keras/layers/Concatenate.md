

## Class  `Concatenate` 
连接输入列表的层。

**别名** : [ `tf.compat.v1.keras.layers.Concatenate` ](/api_docs/python/tf/keras/layers/Concatenate), [ `tf.compat.v2.keras.layers.Concatenate` ](/api_docs/python/tf/keras/layers/Concatenate)

### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)
It takes as input a list of tensors,all of the same shape except for the concatenation axis,and returns a single tensor, the concatenation of all inputs.

#### 参数：
- **`axis`** : Axis along which to concatenate.
- **`**kwargs`** : standard layer keyword arguments.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L368-L372)

```
 __init__(
    axis=-1,
    **kwargs
)
 
```

Functional interface to the  `Concatenate`  layer.

**别名** : [ `tf.compat.v1.keras.layers.concatenate` ](/api_docs/python/tf/keras/layers/concatenate), [ `tf.compat.v2.keras.layers.concatenate` ](/api_docs/python/tf/keras/layers/concatenate)

```
 tf.keras.layers.concatenate(
    inputs,
    axis=-1,
    **kwargs
)
 
```

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)


#### 参数：
- **`inputs`** : A list of input tensors (at least 2).
- **`axis`** : Concatenation axis.
- **`**kwargs`** : Standard layer keyword arguments.


#### 返回：
A tensor, the concatenation of the inputs alongside axis  `axis` .

