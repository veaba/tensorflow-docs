
Returns an Optional that contains the next value from the iterator.
### Aliases:
- `tf.compat.v1.data.experimental.get_next_as_optional`
- `tf.compat.v2.data.experimental.get_next_as_optional`

```
 tf.data.experimental.get_next_as_optional(iterator)
```

If iterator has reached the end of the sequence, the returned Optional will have no value.
#### Args:
- `iterator`: A `tf.compat.v1.data.Iterator` object.
#### Returns:

An Optional object representing the next value from the iterator (if it has one) or no value.
