Average Pooling layer for 1D inputs. (deprecated)

```
 tf.compat.v1.layers.average_pooling1d(
    inputs,
    pool_size,
    strides,
    padding='valid',
    data_format='channels_last',
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use keras.layers.AveragePooling1D instead.


#### 参数：
- **`inputs`** : The tensor over which to pool. Must have rank 3.
- **`pool_size`** : An integer or tuple/list of a single integer,representing the size of the pooling window.
- **`strides`** : An integer or tuple/list of a single integer, specifying thestrides of the pooling operation.
- **`padding`** : A string. The padding method, either 'valid' or 'same'.Case-insensitive.
- **`data_format`** : A string, one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, length, channels)`  while  `channels_first`  corresponds toinputs with shape  `(batch, channels, length)` .
- **`name`** : A string, the name of the layer.


#### 返回：
The output tensor, of rank 3.

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
