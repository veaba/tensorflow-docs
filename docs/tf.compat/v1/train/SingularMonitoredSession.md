

## Class  `SingularMonitoredSession` 
Session-like object that handles initialization, restoring, and hooks.

Please note that this utility is not recommended for distributed settings.For distributed settings, please use [ `tf.compat.v1.train.MonitoredSession` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MonitoredSession).Thedifferences between  `MonitoredSession`  and  `SingularMonitoredSession`  are:

-  `MonitoredSession`  handles  `AbortedError`  and  `UnavailableError`  fordistributed settings, but  `SingularMonitoredSession`  does not.
-  `MonitoredSession`  can be created in  `chief`  or  `worker`  modes. `SingularMonitoredSession`  is always created as  `chief` .
- You can access the raw [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) object used by `SingularMonitoredSession` , whereas in MonitoredSession the raw session isprivate. This can be used:
- All other functionality is identical.
    - To  `run`  without hooks.
    - To save and restore.


#### 示例用法：


```
 saver_hook = CheckpointSaverHook(...)
summary_hook = SummarySaverHook(...)
with SingularMonitoredSession(hooks=[saver_hook, summary_hook]) as sess:
  while not sess.should_stop():
    sess.run(train_op)
 
```

Initialization: At creation time the hooked session does following thingsin given order:

- calls  `hook.begin()`  for each given hook
- finalizes the graph via  `scaffold.finalize()` 
- create session
- initializes the model via initialization ops provided by  `Scaffold` 
- restores variables if a checkpoint exists
- launches queue runners
Run: When  `run()`  is called, the hooked session does following things:

- calls  `hook.before_run()` 
- calls TensorFlow  `session.run()`  with merged fetches and feed_dict
- calls  `hook.after_run()` 
- returns result of  `session.run()`  asked by user
Exit: At the  `close()` , the hooked session does following things in order:

- calls  `hook.end()` 
- closes the queue runners and the session
- suppresses  `OutOfRange`  error which indicates that all inputs have beenprocessed if the  `SingularMonitoredSession`  is used as a context.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L1071-L1104)

```
 __init__(
    hooks=None,
    scaffold=None,
    master='',
    config=None,
    checkpoint_dir=None,
    stop_grace_period_secs=120,
    checkpoint_filename_with_path=None
)
 
```

创建奇点监视会话。

#### 参数：
- **`hooks`** : An iterable of `SessionRunHook' objects.
- **`scaffold`** : A  `Scaffold`  used for gathering or building supportive ops. Ifnot specified a default one is created. It's used to finalize the graph.
- **`master`** :  `String`  representation of the TensorFlow master to use.
- **`config`** :  `ConfigProto`  proto used to configure the session.
- **`checkpoint_dir`** : A string.  Optional path to a directory where to restorevariables.
- **`stop_grace_period_secs`** : Number of seconds given to threads to stop after `close()`  has been called.
- **`checkpoint_filename_with_path`** : A string. Optional path to a checkpointfile from which to restore variables.


## 子类
[ `class StepContext` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MonitoredSession/StepContext)

## 属性


###  `graph` 
在此会话中启动的图表。

## 方法


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

###  `raw_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L1106-L1108)

```
 raw_session()
 
```

Returns underlying  `TensorFlow.Session`  object.

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

在监视的会话中运行操作。

This method is completely compatible with the  `tf.Session.run()`  method.

#### 参数：
- **`fetches`** : Same as  `tf.Session.run()` .
- **`feed_dict`** : Same as  `tf.Session.run()` .
- **`options`** : Same as  `tf.Session.run()` .
- **`run_metadata`** : Same as  `tf.Session.run()` .


#### 返回：
Same as  `tf.Session.run()` .

###  `run_step_fn` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L756-L810)

```
 run_step_fn(step_fn)
 
```

使用step函数运行ops。

#### 参数：
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

#### 返回：
Returns the returned value of  `step_fn` .

#### 加薪：
- **`StopIteration`** : if  `step_fn`  has called  `request_stop()` .  It may becaught by  `with tf.MonitoredSession()`  to close the session.
- **`ValueError`** : if  `step_fn`  doesn't have a single argument called `step_context` . It may also optionally have  `self`  for cases when itbelongs to an object.


###  `should_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L849-L850)

```
 should_stop()
 
```

