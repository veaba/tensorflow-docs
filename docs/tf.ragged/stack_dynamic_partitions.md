Stacks dynamic partitions of a Tensor or RaggedTensor.
### Aliases:
- `tf.compat.v1.ragged.stack_dynamic_partitions`
- `tf.compat.v2.ragged.stack_dynamic_partitions`

```
 tf.ragged.stack_dynamic_partitions(
    data,
    partitions,
    num_partitions,
    name=None
)
```
Returns a RaggedTensor `output` with `num_partitions` rows, where the row `output`[i] is formed by stacking all slices `data[j1...jN]` such that `partitions[j1...jN] = i`. Slices of `data` are stacked in row-major order.
