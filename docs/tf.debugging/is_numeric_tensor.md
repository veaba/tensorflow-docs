Returns True if the elements of tensor are numbers.
### Aliases:
- tf.compat.v1.debugging.is_numeric_tensor
- tf.compat.v1.is_numeric_tensor
- tf.compat.v2.debugging.is_numeric_tensor

```
 tf.debugging.is_numeric_tensor(tensor)
```
Specifically, returns True if the dtype of tensor is one of the following:
- tf.float32
- tf.float64
- tf.int8
- tf.int16
- tf.int32
- tf.int64
- tf.uint8
- tf.qint8
- tf.qint32
- tf.quint8
- tf.complex64
[tf.Tensor](https://tensorflow.google.cn/api_docs/python/tf/Tensor)Returns False if tensor is of a non-numeric type or if tensor is not a  object.

