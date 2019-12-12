调整包含在5d张量中的体积的大小。

**别名** : [ `tf.compat.v1.keras.backend.resize_volumes` ](/api_docs/python/tf/keras/backend/resize_volumes), [ `tf.compat.v2.keras.backend.resize_volumes` ](/api_docs/python/tf/keras/backend/resize_volumes)

```
 tf.keras.backend.resize_volumes(
    x,
    depth_factor,
    height_factor,
    width_factor,
    data_format
)
 
```

#### 参数：
- **`x`** : Tensor or variable to resize.
- **`depth_factor`** : Positive integer.
- **`height_factor`** : Positive integer.
- **`width_factor`** : Positive integer.
- **`data_format`** : One of  `"channels_first"` ,  `"channels_last"` .


#### 返回：
张量

#### 加薪：
- **`ValueError`** : if  `data_format`  is neither `channels_last`  or  `channels_first` .
