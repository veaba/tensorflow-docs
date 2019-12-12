Average pooling layer for 2D inputs (e.g. images). (deprecated)

```
 tf.compat.v1.layers.average_pooling2d(
    inputs,
    pool_size,
    strides,
    padding='valid',
    data_format='channels_last',
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use keras.layers.AveragePooling2D instead.


#### 参数：
- **`inputs`** : The tensor over which to pool. Must have rank 4.
- **`pool_size`** : An integer or tuple/list of 2 integers: (pool_height, pool_width)specifying the size of the pooling window.Can be a single integer to specify the same value forall spatial dimensions.
- **`strides`** : An integer or tuple/list of 2 integers,specifying the strides of the pooling operation.Can be a single integer to specify the same value forall spatial dimensions.
- **`padding`** : A string. The padding method, either 'valid' or 'same'.Case-insensitive.
- **`data_format`** : A string. The ordering of the dimensions in the inputs. `channels_last`  (default) and  `channels_first`  are supported. `channels_last`  corresponds to inputs with shape `(batch, height, width, channels)`  while  `channels_first`  corresponds toinputs with shape  `(batch, channels, height, width)` .
- **`name`** : A string, the name of the layer.


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
