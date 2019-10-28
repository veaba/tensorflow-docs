Records the number of bytes produced by each element of the input dataset.
### Aliases:
- `tf.compat.v1.data.experimental.bytes_produced_stats`
- `tf.compat.v2.data.experimental.bytes_produced_stats`

```
 tf.data.experimental.bytes_produced_stats(tag)
```
To consume the statistics, associate a `StatsAggregator` with the output dataset.
#### Args:
- `tag`: String. All statistics recorded by the returned transformation will be associated with the given `tag`.
#### Returns:
A `Dataset` transformation function, which can be passed to `tf.data.Dataset.apply`.
