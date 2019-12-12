

## Class  `Permute` 
根据给定的模式排列输入的维度。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Permute` ](/api_docs/python/tf/keras/layers/Permute), [ `tf.compat.v2.keras.layers.Permute` ](/api_docs/python/tf/keras/layers/Permute)

用于将RNN和ConvNets连接在一起。

#### 示例：


```
 model = Sequential()
model.add(Permute((2, 1), input_shape=(10, 64)))
# now: model.output_shape == (None, 64, 10)
# 注意：`None` is the batch dimension
 
```

#### 参数：
- **`dims`** : Tuple of integers. Permutation pattern, does not include thesamples dimension. Indexing starts at 1.For instance,  `(2, 1)`  permutes the first and second dimensionsof the input.


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
Same as the input shape, but with the dimensions re-ordered accordingto the specified pattern.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L510-L518)

```
 __init__(
    dims,
    **kwargs
)
 
```

