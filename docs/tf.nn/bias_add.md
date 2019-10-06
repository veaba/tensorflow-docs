
Adds bias to value.
### Aliases:
- `tf.compat.v1.nn.bias_add`
- `tf.compat.v2.nn.bias_add`

```
 tf.nn.bias_add(
    value,
    bias,
    data_format=None,
    name=None
)
```
[tf.add](https://www.tensorflow.org/api_docs/python/tf/math/add)This is (mostly) a special case of  where bias is restricted to 1-D. Broadcasting is supported, so value may have any number of dimensions. Unlike , the type of bias is allowed to differ from value in the case where both types are quantized.

#### Args:
- `value`: A `Tensor` with type `float`, `double`, `int64`, `int32`, `uint8`, `int16`, `int8`, `complex64`, or `complex128`.
- `bias`: A 1-D `Tensor` with size matching the channel dimension of `value`. Must be the same type as `value` unless `value` is a quantized type, in which case a different quantized type may be used.
- `data_format`: A string. 'N...C' and 'NC...' are supported.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor with the same type as value.
