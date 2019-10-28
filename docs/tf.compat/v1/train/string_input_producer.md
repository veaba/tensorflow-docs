Output strings (e.g. filenames) to a queue for an input pipeline. (deprecated)

```
 tf.compat.v1.train.string_input_producer(
    string_tensor,
    num_epochs=None,
    shuffle=True,
    seed=None,
    capacity=32,
    shared_name=None,
    name=None,
    cancel_op=None
)
```
#### Args:
- `string_tensor`: A 1-D string tensor with the strings to produce.
- `num_epochs`: An integer (optional). If specified, `string_input_producer` produces each string from `string_tensor` `num_epochs` times before generating an `OutOfRange` error. If not specified, `string_input_producer` can cycle through the strings in `string_tensor` an unlimited number of times.
- `shuffle`: Boolean. If true, the strings are randomly `shuffle`d within each epoch.
- `seed`: An integer (optional). Seed used if shuffle == True.
- `capacity`: An integer. Sets the queue `capacity`.
- `shared_name`: (optional). If set, this queue will be shared under the given name across multiple sessions. All sessions open to the device which has this queue will be able to access it via the `shared_name`. Using this in a distributed setting means each name will only be seen by one of the sessions which has access to this operation.
- `name`: A `name` for the operations (optional).
- `cancel_op`: Cancel op for the queue (optional).
#### Returns:
A queue with the output strings. A `QueueRunner` for the Queue is added to the current `Graph`'s `QUEUE_RUNNER` collection.
#### Raises:
- `ValueError`: If the string_tensor is a null Python list. At runtime, will fail with an assertion if string_tensor becomes a null tensor.
#### Eager Compatibility
Input pipelines based on Queues are not supported when eager execution is enabled. Please use the `tf.data` API to ingest data under eager execution.
