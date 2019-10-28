Creates a `MonitoredSession` for training.

```
 tf.compat.v1.train.MonitoredTrainingSession(
    master='',
    is_chief=True,
    checkpoint_dir=None,
    scaffold=None,
    hooks=None,
    chief_only_hooks=None,
    save_checkpoint_secs=USE_DEFAULT,
    save_summaries_steps=USE_DEFAULT,
    save_summaries_secs=USE_DEFAULT,
    config=None,
    stop_grace_period_secs=120,
    log_step_count_steps=100,
    max_wait_secs=7200,
    save_checkpoint_steps=USE_DEFAULT,
    summary_dir=None
)
```
For a chief, this utility sets proper session initializer/restorer. It also creates hooks related to checkpoint and summary saving. For workers, this utility sets proper session creator which waits for the chief to initialize/restore. Please check `tf.compat.v1.train.MonitoredSession` for more information.
#### Args:
- `master`: `String` the TensorFlow `master` to use.
- `is_chief`: If `True`, it will take care of initialization and recovery the underlying TensorFlow session. If `False`, it will wait on a chief to initialize or recover the TensorFlow session.
- `checkpoint_dir`: A string. Optional path to a directory where to restore variables.
- `scaffold`: A `Scaffold` used for gathering or building supportive ops. If not specified, a default one is created. It's used to finalize the graph.
- `hooks`: Optional list of `SessionRunHook` objects.
- `chief_only_hooks`: list of `SessionRunHook` objects. Activate these hooks if `is_chief==True`, ignore otherwise.
- `save_checkpoint_secs`: The frequency, in seconds, that a checkpoint is saved using a default checkpoint saver. If both `save_checkpoint_steps` and `save_checkpoint_secs` are set to `None`, then the default checkpoint saver isn't used. If both are provided, then only `save_checkpoint_secs` is used. Default 600.
- `save_summaries_steps`: The frequency, in number of global steps, that the summaries are written to disk using a default summary saver. If both `save_summaries_steps` and `save_summaries_secs` are set to `None`, then the default summary saver isn't used. Default 100.
- `save_summaries_secs`: The frequency, in secs, that the summaries are written to disk using a default summary saver. If both `save_summaries_steps` and `save_summaries_secs` are set to `None`, then the default summary saver isn't used. Default not enabled.
- `config`: an instance of `tf.compat.v1.ConfigProto` proto used to `config`ure the session. It's the `config` argument of constructor of `tf.compat.v1.Session`.
#### Returns:
A `MonitoredSession` object.
