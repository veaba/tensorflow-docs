

## Class  `CheckpointSaverListener` 
在检查点保存之前或之后执行操作的侦听器的接口。

**别名** : [ `tf.compat.v1.estimator.CheckpointSaverListener` ](/api_docs/python/tf/estimator/CheckpointSaverListener), [ `tf.compat.v1.train.CheckpointSaverListener` ](/api_docs/python/tf/estimator/CheckpointSaverListener), [ `tf.compat.v2.estimator.CheckpointSaverListener` ](/api_docs/python/tf/estimator/CheckpointSaverListener)

 `CheckpointSaverListener`  triggers only in steps when  `CheckpointSaverHook`  istriggered, and provides callbacks at the following points: - before using the session - before each call to  `Saver.save()`  - after each call to  `Saver.save()`  - at the end of session

To use a listener, implement a class and pass the listener to a `CheckpointSaverHook` , as in this example:

```
 class ExampleCheckpointSaverListener(CheckpointSaverListener):
  def begin(self):
    # You can add ops to the graph here.
    print('Starting the session.')
    self.your_tensor = ...

  def before_save(self, session, global_step_value):
    print('About to write a checkpoint')

  def after_save(self, session, global_step_value):
    print('Done writing checkpoint.')
    if decided_to_stop_training():
      return True

  def end(self, session, global_step_value):
    print('Done with the session.')

...
listener = ExampleCheckpointSaverListener()
saver_hook = tf.estimator.CheckpointSaverHook(
    checkpoint_dir, listeners=[listener])
with
tf.compat.v1.train.MonitoredTrainingSession(chief_only_hooks=[saver_hook]):
  ...
 
```

A  `CheckpointSaverListener`  may simply take some action after everycheckpoint save. It is also possible for the listener to use its own scheduleto act less frequently, e.g. based on global_step_value. In this case,implementors should implement the  `end()`  method to handle actions related tothe last checkpoint save. But the listener should not act twice if `after_save()`  already handled this last checkpoint save.

A  `CheckpointSaverListener`  can request training to be stopped, by returningTrue in  `after_save` . Please note that, in replicated distributed trainingsetting, only  `chief`  should use this behavior. Otherwise each worker will dotheir own evaluation, which may be wasteful of resources.

## 方法


###  `after_save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L505-L506)

```
 after_save(
    session,
    global_step_value
)
 
```

###  `before_save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L502-L503)

```
 before_save(
    session,
    global_step_value
)
 
```

###  `begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L499-L500)

```
 begin()
 
```

###  `end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_session_run_hooks.py#L508-L509)

```
 end(
    session,
    global_step_value
)
 
```

