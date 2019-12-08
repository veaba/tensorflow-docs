

## Class  `StopAtStepHook` 
Hook that requests stop at a specified step.

Inherits From: [ `SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)



### Aliases:

- Class [ `tf.compat.v1.estimator.StopAtStepHook` ](/api_docs/python/tf/estimator/StopAtStepHook)

- Class [ `tf.compat.v1.train.StopAtStepHook` ](/api_docs/python/tf/estimator/StopAtStepHook)

- Class [ `tf.compat.v2.estimator.StopAtStepHook` ](/api_docs/python/tf/estimator/StopAtStepHook)



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L393-L417)



```
 __init__(
    num_steps=None,
    last_step=None
)
 
```

Initializes a  `StopAtStepHook` .

This hook requests stop after either a number of steps have been
executed or a last step has been reached. Only one of the two options can be
specified.

if  `num_steps`  is specified, it indicates the number of steps to execute
after  `begin()`  is called. If instead  `last_step`  is specified, it
indicates the last step we want to execute, as passed to the  `after_run()` 
call.



#### Args:

- **`num_steps`** : Number of steps to execute.

- **`last_step`** : Step after which to stop.



#### Raises:

- **`ValueError`** : If one of the arguments is invalid.



## Methods


###  `after_create_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L424-L427)



```
 after_create_session(
    session,
    coord
)
 
```

Called when new TensorFlow session is created.

This is called to signal the hooks that a new session has been created. This
has two essential differences with the situation in which  `begin`  is called:


- When this is called, the graph is finalized and ops can no longer be added
to the graph.

- This method will also be called as a result of recovering a wrapped
session, not only at the beginning of the overall session.



#### Args:

- **`session`** : A TensorFlow Session that has been created.

- **`coord`** : A Coordinator object which keeps track of all threads.



###  `after_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L432-L442)



```
 after_run(
    run_context,
    run_values
)
 
```

Called after each call to run().

The  `run_values`  argument contains results of requested ops/tensors by
 `before_run()` .

The  `run_context`  argument is the same one send to  `before_run`  call.
 `run_context.request_stop()`  can be called to stop the iteration.

If  `session.run()`  raises any exceptions then  `after_run()`  is not called.



#### Args:

- **`run_context`** : A  `SessionRunContext`  object.

- **`run_values`** : A SessionRunValues object.



###  `before_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L429-L430)



```
 before_run(run_context)
 
```

Called before each call to run().

You can return from this call a  `SessionRunArgs`  object indicating ops or
tensors to add to the upcoming  `run()`  call.  These ops/tensors will be run
together with the ops/tensors originally passed to the original run() call.
The run args you return can also contain feeds to be added to the run()
call.

The  `run_context`  argument is a  `SessionRunContext`  that provides
information about the upcoming  `run()`  call: the originally requested
op/tensors, the TensorFlow Session.

At this point graph is finalized and you can not add ops.



#### Args:

- **`run_context`** : A  `SessionRunContext`  object.



#### Returns:
None or a  `SessionRunArgs`  object.



###  `begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L419-L422)



```
 begin()
 
```

Called once before using the session.

When called, the default graph is the one that will be launched in the
session.  The hook can modify the graph by adding new operations to it.
After the  `begin()`  call the graph will be finalized and the other callbacks
can not modify the graph anymore. Second call of  `begin()`  on the same
graph, should not change the graph.



###  `end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L171-L186)



```
 end(session)
 
```

Called at the end of session.

The  `session`  argument can be used in case the hook wants to run final ops,
such as saving a last checkpoint.

If  `session.run()`  raises exception other than OutOfRangeError or
StopIteration then  `end()`  is not called.
Note the difference between  `end()`  and  `after_run()`  behavior when
 `session.run()`  raises OutOfRangeError or StopIteration. In that case
 `end()`  is called but  `after_run()`  is not called.



#### Args:

- **`session`** : A TensorFlow Session that will be soon closed.

