Max pooling layer for 3D inputs (e.g. (deprecated)

```
 tf.compat.v1.layers.max_pooling3d(
    inputs,
    pool_size,
    strides,
    padding='valid',
    data_format='channels_last',
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use keras.layers.MaxPooling3D instead.
卷）。

#### 参数：
- **`inputs`** : The tensor over which to pool. Must have rank 5.
- **`pool_size`** : An integer or tuple/list of 3 integers: (pool_depth, pool_height,pool_width) specifying the size of the pooling window. Can be a singleinteger to specify the same value for all spatial dimensions.
- **`strides`** : An integer or tuple/list of 3 integers, specifying the strides ofthe pooling operation. Can be a single integer to specify the same valuefor all spatial dimensions.
- **`padding`** : A string. The padding method, either 'valid' or 'same'.Case-insensitive.
- **`data_format`** : A string. The ordering of the dimensions in the inputs. `channels_last`  (default) and  `channels_first`  are supported. `channels_last`  corresponds to inputs with shape  `(batch, depth, height,width, channels)`  while  `channels_first`  corresponds to inputs with shape `(batch, channels, depth, height, width)` .
- **`name`** : A string, the name of the layer.


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
