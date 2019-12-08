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


<aside class="warning">**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.
Instructions for updating:
Use keras.layers.AveragePooling1D instead.</aside>


#### Arguments:

- **`inputs`** : The tensor over which to pool. Must have rank 3.

- **`pool_size`** : An integer or tuple/list of a single integer,
representing the size of the pooling window.

- **`strides`** : An integer or tuple/list of a single integer, specifying the
strides of the pooling operation.

- **`padding`** : A string. The padding method, either 'valid' or 'same'.
Case-insensitive.

- **`data_format`** : A string, one of  `channels_last`  (default) or  `channels_first` .
The ordering of the dimensions in the inputs.
 `channels_last`  corresponds to inputs with shape
 `(batch, length, channels)`  while  `channels_first`  corresponds to
inputs with shape  `(batch, channels, length)` .

- **`name`** : A string, the name of the layer.



#### Returns:
The output tensor, of rank 3.



#### Raises:

- **`ValueError`** : if eager execution is enabled.

