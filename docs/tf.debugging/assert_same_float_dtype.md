Validate and return float type based on `tensors` and `dtype`.
### Aliases:
- `tf.compat.v1.assert_same_float_dtype`
- `tf.compat.v1.debugging.assert_same_float_dtype`
- `tf.compat.v2.debugging.assert_same_float_dtype`

```
 tf.debugging.assert_same_float_dtype(
    tensors=None,
    dtype=None
)
```
For ops such as matrix multiplication, inputs and weights must be of the same float type. This function validates that all `tensors` are the same type, validates that type is `dtype` (if supplied), and returns the type. Type must be a floating point type. If neither `tensors` nor `dtype` is supplied, the function will return `dtype`s.float32.
#### Args:
- `tensors`: Tensors of input values. Can include `None` elements, which will be ignored.
- `dtype`: Expected type.
#### Returns:
Validated type.
#### Raises:
- `ValueError`: if neither `tensors` nor `dtype` is supplied, or result is not float, or the common type of the inputs is not a floating point type.
