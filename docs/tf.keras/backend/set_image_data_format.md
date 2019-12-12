设置图像数据格式约定的值。

**别名** : [ `tf.compat.v1.keras.backend.set_image_data_format` ](/api_docs/python/tf/keras/backend/set_image_data_format), [ `tf.compat.v2.keras.backend.set_image_data_format` ](/api_docs/python/tf/keras/backend/set_image_data_format)

```
 tf.keras.backend.set_image_data_format(data_format)
 
```

#### 参数：
- **`data_format`** : string.  `'channels_first'`  or  `'channels_last'` .Example:  `python from keras import backend as K K.image_data_format() >>>'channels_first' K.set_image_data_format('channels_last')K.image_data_format() >>> 'channels_last'` 


#### 加薪：
- **`ValueError`** : In case of invalid  `data_format`  value.
