Returns the cardinality of `dataset`, if known.
### Aliases:
- `tf.compat.v1.data.experimental.cardinality`
- `tf.compat.v2.data.experimental.cardinality`

```
 tf.data.experimental.cardinality(dataset)
```
The operation returns the cardinality of `dataset`. The operation may return `tf.data.experimental.INFINITE_CARDINALITY` if `dataset` contains an infinite number of elements or `tf.data.experimental.UNKNOWN_CARDINALITY` if the analysis fails to determine the number of elements in `dataset` (e.g. when the `dataset` source is a file).
#### Args:
- `dataset`: A `tf.data.Dataset` for which to determine cardinality.
#### Returns:
A scalar `tf.int64` `Tensor` representing the cardinality of `dataset`. If the cardinality is infinite or unknown, the operation returns the named constant `INFINITE_CARDINALITY` and `UNKNOWN_CARDINALITY` respectively.
