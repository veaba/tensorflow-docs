Fused implementation of map and batch. (deprecated)
### Aliases:
- tf.compat.v1.data.experimental.map_and_batch
- tf.compat.v2.data.experimental.map_and_batch

```
 tf.data.experimental.map_and_batch(
    map_func,
    batch_size,
    num_parallel_batches=None,
    drop_remainder=False,
    num_parallel_calls=None
)
```
Maps map_func across batch_size consecutive elements of this dataset and then combines them into a batch. Functionally, it is equivalent to map followed by batch. However, by fusing the two transformations together, the implementation can be more efficient. Surfacing this transformation in the API is temporary. Once automatic input pipeline optimization is implemented, the fusing of map and batch will happen automatically and this API will be deprecated.
#### Args:
- map_func: A function mapping a nested structure of tensors to another nested structure of tensors.
- batch_size: A tf.int64 scalar tf.Tensor, representing the number of consecutive elements of this dataset to combine in a single batch.
- num_parallel_batches: (Optional.) A tf.int64 scalar tf.Tensor, representing the number of batches to create in parallel. On one hand, higher values can help mitigate the effect of stragglers. On the other hand, higher values can increase contention if CPU is scarce.
- drop_remainder: (Optional.) A tf.bool scalar tf.Tensor, representing whether the last batch should be dropped in case its size is smaller than desired; the default behavior is not to drop the smaller batch.
- num_parallel_calls: (Optional.) A tf.int32 scalar tf.Tensor, representing the number of elements to process in parallel. If not specified, batch_size * num_parallel_batches elements will be processed in parallel. If the value tf.data.experimental.AUTOTUNE is used, then the number of parallel calls is set dynamically based on available CPU.
#### Returns:
[tf.data.Dataset.apply](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

#### Raises:
- ValueError: If both num_parallel_batches and num_parallel_calls are specified.
