Converts a PIL Image instance to a Numpy array.

**Aliases** : [ `tf.compat.v1.keras.preprocessing.image.img_to_array` ](/api_docs/python/tf/keras/preprocessing/image/img_to_array), [ `tf.compat.v2.keras.preprocessing.image.img_to_array` ](/api_docs/python/tf/keras/preprocessing/image/img_to_array)

```
 tf.keras.preprocessing.image.img_to_array(
    img,
    data_format=None,
    dtype=None
)
 
```

### Used in the guide:
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### Used in the tutorials:
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)


#### Arguments:
- **`img`** : PIL Image instance.
- **`data_format`** : Image data format,either "channels_first" or "channels_last".
- **`dtype`** : Dtype to use for the returned array.


#### Returns:
A 3D Numpy array.

#### Raises:
- **`ValueError`** : if invalid  `img`  or  `data_format`  is passed.
