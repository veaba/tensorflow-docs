将存储为numpy数组的图像保存到path或file对象。

**别名** : [ `tf.compat.v1.keras.preprocessing.image.save_img` ](/api_docs/python/tf/keras/preprocessing/image/save_img), [ `tf.compat.v2.keras.preprocessing.image.save_img` ](/api_docs/python/tf/keras/preprocessing/image/save_img)

```
 tf.keras.preprocessing.image.save_img(
    path,
    x,
    data_format=None,
    file_format=None,
    scale=True,
    **kwargs
)
 
```

#### 参数：
- **`path`** : Path or file object.
- **`x`** : Numpy array.
- **`data_format`** : Image data format,either "channels_first" or "channels_last".
- **`file_format`** : Optional file format override. If omitted, theformat to use is determined from the filename extension.If a file object was used instead of a filename, thisparameter should always be used.
- **`scale`** : Whether to rescale image values to be within  `[0, 255]` .
- **`**kwargs`** : Additional keyword arguments passed to  `PIL.Image.save()` .
