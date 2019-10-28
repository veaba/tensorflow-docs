Adds a `QueueRunner` to a collection in the graph. (deprecated)
### Aliases:
- `tf.compat.v1.train.queue_runner.add_queue_runner`

```
 tf.compat.v1.train.add_queue_runner(
    qr,
    collection=tf.GraphKeys.QUEUE_RUNNERS
)
```
When building a complex model that uses many queues it is often difficult to gather all the queue runners that need to be run. This convenience function allows you to add a queue runner to a well known collection in the graph.
