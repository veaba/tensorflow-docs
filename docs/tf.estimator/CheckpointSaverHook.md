## Class CheckpointSaverHook
Saves checkpoints every N steps or seconds.
Inherits From: `SessionRunHook`
### Aliases:
- Class `tf.compat.v1.estimator.CheckpointSaverHook`
- Class `tf.compat.v1.train.CheckpointSaverHook`
- Class `tf.compat.v2.estimator.CheckpointSaverHook`
## __init__
View source

```
 __init__(
    checkpoint_dir,
    save_secs=None,
    save_steps=None,
    saver=None,
    checkpoint_basename='model.ckpt',
    scaffold=None,
    listeners=None
)
```
Initializes a `CheckpointSaverHook`.
#### Args:
- `checkpoint_dir`: `str`, base directory for the checkpoint files.
- `save_secs`: `int`, save every N secs.
- `save_steps`: `int`, save every N steps.
- `saver`: `Saver` object, used for saving.
- `checkpoint_basename`: `str`, base name for the checkpoint files.
- `scaffold`: `Scaffold`, use to get saver object.
- `listeners`: List of `CheckpointSaverListener` subclass instances. Used for callbacks that run immediately before or after this hook saves the checkpoint.
#### Raises:
- `ValueError`: One of `save_steps` or `save_secs` should be set.
- `ValueError`: At most one of `saver` or `scaffold` should be set.
## Methods
### after_create_session
View source

```
 after_create_session(
    session,
    coord
)
```
Called when new TensorFlow session is created.
This is called to signal the hooks that a new session has been created. This has two essential differences with the situation in which `begin` is called:
- ``W``h``e``n`` ``t``h``i``s`` ``i``s`` ``c``a``l``l``e``d``,`` ``t``h``e`` ``g``r``a``p``h`` ``i``s`` ``f``i``n``a``l``i``z``e``d`` ``a``n``d`` ``o``p``s`` ``c``a``n`` ``n``o`` ``l``o``n``g``e``r`` ``b``e`` ``a``d``d``e``d`` ``t``o`` ``t``h``e`` ``g``r``a``p``h``.``
- ``T``h``i``s`` ``m``e``t``h``o``d`` ``w``i``l``l`` ``a``l``s``o`` ``b``e`` ``c``a``l``l``e``d`` ``a``s`` ``a`` ``r``e``s``u``l``t`` ``o``f`` ``r``e``c``o``v``e``r``i``n``g`` ``a`` ``w``r``a``p``p``e``d`` ``s``e``s``s``i``o``n``,`` ``n``o``t`` ``o``n``l``y`` ``a``t`` ``t``h``e`` ``b``e``g``i``n``n``i``n``g`` ``o``f`` ``t``h``e`` ``o``v``e``r``a``l``l`` ``s``e``s``s``i``o``n``.``
#### Args:
- `session`: A TensorFlow Session that has been created.
- `coord`: A Coordinator object which keeps track of all threads.
### after_run
View source

```
 after_run(
    run_context,
    run_values
)
```
Called after each call to run().
