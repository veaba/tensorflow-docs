## Class VariableAggregation
Indicates how a distributed variable will be aggregated.
[tf.distribute.Strategy](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)

- `NONE`: This is the default, giving an error if you use a variable-update operation with multiple replicas.
- `SUM`: Add the updates across replicas.
- `MEAN`: Take the arithmetic mean ("average") of the updates across replicas.
- `ONLY_FIRST_REPLICA`: This is for when every replica is performing the same update, but we only want to perform the update once. Used, e.g., for the global step counter.
- `ONLY_FIRST_TOWER`: Deprecated alias for `ONLY_FIRST_REPLICA`.
## Class Members
- `MEAN`
- `NONE`
- `ONLY_FIRST_REPLICA`
- `SUM`
