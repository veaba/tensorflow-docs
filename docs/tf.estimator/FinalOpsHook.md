

## Class  `FinalOpsHook` 
A hook which evaluates  `Tensors`  at the end of a session.

Inherits From: [ `SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)

**Aliases** : [ `tf.compat.v1.estimator.FinalOpsHook` ](/api_docs/python/tf/estimator/FinalOpsHook), [ `tf.compat.v1.train.FinalOpsHook` ](/api_docs/python/tf/estimator/FinalOpsHook), [ `tf.compat.v2.estimator.FinalOpsHook` ](/api_docs/python/tf/estimator/FinalOpsHook)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L930-L941)

```
 __init__(
    final_ops,
    final_ops_feed_dict=None
)
 
```

Initializes  `FinalOpHook`  with ops to run at the end of the session.

#### Args:
- **`final_ops`** : A single  `Tensor` , a list of  `Tensors`  or a dictionary of namesto  `Tensors` .
- **`final_ops_feed_dict`** : A feed dictionary to use when running `final_ops_dict` .


## Properties


###  `final_ops_values` 


## Methods


###  `after_create_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L112-L127)

```
 after_create_session(
    session,
    coord
)
 
```

Called when new TensorFlow session is created.

This is called to signal the hooks that a new session has been created. Thishas two essential differences with the situation in which  `begin`  is called:

- When this is called, the graph is finalized and ops can no longer be addedto the graph.
- This method will also be called as a result of recovering a wrappedsession, not only at the beginning of the overall session.


#### Args:
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

Called after each call to run().

The  `run_values`  argument contains results of requested ops/tensors by `before_run()` .

The  `run_context`  argument is the same one send to  `before_run`  call. `run_context.request_stop()`  can be called to stop the iteration.

If  `session.run()`  raises any exceptions then  `after_run()`  is not called.

#### Args:
- **`run_context`** : A  `SessionRunContext`  object.
- **`run_values`** : A SessionRunValues object.


###  `before_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L129-L150)

```
 before_run(run_context)
 
```

Called before each call to run().

You can return from this call a  `SessionRunArgs`  object indicating ops ortensors to add to the upcoming  `run()`  call.  These ops/tensors will be runtogether with the ops/tensors originally passed to the original run() call.The run args you return can also contain feeds to be added to the run()call.

The  `run_context`  argument is a  `SessionRunContext`  that providesinformation about the upcoming  `run()`  call: the originally requestedop/tensors, the TensorFlow Session.

At this point graph is finalized and you can not add ops.

#### Args:
- **`run_context`** : A  `SessionRunContext`  object.


#### Returns:
None or a  `SessionRunArgs`  object.

###  `begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L101-L110)

```
 begin()
 
```

Called once before using the session.

When called, the default graph is the one that will be launched in thesession.  The hook can modify the graph by adding new operations to it.After the  `begin()`  call the graph will be finalized and the other callbackscan not modify the graph anymore. Second call of  `begin()`  on the samegraph, should not change the graph.

###  `end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L947-L967)

```
 end(session)
 
```

Called at the end of session.

The  `session`  argument can be used in case the hook wants to run final ops,such as saving a last checkpoint.

If  `session.run()`  raises exception other than OutOfRangeError orStopIteration then  `end()`  is not called.Note the difference between  `end()`  and  `after_run()`  behavior when `session.run()`  raises OutOfRangeError or StopIteration. In that case `end()`  is called but  `after_run()`  is not called.

#### Args:
- **`session`** : A TensorFlow Session that will be soon closed.
