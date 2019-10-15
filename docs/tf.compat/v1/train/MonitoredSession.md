## Class MonitoredSession

Session-like object that handles initialization, recovery and hooks.
#### Example usage:

```
 saver_hook = CheckpointSaverHook(...)
summary_hook = SummarySaverHook(...)
with MonitoredSession(session_creator=ChiefSessionCreator(...),
                      hooks=[saver_hook, summary_hook]) as sess:
  while not sess.should_stop():
    sess.run(train_op)
```

Initialization: At creation time the monitored session does following things in given order:
- calls `hook.begin`() for each given hook
- finalizes the graph via `scaffold.finalize`()
- create session
- initializes the model via initialization ops provided by `Scaffold`
- restores variables if a checkpoint exists
- launches queue runners
- calls `hook.after_create_session`()

Run: When run() is called, the monitored session does following things:
- calls `hook.before_run`()
- calls TensorFlow `session.run`() with merged fetches and feed_dict
- calls `hook.after_run`()
- returns result of `session.run`() asked by user
- if `AbortedError` or `UnavailableError` occurs, it recovers or reinitializes the session before executing the run() call again

Exit: At the close(), the monitored session does following things in order:
- calls `hook.end`()
- closes the queue runners and the session
- suppresses `OutOfRange` error which indicates that all inputs have been processed if the monitored_session is used as a context
[tf.compat.v1.Session](https://www.tensorflow.org/api_docs/python/tf/compat/v1/Session)How to set  arguments:

- ``I``n`` ``m``o``s``t`` ``c``a``s``e``s`` ``y``o``u`` ``c``a``n`` ``s``e``t`` ``s``e``s``s``i``o``n`` ``a``r``g``u``m``e``n``t``s`` ``a``s`` ``f``o``l``l``o``w``s``:``

```
 MonitoredSession(
  session_creator=ChiefSessionCreator(master=..., config=...))
```
- ``I``n`` ``d``i``s``t``r``i``b``u``t``e``d`` ``s``e``t``t``i``n``g`` ``f``o``r`` ``a`` ``n``o``n``-``c``h``i``e``f`` ``w``o``r``k``e``r``,`` ``y``o``u`` ``c``a``n`` ``u``s``e`` ``f``o``l``l``o``w``i``n``g``:``

```
 MonitoredSession(
  session_creator=WorkerSessionCreator(master=..., config=...))
```

See MonitoredTrainingSession for an example usage based on chief or worker.
- ``i``t`` ``c``a``n``n``o``t`` ``b``e`` ``s``e``t`` ``a``s`` ``d``e``f``a``u``l``t`` ``s``e``s``s``i``o``n``.``
- ``i``t`` ``c``a``n``n``o``t`` ``b``e`` ``s``e``n``t`` ``t``o`` ``s``a``v``e``r``.``s``a``v``e``.``
- ``i``t`` ``c``a``n``n``o``t`` ``b``e`` ``s``e``n``t`` ``t``o`` ``t``f``.``t``r``a``i``n``.``s``t``a``r``t``_``q``u``e``u``e``_``r``u``n``n``e``r``s``.``
#### Args:
- `session_creator`: A factory object to create session. Typically a `ChiefSessionCreator` which is the default one.
- `hooks`: An iterable of `SessionRunHook' objects.
#### Returns:

A MonitoredSession object.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L1006-L1014)


```
 __init__(
    session_creator=None,
    hooks=None,
    stop_grace_period_secs=120
)
```

Sets up a Monitored or Hooked Session.
#### Args:
- `session_creator`: A factory object to create session. Typically a `ChiefSessionCreator` or a `WorkerSessionCreator`.
- `hooks`: An iterable of `SessionRunHook' objects.
- `should_recover`: A bool. Indicates whether to recover from `AbortedError` and `UnavailableError` or not.
- `stop_grace_period_secs`: Number of seconds given to threads to stop after `close`() has been called.
## Child Classes
[class StepContext](https://www.tensorflow.org/api_docs/python/tf/compat/v1/train/MonitoredSession/StepContext)

## Properties
### graph

The graph that was launched in this session.
## Methods
### __enter__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L855-L856)


```
 __enter__()
```
### __exit__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L858-L863)


```
 __exit__(
    exception_type,
    exception_value,
    traceback
)
```
### close
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L852-L853)


```
 close()
```
### run
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L736-L754)


```
 run(
    fetches,
    feed_dict=None,
    options=None,
    run_metadata=None
)
```

Run ops in the monitored session.

This method is completely compatible with the tf.Session.run() method.
#### Args:
- `fetches`: Same as `tf.Session.run`().
- `feed_dict`: Same as `tf.Session.run`().
- `options`: Same as `tf.Session.run`().
- `run_metadata`: Same as `tf.Session.run`().
#### Returns:

Same as tf.Session.run().
### run_step_fn
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L756-L810)


```
 run_step_fn(step_fn)
```

Run ops using a step function.
#### Args:
- `step_fn`: A function or a method with a single argument of type `StepContext`. The function may use methods of the argument to perform computations with access to a raw session. The returned value of the `step_fn` will be returned from `run_step_fn`, unless a stop is requested. In that case, the next `should_stop` call will return True. Example usage:
#### Returns:

Returns the returned value of step_fn.
#### Raises:
- `StopIteration`: if `step_fn` has called `request_stop`(). It may be caught by `with tf.MonitoredSession`() to close the session.
- `ValueError`: if `step_fn` doesn't have a single argument called `step_context`. It may also optionally have `self` for cases when it belongs to an object.
### should_stop
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L849-L850)


```
 should_stop()
```
