Writes a summary using raw `tf.compat.v1.Summary` protocol buffers.
### Aliases:
- `tf.compat.v2.summary.experimental.write_raw_pb`

```
 tf.summary.experimental.write_raw_pb(
    tensor,
    step=None,
    name=None
)
```
Experimental: this exists to support the usage of V1-style manual summary writing (via the construction of a `tf.compat.v1.Summary` protocol buffer) with the V2 summary writing API.
#### Args:
- `tensor`: the string Tensor holding one or more serialized `Summary` protobufs
#### Returns:
True on success, or false if no summary was written because no default summary writer was available.
#### Raises:
