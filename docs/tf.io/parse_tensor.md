Defined in generated file: python/ops/gen_parsing_ops.py
Transforms a serialized tensorflow.TensorProto proto into a Tensor.
### Aliases:
- tf.compat.v1.io.parse_tensor
- tf.compat.v1.parse_tensor
- tf.compat.v2.io.parse_tensor

```
 tf.io.parse_tensor(
    serialized,
    out_type,
    name=None
)
```
#### Args:
- serialized: A Tensor of type string. A scalar string containing a serialized TensorProto proto.
- out_type: A tf.DType. The type of the serialized tensor. The provided type must match the type of the serialized tensor and no implicit conversion will take place.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type out_type.
