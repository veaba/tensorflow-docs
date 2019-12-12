将图像加载为PIL格式。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.load_img` ](/api_docs/python/tf/keras/preprocessing/image/load_img), [ `tf.compat.v2.keras.preprocessing.image.load_img` ](/api_docs/python/tf/keras/preprocessing/image/load_img)

```
 tf.keras.preprocessing.image.load_img(
    path,
    grayscale=False,
    color_mode='rgb',
    target_size=None,
    interpolation='nearest'
)
 
```

### 在指南中使用：
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### 在教程中使用：
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)


# Arguments


```
 path:`.
color_mode: One of "grayscale", "rgb", "rgba". Default: "rgb".
    The desired image format.
target_size: Either `None` (default to original size)
    or tuple of ints `(img_height, img_width)`.
插值：用于对图像重新采样的插值方法，如果
    target size is different from that of the loaded image.
    Supported methods are "nearest", "bilinear", and "bicubic".
    If PIL version 1.1.3 or newer is installed, "lanczos" is also
    supported. If PIL version 3.4.0 or newer is installed, "box" and
    "hamming" are also supported. By default, "nearest" is used.
 
```

# Returns


```
PIL图像实例。
 
```

# Raises


```
重要提示：如果PIL不可用。
值错误：如果不支持插值方法。
 
```

