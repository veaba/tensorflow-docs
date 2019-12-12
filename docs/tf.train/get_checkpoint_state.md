Returns CheckpointState proto from the "checkpoint" file.

**Aliases** : [ `tf.compat.v1.train.get_checkpoint_state` ](/api_docs/python/tf/train/get_checkpoint_state), [ `tf.compat.v2.train.get_checkpoint_state` ](/api_docs/python/tf/train/get_checkpoint_state)

```
 tf.train.get_checkpoint_state(    checkpoint_dir,    latest_filename=None) 
```

If the "checkpoint" file contains a valid CheckpointStateproto, returns it.

#### Args:
- **`checkpoint_dir`** : The directory of checkpoints.
- **`latest_filename`** : Optional name of the checkpoint file.  Default to'checkpoint'.


#### Returns:
A CheckpointState if the state was available, Noneotherwise.

#### Raises:
- **`ValueError`** : if the checkpoint read doesn't have model_checkpoint_path set.
