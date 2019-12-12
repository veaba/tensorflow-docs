

## Class  `MonitoredSession` 
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

Initialization: At creation time the monitored session does following thingsin given order:

- calls  `hook.begin()`  for each given hook
- finalizes the graph via  `scaffold.finalize()` 
- create session
- initializes the model via initialization ops provided by  `Scaffold` 
- restores variables if a checkpoint exists
- launches queue runners
- calls  `hook.after_create_session()` 
Run: When  `run()`  is called, the monitored session does following things:

- calls  `hook.before_run()` 
- calls TensorFlow  `session.run()`  with merged fetches and feed_dict
- calls  `hook.after_run()` 
- returns result of  `session.run()`  asked by user
- if  `AbortedError`  or  `UnavailableError`  occurs, it recovers orreinitializes the session before executing the run() call again
Exit: At the  `close()` , the monitored session does following things in order:

- calls  `hook.end()` 
- closes the queue runners and the session
- suppresses  `OutOfRange`  error which indicates that all inputs have beenprocessed if the monitored_session is used as a context
How to set [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) arguments:

- In most cases you can set session arguments as follows:


```
 MonitoredSession(
  session_creator=ChiefSessionCreator(master=..., config=...))
 
```

- In distributed setting for a non-chief worker, you can use following:


```
 MonitoredSession(
  session_creator=WorkerSessionCreator(master=..., config=...))
 
```

See  `MonitoredTrainingSession`  for an example usage based on chief or worker.


**Note:**  This is not a [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session). For example, it cannot dofollowing:
- it cannot be set as default session.
- it cannot be sent to saver.save.
- it cannot be sent to tf.train.start_queue_runners.


#### Args:
- **`session_creator`** : A factory object to create session. Typically a `ChiefSessionCreator`  which is the default one.
- **`hooks`** : An iterable of `SessionRunHook' objects.


#### Returns:
A MonitoredSession object.

##  `__init__` 
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
- **`session_creator`** : A factory object to create session. Typically a `ChiefSessionCreator`  or a  `WorkerSessionCreator` .
- **`hooks`** : An iterable of `SessionRunHook' objects.
- **`should_recover`** : A bool. Indicates whether to recover from  `AbortedError` and  `UnavailableError`  or not.
- **`stop_grace_period_secs`** : Number of seconds given to threads to stop after `close()`  has been called.


## Child Classes
[ `class StepContext` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MonitoredSession/StepContext)

## Properties


###  `graph` 
The graph that was launched in this session.

## Methods


###  `__enter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L855-L856)

```
 __enter__()
 
```

###  `__exit__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L858-L863)

```
 __exit__(
    exception_type,
    exception_value,
    traceback
)
 
```

###  `close` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L852-L853)

```
 close()
 
```

###  `run` 
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

This method is completely compatible with the  `tf.Session.run()`  method.

#### Args:
- **`fetches`** : Same as  `tf.Session.run()` .
- **`feed_dict`** : Same as  `tf.Session.run()` .
- **`options`** : Same as  `tf.Session.run()` .
- **`run_metadata`** : Same as  `tf.Session.run()` .


#### Returns:
Same as  `tf.Session.run()` .

###  `run_step_fn` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L756-L810)

```
 run_step_fn(step_fn)
 
```

Run ops using a step function.

#### Args:
- **`step_fn`** : A function or a method with a single argument of type `StepContext` .  The function may use methods of the argument to performcomputations with access to a raw session.  The returned value of the `step_fn`  will be returned from  `run_step_fn` , unless a stop isrequested.  In that case, the next  `should_stop`  call will return True.Example usage:


```
 with tf.Graph().as_default():
  c = tf.compat.v1.placeholder(dtypes.float32)
  v = tf.add(c, 4.0)
  w = tf.add(c, 0.5)
  def step_fn(step_context):
    a = step_context.session.run(fetches=v, feed_dict={c: 0.5})
    if a <= 4.5:
      step_context.request_stop()
      return step_context.run_with_hooks(fetches=w,
                                         feed_dict={c: 0.1})

  with tf.MonitoredSession() as session:
    while not session.should_stop():
      a = session.run_step_fn(step_fn)
  Hooks interact with the `run_with_hooks()` call inside the
       `step_fn` as they do with a `MonitoredSession.run` call.
 
```

#### Returns:
Returns the returned value of  `step_fn` .

#### Raises:
- **`StopIteration`** : if  `step_fn`  has called  `request_stop()` .  It may becaught by  `with tf.MonitoredSession()`  to close the session.
- **`ValueError`** : if  `step_fn`  doesn't have a single argument called `step_context` . It may also optionally have  `self`  for cases when itbelongs to an object.


###  `should_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L849-L850)

```
 should_stop()
 
```

