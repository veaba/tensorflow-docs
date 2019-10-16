
Static assert that values is a "proper" iterable.
### Aliases:
- `tf.compat.v1.assert_proper_iterable`
- `tf.compat.v1.debugging.assert_proper_iterable`
- `tf.compat.v2.debugging.assert_proper_iterable`

```
 tf.debugging.assert_proper_iterable(values)
```

Ops that expect iterables of Tensor can call this to validate input. Useful since Tensor, ndarray, byte/text type are all iterables themselves.
#### Args:
- `values`: Object to be checked.
#### Raises:
- `TypeError`: If `values` is not iterable or is one of `Tensor`, `SparseTensor`, `np.array`, `tf.compat.bytes_or_text_types`.
