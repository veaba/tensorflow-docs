
Output the rows of input_tensor to a queue for an input pipeline. (deprecated)

```
 tf.compat.v1.train.input_producer(
    input_tensor,
    element_shape=None,
    num_epochs=None,
    shuffle=True,
    seed=None,
    capacity=32,
    shared_name=None,
    summary_name=None,
    name=None,
    cancel_op=None
)
```
#### Args:
- `input_tensor`: A tensor with the rows to produce. Must be at least one-dimensional. Must either have a fully-defined shape, or `element_shape` must be defined.
- `element_shape`: (Optional.) A `TensorShape` representing the shape of a row of `input_tensor`, if it cannot be inferred.
- `num_epochs`: (Optional.) An integer. If specified `input_producer` produces each row of `input_tensor` `num_epochs` times before generating an `OutOfRange` error. If not specified, `input_producer` can cycle through the rows of `input_tensor` an unlimited number of times.
- `shuffle`: (Optional.) A boolean. If true, the rows are randomly `shuffle`d within each epoch.
- `seed`: (Optional.) An integer. The `seed` to use if `shuffle` is true.
- `capacity`: (Optional.) The `capacity` of the queue to be used for buffering the input.
- `shared_name`: (Optional.) If set, this queue will be shared under the given name across multiple sessions.
- `summary_name`: (Optional.) If set, a scalar summary for the current queue size will be generated, using this name as part of the tag.
- `name`: (Optional.) A `name` for queue.
- `cancel_op`: (Optional.) Cancel op for the queue
#### Returns:

A queue with the output rows. A QueueRunner for the queue is added to the current QUEUE_RUNNER collection of the current graph.
#### Raises:
- `ValueError`: If the shape of the input cannot be inferred from the arguments.
- `RuntimeError`: If called with eager execution enabled.
#### Eager Compatibility
[tf.data](https://www.tensorflow.org/api_docs/python/tf/data)Input pipelines based on Queues are not supported when eager execution is enabled. Please use the  API to ingest data under eager execution.

