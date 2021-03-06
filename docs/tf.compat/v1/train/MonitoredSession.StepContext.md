

## Class  `StepContext` 
Control flow instrument for the  `step_fn`  from  `run_step_fn()` .

Users of  `step_fn`  may perform  `run()`  calls without running hooksby accessing the  `session` .  A  `run()`  call with hooks may be performedusing  `run_with_hooks()` .  Computation flow can be interrupted using `request_stop()` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L821-L829)

```
 __init__(
    session,
    run_with_hooks_fn
)
 
```

Initializes the  `step_context`  argument for a  `step_fn`  invocation.

#### 参数：
- **`session`** : An instance of [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session).
- **`run_with_hooks_fn`** : A function for running fetches and hooks.


## 属性


###  `session` 


## 方法


###  `request_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L839-L847)

```
 request_stop()
 
```

Exit the training loop by causing  `should_stop()`  to return  `True` .

Causes  `step_fn`  to exit by raising an exception.

#### 加薪：
停止迭代

###  `run_with_hooks` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/monitored_session.py#L835-L837)

```
 run_with_hooks(
    *args,
    **kwargs
)
 
```

Same as  `MonitoredSession.run` . Accepts the same arguments.

