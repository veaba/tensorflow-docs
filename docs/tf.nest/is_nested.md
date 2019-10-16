
Returns true if its input is a collections.abc.Sequence (except strings).
### Aliases:
- `tf.compat.v1.nest.is_nested`
- `tf.compat.v2.nest.is_nested`

```
 tf.nest.is_nested(seq)
```
#### Args:
- `seq`: an input `seq`uence.
#### Returns:

True if the sequence is a not a string and is a collections.abc.Sequence or a dict.
