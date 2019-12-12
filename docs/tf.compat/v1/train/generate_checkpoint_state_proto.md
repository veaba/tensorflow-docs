Generates a checkpoint state proto.

```
 tf.compat.v1.train.generate_checkpoint_state_proto(
    save_dir,
    model_checkpoint_path,
    all_model_checkpoint_paths=None,
    all_model_checkpoint_timestamps=None,
    last_preserved_timestamp=None
)
 
```

#### Args:
- **`save_dir`** : Directory where the model was saved.
- **`model_checkpoint_path`** : The checkpoint file.
- **`all_model_checkpoint_paths`** : List of strings.  Paths to all not-yet-deletedcheckpoints, sorted from oldest to newest.  If this is a non-empty list,the last element must be equal to model_checkpoint_path.  These pathsare also saved in the CheckpointState proto.
- **`all_model_checkpoint_timestamps`** : A list of floats, indicating the number ofseconds since the Epoch when each checkpoint was generated.
- **`last_preserved_timestamp`** : A float, indicating the number of seconds sincethe Epoch when the last preserved checkpoint was written, e.g. due to a `keep_checkpoint_every_n_hours`  parameter (see `tf.contrib.checkpoint.CheckpointManager`  for an implementation).


#### Returns:
CheckpointState proto with model_checkpoint_path andall_model_checkpoint_paths updated to either absolute paths orrelative paths to the current save_dir.

#### Raises:
- **`ValueError`** : If  `all_model_checkpoint_timestamps`  was provided but its lengthdoes not match  `all_model_checkpoint_paths` .
