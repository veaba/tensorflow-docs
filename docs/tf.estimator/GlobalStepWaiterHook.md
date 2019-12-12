

## Class  `GlobalStepWaiterHook` 
Delays execution until global step reaches  `wait_until_step` .

Inherits From: [ `SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)

**别名** : [ `tf.compat.v1.estimator.GlobalStepWaiterHook` ](/api_docs/python/tf/estimator/GlobalStepWaiterHook), [ `tf.compat.v1.train.GlobalStepWaiterHook` ](/api_docs/python/tf/estimator/GlobalStepWaiterHook), [ `tf.compat.v2.estimator.GlobalStepWaiterHook` ](/api_docs/python/tf/estimator/GlobalStepWaiterHook)

This hook delays execution until global step reaches to  `wait_until_step` . Itis used to gradually start workers in distributed settings. One example usagewould be setting  `wait_until_step=int(K*log(task_id+1))`  assuming thattask_id=0 is the chief.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L887-L893)

```
 __init__(wait_until_step)
 
```

Initializes a  `GlobalStepWaiterHook` .

#### 参数：
- **`wait_until_step`** : an  `int`  shows until which global step should we wait.


## 方法


###  `after_create_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L112-L127)

```
 after_create_session(
    session,
    coord
)
 
```

在创建新的tensorflow会话时调用。

This is called to signal the hooks that a new session has been created. Thishas two essential differences with the situation in which  `begin`  is called:

- When this is called, the graph is finalized and ops can no longer be addedto the graph.
- This method will also be called as a result of recovering a wrappedsession, not only at the beginning of the overall session.


#### 参数：
- **`session`** : A TensorFlow Session that has been created.
- **`coord`** : A Coordinator object which keeps track of all threads.


###  `after_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L152-L169)

```
 after_run(
    run_context,
    run_values
)
 
```

每次调用run（）后调用。

The  `run_values`  argument contains results of requested ops/tensors by `before_run()` .

The  `run_context`  argument is the same one send to  `before_run`  call. `run_context.request_stop()`  can be called to stop the iteration.

If  `session.run()`  raises any exceptions then  `after_run()`  is not called.

#### 参数：
- **`run_context`** : A  `SessionRunContext`  object.
- **`run_values`** : A SessionRunValues object.


###  `before_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L902-L923)

```
 before_run(run_context)
 
```

在每次调用run（）之前调用。

You can return from this call a  `SessionRunArgs`  object indicating ops ortensors to add to the upcoming  `run()`  call.  These ops/tensors will be runtogether with the ops/tensors originally passed to the original run() call.The run args you return can also contain feeds to be added to the run()call.

The  `run_context`  argument is a  `SessionRunContext`  that providesinformation about the upcoming  `run()`  call: the originally requestedop/tensors, the TensorFlow Session.

此时图表已完成，无法添加操作。

#### 参数：
- **`run_context`** : A  `SessionRunContext`  object.


#### 返回：
None or a  `SessionRunArgs`  object.

###  `begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L895-L900)

```
 begin()
 
```

在使用会话之前调用一次。

When called, the default graph is the one that will be launched in thesession.  The hook can modify the graph by adding new operations to it.After the  `begin()`  call the graph will be finalized and the other callbackscan not modify the graph anymore. Second call of  `begin()`  on the samegraph, should not change the graph.

###  `end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L171-L186)

```
 end(session)
 
```

在会话结束时调用。

The  `session`  argument can be used in case the hook wants to run final ops,such as saving a last checkpoint.

If  `session.run()`  raises exception other than OutOfRangeError orStopIteration then  `end()`  is not called.Note the difference between  `end()`  and  `after_run()`  behavior when `session.run()`  raises OutOfRangeError or StopIteration. In that case `end()`  is called but  `after_run()`  is not called.

#### 参数：
- **`session`** : A TensorFlow Session that will be soon closed.
