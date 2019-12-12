

## Class  `GlobalMaxPool1D` 
时态数据的全局最大池操作。

**别名** : [ `tf.compat.v1.keras.layers.GlobalMaxPool1D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool1D), [ `tf.compat.v1.keras.layers.GlobalMaxPooling1D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool1D), [ `tf.compat.v2.keras.layers.GlobalMaxPool1D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool1D), [ `tf.compat.v2.keras.layers.GlobalMaxPooling1D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool1D), [ `tf.keras.layers.GlobalMaxPooling1D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool1D)

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


#### 参数：
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, steps, features)`  while  `channels_first` corresponds to inputs with shape `(batch, features, steps)` .


#### 输入形状：
- If  `data_format='channels_last'` :3D tensor with shape: `(batch_size, steps, features)` 
- If  `data_format='channels_first'` :3D tensor with shape: `(batch_size, features, steps)` 


#### 输出形状：
2D tensor with shape  `(batch_size, features)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L580-L583)

```
 __init__(
    data_format='channels_last',
    **kwargs
)
 
```

