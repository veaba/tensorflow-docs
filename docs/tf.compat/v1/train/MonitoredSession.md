## Class MonitoredSession
Session-like object that handles initialization, recovery and hooks.
#### Example usage:

```
 saver_hook = CheckpointSaverHook(...)
summary_hook = SummarySaverHook(...)
with MonitoredSession(session_creator=ChiefSessionCreator(...),
                      hooks=[saver_hook, summary_hook]) as sess:
  while not sess.should_stop():
    sess.run(train_op)
```
Initialization: At creation time the monitored session does following things in given order:
