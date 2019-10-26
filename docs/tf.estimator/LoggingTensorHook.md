## Class LoggingTensorHook
Prints the given tensors every N local steps, every N seconds, or at end.
[SessionRunHook](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)Inherits From: 

### Aliases:
- Class tf.compat.v1.estimator.LoggingTensorHook
- Class tf.compat.v1.train.LoggingTensorHook
- Class tf.compat.v2.estimator.LoggingTensorHook
The tensors will be printed to the log, with INFO severity. If you are not seeing the logs, you might want to add the following line after your imports:

```
   tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.INFO)
```
Note that if at_end is True, tensors should not include any tensor whose evaluation produces a side effect such as consuming additional inputs.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L188-L231)


```
 __init__(
    tensors,
    every_n_iter=None,
    every_n_secs=None,
    at_end=False,
    formatter=None
)
```
Initializes a LoggingTensorHook.
#### Args:
- tensors: dict that maps string-valued tags to tensors/tensor names, or iterable of tensors/tensor names.
- every_n_iter: int, print the values of tensors once every N local steps taken on the current worker.
- every_n_secs: int or float, print the values of tensors once every N seconds. Exactly one of every_n_iter and every_n_secs should be provided.
- at_end: bool specifying whether to print the values of tensors at the end of the run.
- formatter: function, takes dict of tag->Tensor and returns a string. If None uses default printing all tensors.
#### Raises:
- ValueError: if every_n_iter is non-positive.
## Methods
### after_create_session
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L112-L127)


```
 after_create_session(
    session,
    coord
)
```
Called when new TensorFlow session is created.
This is called to signal the hooks that a new session has been created. This has two essential differences with the situation in which begin is called:
- When this is called, the graph is finalized and ops can no longer be added to the graph.
- This method will also be called as a result of recovering a wrapped session, not only at the beginning of the overall session.
#### Args:
- session: A TensorFlow Session that has been created.
- coord: A Coordinator object which keeps track of all threads.
### after_run
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L265-L270)


```
 after_run(
    run_context,
    run_values
)
```
Called after each call to run().
The run_values argument contains results of requested ops/tensors by before_run().
The run_context argument is the same one send to before_run call. run_context.request_stop() can be called to stop the iteration.
If session.run() raises any exceptions then after_run() is not called.
#### Args:
- run_context: A SessionRunContext object.
- run_values: A SessionRunValues object.
### before_run
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L242-L247)


```
 before_run(run_context)
```
Called before each call to run().
You can return from this call a SessionRunArgs object indicating ops or tensors to add to the upcoming run() call. These ops/tensors will be run together with the ops/tensors originally passed to the original run() call. The run args you return can also contain feeds to be added to the run() call.
The run_context argument is a SessionRunContext that provides information about the upcoming run() call: the originally requested op/tensors, the TensorFlow Session.
At this point graph is finalized and you can not add ops.
#### Args:
- run_context: A SessionRunContext object.
#### Returns:
None or a SessionRunArgs object.
### begin
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L233-L240)


```
 begin()
```
Called once before using the session.
When called, the default graph is the one that will be launched in the session. The hook can modify the graph by adding new operations to it. After the begin() call the graph will be finalized and the other callbacks can not modify the graph anymore. Second call of begin() on the same graph, should not change the graph.
### end
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L272-L275)


```
 end(session)
```
Called at the end of session.
The session argument can be used in case the hook wants to run final ops, such as saving a last checkpoint.
If session.run() raises exception other than OutOfRangeError or StopIteration then end() is not called. Note the difference between end() and after_run() behavior when session.run() raises OutOfRangeError or StopIteration. In that case end() is called but after_run() is not called.
#### Args:
- session: A TensorFlow Session that will be soon closed.
