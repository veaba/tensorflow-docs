Updates the content of the 'checkpoint' file. (deprecated)

```
 tf.compat.v1.train.update_checkpoint_state(    save_dir,    model_checkpoint_path,    all_model_checkpoint_paths=None,    latest_filename=None,    all_model_checkpoint_timestamps=None,    last_preserved_timestamp=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.train.CheckpointManager` ](https://tensorflow.google.cn/api_docs/python/tf/train/CheckpointManager) to manage checkpoints rather than manually editing the Checkpoint proto.
This updates the checkpoint file containing a CheckpointStateproto.

#### 参数：
- **`save_dir`** : Directory where the model was saved.
- **`model_checkpoint_path`** : The checkpoint file.
- **`all_model_checkpoint_paths`** : List of strings.  Paths to all not-yet-deletedcheckpoints, sorted from oldest to newest.  If this is a non-empty list,the last element must be equal to model_checkpoint_path.  These pathsare also saved in the CheckpointState proto.
- **`latest_filename`** : Optional name of the checkpoint file.  Default to'checkpoint'.
- **`all_model_checkpoint_timestamps`** : Optional list of timestamps (floats,seconds since the Epoch) indicating when the checkpoints in `all_model_checkpoint_paths`  were created.
- **`last_preserved_timestamp`** : A float, indicating the number of seconds sincethe Epoch when the last preserved checkpoint was written, e.g. due to a `keep_checkpoint_every_n_hours`  parameter (see `tf.contrib.checkpoint.CheckpointManager`  for an implementation).


#### 加薪：
- **`RuntimeError`** : If any of the model checkpoint paths conflict with the filecontaining CheckpointSate.
