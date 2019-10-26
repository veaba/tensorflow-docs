Defined in generated file: python/ops/gen_string_ops.py
Converts each entry in the given tensor to strings.
### Aliases:
- tf.as_string
- tf.compat.v1.as_string
- tf.compat.v1.dtypes.as_string
- tf.compat.v1.strings.as_string
- tf.compat.v2.as_string
- tf.compat.v2.strings.as_string

```
 tf.strings.as_string(
    input,
    precision=-1,
    scientific=False,
    shortest=False,
    width=-1,
    fill='',
    name=None
)
```
Supports many numeric types and boolean.
[https://www.tensorflow.org/tutorials/representation/unicode](https://tensorflow.google.cn/api_docs/python/tf/strings/Working%20with%20Unicode%20text)For Unicode, see the  tutorial.

#### Args:
- input: A Tensor. Must be one of the following types: int8, int16, int32, int64, complex64, complex128, float32, float64, bool.
- precision: An optional int. Defaults to -1. The post-decimal precision to use for floating point numbers. Only used if precision > -1.
- scientific: An optional bool. Defaults to False. Use scientific notation for floating point numbers.
- shortest: An optional bool. Defaults to False. Use shortest representation (either scientific or standard) for floating point numbers.
- width: An optional int. Defaults to -1. Pad pre-decimal numbers to this width. Applies to both floating point and integer numbers. Only used if width > -1.
- fill: An optional string. Defaults to "". The value to pad if width > -1. If empty, pads with spaces. Another typical value is '0'. String cannot be longer than 1 character.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type string.
