

## Class  `SummarySaverHook` 
Saves summaries every N steps.

Inherits From: [ `SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)



### Aliases:

- Class [ `tf.compat.v1.estimator.SummarySaverHook` ](/api_docs/python/tf/estimator/SummarySaverHook)

- Class [ `tf.compat.v1.train.SummarySaverHook` ](/api_docs/python/tf/estimator/SummarySaverHook)

- Class [ `tf.compat.v2.estimator.SummarySaverHook` ](/api_docs/python/tf/estimator/SummarySaverHook)



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L772-L808)



```
 __init__(
    save_steps=None,
    save_secs=None,
    output_dir=None,
    summary_writer=None,
    scaffold=None,
    summary_op=None
)
 
```

Initializes a  `SummarySaverHook` .



#### Args:

- **`save_steps`** :  `int` , save summaries every N steps. Exactly one of
 `save_secs`  and  `save_steps`  should be set.

- **`save_secs`** :  `int` , save summaries every N seconds.

- **`output_dir`** :  `string` , the directory to save the summaries to. Only used if
no  `summary_writer`  is supplied.

- **`summary_writer`** :  `SummaryWriter` . If  `None`  and an  `output_dir`  was passed,
one will be created accordingly.

- **`scaffold`** :  `Scaffold`  to get summary_op if it's not provided.

- **`summary_op`** :  `Tensor`  of type  `string`  containing the serialized  `Summary` 
protocol buffer or a list of  `Tensor` . They are most likely an output by
TF summary methods like [ `tf.compat.v1.summary.scalar` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/scalar) or
[ `tf.compat.v1.summary.merge_all` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/merge_all). It can be passed in as one tensor; if
more than one, they must be passed in as a list.



#### Raises:

- **`ValueError`** : Exactly one of scaffold or summary_op should be set.



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L831-L851)



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L820-L829)



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L811-L818)



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L853-L855)



```
 end(session=None)
 
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

