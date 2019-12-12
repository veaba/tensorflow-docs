

## Class  `Reshape` 
将输出重塑为特定形状。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Reshape` ](/api_docs/python/tf/keras/layers/Reshape), [ `tf.compat.v2.keras.layers.Reshape` ](/api_docs/python/tf/keras/layers/Reshape)

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)


### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)


#### 参数：
- **`target_shape`** : Target shape. Tuple of integers,does not include the samples dimension (batch size).


#### 输入形状：
Arbitrary, although all dimensions in the input shaped must be fixed.Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
 `(batch_size,) + target_shape` 

#### 示例：


```
 # as first layer in a Sequential model
model = Sequential()
model.add(Reshape((3, 4), input_shape=(12,)))
# now: model.output_shape == (None, 3, 4)
# 注意：`None` is the batch dimension

# as intermediate layer in a Sequential model
model.add(Reshape((6, 2)))
# now: model.output_shape == (None, 6, 2)

# also supports shape inference using `-1` as dimension
model.add(Reshape((-1, 2, 2)))
# now: model.output_shape == (None, None, 2, 2)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L411-L413)

```
 __init__(
    target_shape,
    **kwargs
)
 
```

