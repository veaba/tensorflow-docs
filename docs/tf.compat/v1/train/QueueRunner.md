

## Class  `QueueRunner` 
Holds a list of enqueue operations for a queue, each to be run in a thread.

Queues are a convenient TensorFlow mechanism to compute tensorsasynchronously using multiple threads. For example in the canonical 'InputReader' setup one set of threads generates filenames in a queue; a second setof threads read records from the files, processes them, and enqueues tensorson a second queue; a third set of threads dequeues these input records toconstruct batches and runs them through training operations.

There are several delicate issues when running multiple threads that way:closing the queues in sequence as the input is exhausted, correctly catchingand reporting exceptions, etc.

The  `QueueRunner` , combined with the  `Coordinator` , helps handle these issues.

#### 迫切的兼容性
QueueRunners are not compatible with eager execution. Instead, pleaseuse [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) to get data into your model.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/queue_runner_impl.py#L60-L118)

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


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:To construct input pipelines, use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) module.
On construction the  `QueueRunner`  adds an op to close the queue.  That opwill be run if the enqueue ops raise exceptions.

When you later call the  `create_threads()`  method, the  `QueueRunner`  willcreate one thread for each op in  `enqueue_ops` .  Each thread will run itsenqueue op in parallel with the other threads.  The enqueue ops do not haveto all be the same op, but it is expected that they all enqueue tensors in `queue` .

#### 参数：
- **`queue`** : A  `Queue` .
- **`enqueue_ops`** : List of enqueue ops to run in threads later.
- **`close_op`** : Op to close the queue. Pending enqueue ops are preserved.
- **`cancel_op`** : Op to close the queue and cancel pending enqueue ops.
- **`queue_closed_exception_types`** : Optional tuple of Exception types thatindicate that the queue has been closed when raised during an enqueueoperation.  Defaults to  `(tf.errors.OutOfRangeError,)` .  Another commoncase includes  `(tf.errors.OutOfRangeError, tf.errors.CancelledError)` ,when some of the enqueue ops may dequeue from other Queues.
- **`queue_runner_def`** : Optional  `QueueRunnerDef`  protocol buffer. If specified,recreates the QueueRunner from its contents.  `queue_runner_def`  and theother arguments are mutually exclusive.
- **`import_scope`** : Optional  `string` . Name scope to add. Only used wheninitializing from protocol buffer.


#### 加薪：
- **`ValueError`** : If both  `queue_runner_def`  and  `queue`  are both specified.
- **`ValueError`** : If  `queue`  or  `enqueue_ops`  are not provided when notrestoring from  `queue_runner_def` .
- **`RuntimeError`** : If eager execution is enabled.


## 属性


###  `cancel_op` 


###  `close_op` 


###  `enqueue_ops` 


###  `exceptions_raised` 
Exceptions raised but not handled by the  `QueueRunner`  threads.

Exceptions raised in queue runner threads are handled in one of two waysdepending on whether or not a  `Coordinator`  was passed to `create_threads()` :

- With a  `Coordinator` , exceptions are reported to the coordinator andforgotten by the  `QueueRunner` .
- Without a  `Coordinator` , exceptions are captured by the  `QueueRunner`  andmade available in this  `exceptions_raised`  property.


#### 返回：
A list of Python  `Exception`  objects.  The list is empty if no exceptionwas captured.  (No exceptions are captured when using a Coordinator.)

###  `name` 
基础队列的字符串名称。

###  `queue` 


###  `queue_closed_exception_types` 


## 方法


###  `create_threads` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/queue_runner_impl.py#L301-L356)

```
 create_threads(
    sess,
    coord=None,
    daemon=False,
    start=False
)
 
```

创建线程以运行给定会话的排队操作。

This method requires a session in which the graph was launched.  It createsa list of threads, optionally starting them.  There is one thread for eachop passed in  `enqueue_ops` .

The  `coord`  argument is an optional coordinator that the threads will useto terminate together and report exceptions.  If a coordinator is given,this method starts an additional thread to close the queue when thecoordinator requests a stop.

If previously created threads for the given session are still running, nonew threads will be created.

#### 参数：
- **`sess`** : A  `Session` .
- **`coord`** : Optional  `Coordinator`  object for reporting errors and checkingstop conditions.
- **`daemon`** : Boolean.  If  `True`  make the threads daemon threads.
- **`start`** : Boolean.  If  `True`  starts the threads.  If  `False`  thecaller must call the  `start()`  method of the returned threads.


#### 返回：
线程列表。

###  `from_proto` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/queue_runner_impl.py#L387-L391)

```
 @staticmethod
from_proto(
    queue_runner_def,
    import_scope=None
)
 
```

Returns a  `QueueRunner`  object created from  `queue_runner_def` .

###  `to_proto` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/queue_runner_impl.py#L358-L385)

```
 to_proto(export_scope=None)
 
```

Converts this  `QueueRunner`  to a  `QueueRunnerDef`  protocol buffer.

#### 参数：
- **`export_scope`** : Optional  `string` . Name scope to remove.


#### 返回：
A  `QueueRunnerDef`  protocol buffer, or  `None`  if the  `Variable`  is not inthe specified name scope.

