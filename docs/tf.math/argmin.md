
Returns the index with the smallest value across axes of a tensor.
### Aliases:
- `tf.argmin`
- `tf.compat.v2.argmin`
- `tf.compat.v2.math.argmin`

```
 tf.math.argmin(
    input,
    axis=None,
    output_type=tf.dtypes.int64,
    name=None
)
```

Note that in case of ties the identity of the return value is not guaranteed.
#### Args:
- `input`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `complex64`, `int64`, `qint8`, `quint8`, `qint32`, `bfloat16`, `uint16`, `complex128`, `half`, `uint32`, `uint64`.
#### Returns:

A Tensor of type output_type.
#### Usage:

```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.math.argmin(input = a)
c = tf.keras.backend.eval(b)
# c = 0
# here a[0] = 1 which is the smallest element of a across axis 0
```
