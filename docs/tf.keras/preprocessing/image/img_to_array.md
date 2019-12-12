将pil图像实例转换为numpy数组。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.img_to_array` ](/api_docs/python/tf/keras/preprocessing/image/img_to_array), [ `tf.compat.v2.keras.preprocessing.image.img_to_array` ](/api_docs/python/tf/keras/preprocessing/image/img_to_array)

```
 tf.keras.preprocessing.image.img_to_array(
    img,
    data_format=None,
    dtype=None
)
 
```

### 在指南中使用：
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### 在教程中使用：
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)


#### 参数：
- **`img`** : PIL Image instance.
- **`data_format`** : Image data format,either "channels_first" or "channels_last".
- **`dtype`** : Dtype to use for the returned array.


#### 返回：
三维核阵列。

#### 加薪：
- **`ValueError`** : if invalid  `img`  or  `data_format`  is passed.
