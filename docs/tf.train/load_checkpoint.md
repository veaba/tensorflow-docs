Returns  `CheckpointReader`  for checkpoint found in  `ckpt_dir_or_file` .



### Aliases:

- [ `tf.compat.v1.train.load_checkpoint` ](/api_docs/python/tf/train/load_checkpoint)

- [ `tf.compat.v2.train.load_checkpoint` ](/api_docs/python/tf/train/load_checkpoint)



```
 tf.train.load_checkpoint(ckpt_dir_or_file)
 
```

If  `ckpt_dir_or_file`  resolves to a directory with multiple checkpoints,
reader for the latest checkpoint is returned.



#### Args:

- **`ckpt_dir_or_file`** : Directory with checkpoints file or path to checkpoint
file.



#### Returns:
 `CheckpointReader`  object.



#### Raises:

- **`ValueError`** : If  `ckpt_dir_or_file`  resolves to a directory with no
checkpoints.

