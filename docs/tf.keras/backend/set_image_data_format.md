Sets the value of the image data format convention.
### Aliases:
- tf.compat.v1.keras.backend.set_image_data_format
- tf.compat.v2.keras.backend.set_image_data_format

```
 tf.keras.backend.set_image_data_format(data_format)
```
#### Arguments:
- data_format: string. 'channels_first' or 'channels_last'. Example: python from keras import backend as K K.image_data_format() >>> 'channels_first' K.set_image_data_format`('channels_last')` K.image_data_format() >>> 'channels_last'
#### Raises:
- ValueError: In case of invalid data_format value.
