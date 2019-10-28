## Class SingularMonitoredSession
Session-like object that handles initialization, restoring, and hooks.
Please note that this utility is not recommended for distributed settings. For distributed settings, please use `tf.compat.v1.train.MonitoredSession`. The differences between `MonitoredSession` and `SingularMonitoredSession` are:
- `MonitoredSession` handles `AbortedError` and `UnavailableError` for distributed settings, but `SingularMonitoredSession` does not.
- `MonitoredSession` can be created in `chief` or `worker` modes. `SingularMonitoredSession` is always created as `chief`.
- You can access the raw `tf.compat.v1.Session` object used by `SingularMonitoredSession`, whereas in MonitoredSession the raw session is private. This can be used:
To `run` without hooks.
To save and restore.
- To `run` without hooks.
- ``T``o`` ``s``a``v``e`` ``a``n``d`` ``r``e``s``t``o``r``e``.``
- ``A``l``l`` ``o``t``h``e``r`` ``f``u``n``c``t``i``o``n``a``l``i``t``y`` ``i``s`` ``i``d``e``n``t``i``c``a``l``.``
#### Example usage:

```
 saver_hook = CheckpointSaverHook(...)
summary_hook = SummarySaverHook(...)
with SingularMonitoredSession(hooks=[saver_hook, summary_hook]) as sess:
  while not sess.should_stop():
    sess.run(train_op)
```
Initialization: At creation time the hooked session does following things in given order:
