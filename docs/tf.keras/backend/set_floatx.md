
Sets the default float type.
### Aliases:
- `tf.compat.v1.keras.backend.set_floatx`
- `tf.compat.v2.keras.backend.set_floatx`

```
 tf.keras.backend.set_floatx(value)
```
#### Arguments:
- `value`: String; 'float16', 'float32', or 'float64'. Example: python from keras import backend as K K.floatx() >>> 'float32' K.set_floatx('float16') K.floatx() >>> 'float16'
#### Raises:
- `ValueError`: In case of invalid value.
