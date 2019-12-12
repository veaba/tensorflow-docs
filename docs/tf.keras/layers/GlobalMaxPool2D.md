

## Class  `GlobalMaxPool2D` 
空间数据的全局最大池操作。

**别名** : [ `tf.compat.v1.keras.layers.GlobalMaxPool2D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool2D), [ `tf.compat.v1.keras.layers.GlobalMaxPooling2D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool2D), [ `tf.compat.v2.keras.layers.GlobalMaxPool2D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool2D), [ `tf.compat.v2.keras.layers.GlobalMaxPooling2D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool2D), [ `tf.keras.layers.GlobalMaxPooling2D` ](/api_docs/python/tf/keras/layers/GlobalMaxPool2D)

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


#### 参数：
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first` corresponds to inputs with shape `(batch, channels, height, width)` .It defaults to the  `image_data_format`  value found in yourKeras config file at  `~/.keras/keras.json` .If you never set it, then it will be "channels_last".


#### 输入形状：
- If  `data_format='channels_last'` :4D tensor with shape  `(batch_size, rows, cols, channels)` .
- If  `data_format='channels_first'` :4D tensor with shape  `(batch_size, channels, rows, cols)` .


#### 输出形状：
2D tensor with shape  `(batch_size, channels)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L688-L691)

```
 __init__(
    data_format=None,
    **kwargs
)
 
```

