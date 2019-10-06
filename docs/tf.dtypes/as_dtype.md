
Converts the given type_value to a DType.
### Aliases:
- `tf.as_dtype`
- `tf.compat.v1.as_dtype`
- `tf.compat.v1.dtypes.as_dtype`
- `tf.compat.v2.as_dtype`
- `tf.compat.v2.dtypes.as_dtype`

```
 tf.dtypes.as_dtype(type_value)
```
#### Args:
- `type_value`: A value that can be converted to a `tf.DType` object. This may currently be a `tf.DType` object, a `DataType` enum, a string type name, or a `numpy.dtype`.
#### Returns:

A DType corresponding to type_value.
#### Raises:
- `TypeError`: If `type_value` cannot be converted to a `DType`.
