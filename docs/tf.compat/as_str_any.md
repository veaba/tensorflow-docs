Converts input to str type.
### Aliases:
- tf.compat.v1.compat.as_str_any
- tf.compat.v2.compat.as_str_any

```
 tf.compat.as_str_any(value)
```
Uses str(value), except for bytes typed inputs, which are converted using as_str.
#### Args:
- value: A object that can be converted to str.
#### Returns:
A str object.
