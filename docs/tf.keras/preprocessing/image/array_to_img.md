将3d numpy数组转换为pil图像实例。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.array_to_img` ](/api_docs/python/tf/keras/preprocessing/image/array_to_img), [ `tf.compat.v2.keras.preprocessing.image.array_to_img` ](/api_docs/python/tf/keras/preprocessing/image/array_to_img)

```
 tf.keras.preprocessing.image.array_to_img(
    x,
    data_format=None,
    scale=True,
    dtype=None
)
 
```

### 在教程中使用：
- [Image segmentation](https://tensorflow.google.cn/tutorials/images/segmentation)


#### 参数：
- **`x`** : Input Numpy array.
- **`data_format`** : Image data format.either "channels_first" or "channels_last".
- **`scale`** : Whether to rescale image valuesto be within  `[0, 255]` .
- **`dtype`** : Dtype to use.


#### 返回：
PIL图像实例。

#### 加薪：
- **`ImportError`** : if PIL is not available.
- **`ValueError`** : if invalid  `x`  or  `data_format`  is passed.
