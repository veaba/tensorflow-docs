Pads 5D tensor with zeros along the depth, height, width dimensions.



### Aliases:

- [ `tf.compat.v1.keras.backend.spatial_3d_padding` ](/api_docs/python/tf/keras/backend/spatial_3d_padding)

- [ `tf.compat.v2.keras.backend.spatial_3d_padding` ](/api_docs/python/tf/keras/backend/spatial_3d_padding)



```
 tf.keras.backend.spatial_3d_padding(
    x,
    padding=((1, 1), (1, 1), (1, 1)),
    data_format=None
)
 
```

Pads these dimensions with respectively
"padding[0]", "padding[1]" and "padding[2]" zeros left and right.

For 'channels_last' data_format,
the 2nd, 3rd and 4th dimension will be padded.
For 'channels_first' data_format,
the 3rd, 4th and 5th dimension will be padded.



#### Arguments:

- **`x`** : Tensor or variable.

- **`padding`** : Tuple of 3 tuples, padding pattern.

- **`data_format`** : One of  `channels_last`  or  `channels_first` .



#### Returns:
A padded 5D tensor.



#### Raises:

- **`ValueError`** : if  `data_format`  is neither
 `channels_last`  or  `channels_first` .

