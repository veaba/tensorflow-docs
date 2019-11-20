[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L215-L263)  
---  
  
## Class `SessionRunContext`

Provides information about the `session.run()` call being made.

### Aliases:

  * Class [`tf.compat.v1.estimator.SessionRunContext`](/api_docs/python/tf/estimator/SessionRunContext)
  * Class [`tf.compat.v1.train.SessionRunContext`](/api_docs/python/tf/estimator/SessionRunContext)
  * Class [`tf.compat.v2.estimator.SessionRunContext`](/api_docs/python/tf/estimator/SessionRunContext)

Provides information about original request to `Session.Run()` function.
SessionRunHook objects can stop the loop by calling `request_stop()` of
`run_context`. In the future we may use this object to add more information
about run without changing the Hook API.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L224-L228)

    
    
    __init__(
        original_args,
        session
    )
    

Initializes SessionRunContext.

## Properties

### `original_args`

A `SessionRunArgs` object holding the original arguments of `run()`.

If user called `MonitoredSession.run(fetches=a, feed_dict=b)`, then this field
is equal to SessionRunArgs(a, b).

#### Returns:

A `SessionRunArgs` object

### `session`

A TensorFlow session object which will execute the `run`.

### `stop_requested`

Returns whether a stop is requested or not.

If true, `MonitoredSession` stops iterations. Returns: A `bool`

## Methods

### `request_stop`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L257-L263)

    
    
    request_stop()
    

Sets stop requested field.

Hooks can use this function to request stop of iterations. `MonitoredSession`
checks whether this is called or not.

