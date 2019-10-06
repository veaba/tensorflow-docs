
Binary crossentropy between an output tensor and a target tensor.
### Aliases:
- `tf.compat.v1.keras.backend.binary_crossentropy`
- `tf.compat.v2.keras.backend.binary_crossentropy`

```
 tf.keras.backend.binary_crossentropy(
    target,
    output,
    from_logits=False
)
```
#### Arguments:
- `target`: A tensor with the same shape as `output`.
- `output`: A tensor.
- `from_logits`: Whether `output` is expected to be a logits tensor. By default, we consider that `output` encodes a probability distribution.
#### Returns:

A tensor.
