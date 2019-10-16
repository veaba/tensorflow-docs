
Starts all queue runners collected in the graph. (deprecated)
### Aliases:
- `tf.compat.v1.train.queue_runner.start_queue_runners`

```
 tf.compat.v1.train.start_queue_runners(
    sess=None,
    coord=None,
    daemon=True,
    start=True,
    collection=tf.GraphKeys.QUEUE_RUNNERS
)
```

This is a companion method to add_queue_runner(). It just starts threads for all queue runners collected in the graph. It returns the list of all threads.
#### Args:
- `sess`: `Session` used to run the queue ops. Defaults to the default `sess`ion.
- `coord`: Optional `Coordinator` for `coord`inating the started threads.
- `daemon`: Whether the threads should be marked as `daemon`s, meaning they don't block program exit.
- `start`: Set to `False` to only create the threads, not `start` them.
- `collection`: A `GraphKey` specifying the graph `collection` to get the queue runners from. Defaults to `GraphKey`s.QUEUE_RUNNERS.
#### Raises:
- `ValueError`: if `sess` is None and there isn't any default `sess`ion.
- `TypeError`: if `sess` is not a `tf.compat.v1.Session` object.
#### Returns:

A list of threads.
#### Raises:
- `RuntimeError`: If called with eager execution enabled.
- `ValueError`: If called without a default `tf.compat.v1.Session` registered.
#### Eager Compatibility
[tf.data](https://www.tensorflow.org/api_docs/python/tf/data)Not compatible with eager execution. To ingest data under eager execution, use the  API instead.

