从“checkpoint”文件返回checkpointstate proto。

**别名** : [ `tf.compat.v1.train.get_checkpoint_state` ](/api_docs/python/tf/train/get_checkpoint_state), [ `tf.compat.v2.train.get_checkpoint_state` ](/api_docs/python/tf/train/get_checkpoint_state)

```
 tf.train.get_checkpoint_state(    checkpoint_dir,    latest_filename=None) 
```

If the "checkpoint" file contains a valid CheckpointStateproto, returns it.

#### 参数：
- **`checkpoint_dir`** : The directory of checkpoints.
- **`latest_filename`** : Optional name of the checkpoint file.  Default to'checkpoint'.


#### 返回：
A CheckpointState if the state was available, Noneotherwise.

#### 加薪：
- **`ValueError`** : if the checkpoint read doesn't have model_checkpoint_path set.
