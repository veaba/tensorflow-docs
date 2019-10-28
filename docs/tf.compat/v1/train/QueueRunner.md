## Class QueueRunner
Holds a list of enqueue operations for a queue, each to be run in a thread.
### Aliases:
- Class `tf.compat.v1.train.queue_runner.QueueRunner`
Queues are a convenient TensorFlow mechanism to compute tensors asynchronously using multiple threads. For example in the canonical 'Input Reader' setup one set of threads generates filenames in a queue; a second set of threads read records from the files, processes them, and enqueues tensors on a second queue; a third set of threads dequeues these input records to construct batches and runs them through training operations.
There are several delicate issues when running multiple threads that way: closing the queues in sequence as the input is exhausted, correctly catching and reporting exceptions, etc.
The `QueueRunner`, combined with the `Coordinator`, helps handle these issues.
#### Eager Compatibility
QueueRunners are not compatible with eager execution. Instead, please use `tf.data` to get data into your model.
## __init__
View source

```
 __init__(
    queue=None,
    enqueue_ops=None,
    close_op=None,
    cancel_op=None,
    queue_closed_exception_types=None,
    queue_runner_def=None,
    import_scope=None
)
```
Create a QueueRunner. (deprecated)
On construction the `QueueRunner` adds an op to close the queue. That op will be run if the enqueue ops raise exceptions.
