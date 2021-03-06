

## Class  `SessionRunContext` 
Provides information about the  `session.run()`  call being made.

**别名** : [ `tf.compat.v1.estimator.SessionRunContext` ](/api_docs/python/tf/estimator/SessionRunContext), [ `tf.compat.v1.train.SessionRunContext` ](/api_docs/python/tf/estimator/SessionRunContext), [ `tf.compat.v2.estimator.SessionRunContext` ](/api_docs/python/tf/estimator/SessionRunContext)

Provides information about original request to  `Session.Run()`  function.SessionRunHook objects can stop the loop by calling  `request_stop()`  of `run_context` . In the future we may use this object to add more informationabout run without changing the Hook API.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L224-L228)

```
 __init__(
    original_args,
    session
)
 
```

初始化SessionRunContext。

## 属性


###  `original_args` 
A  `SessionRunArgs`  object holding the original arguments of  `run()` .

If user called  `MonitoredSession.run(fetches=a, feed_dict=b)` , then thisfield is equal to SessionRunArgs(a, b).

#### 返回：
A  `SessionRunArgs`  object

###  `session` 
A TensorFlow session object which will execute the  `run` .

###  `stop_requested` 
返回是否请求停止。

If true,  `MonitoredSession`  stops iterations.Returns:  A  `bool` 

## 方法


###  `request_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L257-L263)

```
 request_stop()
 
```

设置停止请求字段。

Hooks can use this function to request stop of iterations. `MonitoredSession`  checks whether this is called or not.

