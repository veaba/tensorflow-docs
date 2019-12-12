垫4D张量的第2和第3维度。

**别名** : [ `tf.compat.v1.keras.backend.spatial_2d_padding` ](/api_docs/python/tf/keras/backend/spatial_2d_padding), [ `tf.compat.v2.keras.backend.spatial_2d_padding` ](/api_docs/python/tf/keras/backend/spatial_2d_padding)

```
 tf.keras.backend.spatial_2d_padding(
    x,
    padding=((1, 1), (1, 1)),
    data_format=None
)
 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`padding`** : Tuple of 2 tuples, padding pattern.
- **`data_format`** : One of  `channels_last`  or  `channels_first` .


#### 返回：
加垫的4D张量。

#### 加薪：
- **`ValueError`** : if  `data_format`  is neither `channels_last`  or  `channels_first` .
