## Class CheckpointManager

Deletes old checkpoints.
### Aliases:
- Class `tf.compat.v1.train.CheckpointManager`
- Class `tf.compat.v2.train.CheckpointManager`
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
### Used in the tutorials:
- ``C``y``c``l``e``G``A``N``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
#### Example usage:

```
 import tensorflow as tf
checkpoint = tf.train.Checkpoint(optimizer=optimizer, model=model)
manager = tf.contrib.checkpoint.CheckpointManager(
    checkpoint, directory="/tmp/model", max_to_keep=5)
status = checkpoint.restore(manager.latest_checkpoint)
while True:
  # train
  manager.save()
```

CheckpointManager preserves its own state across instantiations (see the __init__ documentation for details). Only one should be active in a particular directory at a time.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_management.py#L517-L606)


```
 __init__(
    checkpoint,
    directory,
    max_to_keep,
    keep_checkpoint_every_n_hours=None,
    checkpoint_name='ckpt'
)
```

Configure a CheckpointManager for use in directory.

If a CheckpointManager was previously used in directory, its state will be restored. This includes the list of managed checkpoints and the timestamp bookkeeping necessary to support keep_checkpoint_every_n_hours. The behavior of the new CheckpointManager will be the same as the previous CheckpointManager, including cleaning up existing checkpoints if appropriate.

Checkpoints are only considered for deletion just after a new checkpoint has been added. At that point, max_to_keep checkpoints will remain in an "active set". Once a checkpoint is preserved by keep_checkpoint_every_n_hours it will not be deleted by this CheckpointManager or any future CheckpointManager instantiated in directory (regardless of the new setting of keep_checkpoint_every_n_hours). The max_to_keep checkpoints in the active set may be deleted by this CheckpointManager or a future CheckpointManager instantiated in directory (subject to its max_to_keep and keep_checkpoint_every_n_hours settings).
#### Args:
- `checkpoint`: The `tf.train.Checkpoint` instance to save and manage `checkpoint`s for.
- `directory`: The path to a `directory` in which to write `checkpoint`s. A special file named "`checkpoint`" is also written to this `directory` (in a human-readable text format) which contains the state of the `CheckpointManager`.
- `max_to_keep`: An integer, the number of `checkpoint`s to keep. Unless preserved by `keep_checkpoint_every_n_hours`, `checkpoint`s will be deleted from the active set, oldest first, until only `max_to_keep` `checkpoint`s remain. If `None`, no `checkpoint`s are deleted and everything stays in the active set. Note that `max_to_keep`=`None` will keep all `checkpoint` paths in memory and in the `checkpoint` state protocol buffer on disk.
- `keep_checkpoint_every_n_hours`: Upon removal from the active set, a `checkpoint` will be preserved if it has been at least `keep_checkpoint_every_n_hours` since the last preserved `checkpoint`. The default setting of `None` does not preserve any `checkpoint`s in this way.
- `checkpoint`_name: Custom name for the `checkpoint` file.
#### Raises:
- `ValueError`: If `max_to_keep` is not a positive integer.
## Properties
### checkpoints

A list of managed checkpoints.

Note that checkpoints saved due to keep_checkpoint_every_n_hours will not show up in this list (to avoid ever-growing filename lists).
#### Returns:

A list of filenames, sorted from oldest to newest.
### latest_checkpoint

The prefix of the most recent checkpoint in directory.
[tf.train.latest_checkpoint(directory)](https://www.tensorflow.org/api_docs/python/tf/train/latest_checkpoint)Equivalent to  where directory is the constructor argument to CheckpointManager.

[tf.train.Checkpoint.restore](https://www.tensorflow.org/api_docs/python/tf/train/Checkpoint#restore)Suitable for passing to  to resume training.

#### Returns:

The checkpoint prefix. If there are no checkpoints, returns None.
## Methods
### save
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_management.py#L679-L737)


```
 save(checkpoint_number=None)
```

Creates a new checkpoint and manages it.
#### Args:
- `checkpoint_number`: An optional integer, or an integer-dtype `Variable` or `Tensor`, used to number the checkpoint. If `None` (default), checkpoints are numbered using `checkpoint.save_counter`. Even if `checkpoint_number` is provided, `save_counter` is still incremented. A user-provided `checkpoint_number` is not incremented even if it is a `Variable`.
#### Returns:

The path to the new checkpoint. It is also recorded in the checkpoints and latest_checkpoint properties.
