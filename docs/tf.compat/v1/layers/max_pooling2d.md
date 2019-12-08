Max pooling layer for 2D inputs (e.g. images). (deprecated)



```
 tf.compat.v1.layers.max_pooling2d(
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
Use keras.layers.MaxPooling2D instead.</aside>


#### Arguments:

- **`inputs`** : The tensor over which to pool. Must have rank 4.

- **`pool_size`** : An integer or tuple/list of 2 integers: (pool_height, pool_width)
specifying the size of the pooling window.
Can be a single integer to specify the same value for
all spatial dimensions.

- **`strides`** : An integer or tuple/list of 2 integers,
specifying the strides of the pooling operation.
Can be a single integer to specify the same value for
all spatial dimensions.

- **`padding`** : A string. The padding method, either 'valid' or 'same'.
Case-insensitive.

- **`data_format`** : A string. The ordering of the dimensions in the inputs.
 `channels_last`  (default) and  `channels_first`  are supported.
 `channels_last`  corresponds to inputs with shape
 `(batch, height, width, channels)`  while  `channels_first`  corresponds to
inputs with shape  `(batch, channels, height, width)` .

- **`name`** : A string, the name of the layer.



#### Returns:
Output tensor.



#### Raises:

- **`ValueError`** : if eager execution is enabled.

