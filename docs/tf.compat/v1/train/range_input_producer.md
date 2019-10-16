
Produces the integers from 0 to limit-1 in a queue. (deprecated)

```
 tf.compat.v1.train.range_input_producer(
    limit,
    num_epochs=None,
    shuffle=True,
    seed=None,
    capacity=32,
    shared_name=None,
    name=None
)
```
#### Args:
- `limit`: An int32 scalar tensor.
- `num_epochs`: An integer (optional). If specified, `range_input_producer` produces each integer `num_epochs` times before generating an OutOfRange error. If not specified, `range_input_producer` can cycle through the integers an un`limit`ed number of times.
- `shuffle`: Boolean. If true, the integers are randomly `shuffle`d within each epoch.
- `seed`: An integer (optional). Seed used if `shuffle` == True.
- `capacity`: An integer. Sets the queue `capacity`.
- `shared_name`: (optional). If set, this queue will be shared under the given name across multiple sessions.
- `name`: A `name` for the operations (optional).
#### Returns:

A Queue with the output integers. A QueueRunner for the Queue is added to the current Graph's QUEUE_RUNNER collection.
#### Eager Compatibility
[tf.data](https://www.tensorflow.org/api_docs/python/tf/data)Input pipelines based on Queues are not supported when eager execution is enabled. Please use the  API to ingest data under eager execution.

