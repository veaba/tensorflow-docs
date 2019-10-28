Returns the mtimes (modification timestamps) of the checkpoints. (deprecated)

```
 tf.compat.v1.train.get_checkpoint_mtimes(checkpoint_prefixes)
```
Globs for the checkpoints pointed to by `checkpoint_prefixes`. If the files exist, collect their mtime. Both V2 and V1 checkpoints are considered, in that priority.
This is the recommended way to get the mtimes, since it takes into account the naming difference between V1 and V2 formats.
#### Args:
#### Returns:
A list of mtimes (in microseconds) of the found checkpoints.
