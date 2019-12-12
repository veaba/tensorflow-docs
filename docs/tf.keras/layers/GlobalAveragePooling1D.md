

## Class  `GlobalAveragePooling1D` 
时态数据的全局平均池操作。

**别名** : [ `tf.compat.v1.keras.layers.GlobalAveragePooling1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.compat.v1.keras.layers.GlobalAvgPool1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.compat.v2.keras.layers.GlobalAveragePooling1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.compat.v2.keras.layers.GlobalAvgPool1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.keras.layers.GlobalAvgPool1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D)

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### 在教程中使用：
- [Text classification with preprocessed text: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification)
- [Word embeddings](https://tensorflow.google.cn/tutorials/text/word_embeddings)


#### 参数：
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, steps, features)`  while  `channels_first` corresponds to inputs with shape `(batch, features, steps)` .


#### 调用参数：
- **`inputs`** : A 3D tensor.
- **`mask`** : Binary tensor of shape  `(batch_size, steps)`  indicating whethera given step should be masked (excluded from the average).


#### 输入形状：
- If  `data_format='channels_last'` :3D tensor with shape: `(batch_size, steps, features)` 
- If  `data_format='channels_first'` :3D tensor with shape: `(batch_size, features, steps)` 


#### 输出形状：
2D tensor with shape  `(batch_size, features)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L632-L635)

```
 __init__(
    data_format='channels_last',
    **kwargs
)
 
```

