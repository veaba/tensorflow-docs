

## Class  `CheckpointManager` 
删除旧检查点。

**别名** : [ `tf.compat.v1.train.CheckpointManager` ](/api_docs/python/tf/train/CheckpointManager), [ `tf.compat.v2.train.CheckpointManager` ](/api_docs/python/tf/train/CheckpointManager)

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)


### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)


#### 示例用法：


```
 import, max_to_keep=5)
status = checkpoint.restore(manager.latest_checkpoint)
如果是真的：
  # train
  manager.save()
 
```

 `CheckpointManager`  preserves its own state across instantiations (see the `__init__`  documentation for details). Only one should be active in aparticular directory at a time.

##  `__init__` 
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

Configure a  `CheckpointManager`  for use in  `directory` .

If a  `CheckpointManager`  was previously used in  `directory` , itsstate will be restored. This includes the list of managed checkpoints andthe timestamp bookkeeping necessary to support `keep_checkpoint_every_n_hours` . The behavior of the new  `CheckpointManager` will be the same as the previous  `CheckpointManager` , including cleaning upexisting checkpoints if appropriate.

Checkpoints are only considered for deletion just after a new checkpoint hasbeen added. At that point,  `max_to_keep`  checkpoints will remain in an"active set". Once a checkpoint is preserved by `keep_checkpoint_every_n_hours`  it will not be deleted by this `CheckpointManager`  or any future  `CheckpointManager`  instantiated in `directory`  (regardless of the new setting of `keep_checkpoint_every_n_hours` ). The  `max_to_keep`  checkpoints in theactive set may be deleted by this  `CheckpointManager`  or a future `CheckpointManager`  instantiated in  `directory`  (subject to its `max_to_keep`  and  `keep_checkpoint_every_n_hours`  settings).

#### 参数：
- **`checkpoint`** : The [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) instance to save and managecheckpoints for.
- **`directory`** : The path to a directory in which to write checkpoints. Aspecial file named "checkpoint" is also written to this directory (in ahuman-readable text format) which contains the state of the `CheckpointManager` .
- **`max_to_keep`** : An integer, the number of checkpoints to keep. Unlesspreserved by  `keep_checkpoint_every_n_hours` , checkpoints will bedeleted from the active set, oldest first, until only  `max_to_keep` checkpoints remain. If  `None` , no checkpoints are deleted and everythingstays in the active set. Note that  `max_to_keep=None`  will keep allcheckpoint paths in memory and in the checkpoint state protocol bufferon disk.
- **`keep_checkpoint_every_n_hours`** : Upon removal from the active set, acheckpoint will be preserved if it has been at least `keep_checkpoint_every_n_hours`  since the last preserved checkpoint. Thedefault setting of  `None`  does not preserve any checkpoints in this way.
- **`checkpoint_name`** : Custom name for the checkpoint file.


#### 加薪：
- **`ValueError`** : If  `max_to_keep`  is not a positive integer.


## 属性


###  `checkpoints` 
管理的检查点列表。

Note that checkpoints saved due to  `keep_checkpoint_every_n_hours`  will notshow up in this list (to avoid ever-growing filename lists).

#### 返回：
A list of filenames, sorted from oldest to newest.

###  `latest_checkpoint` 
The prefix of the most recent checkpoint in  `directory` .

Equivalent to [ `tf.train.latest_checkpoint(directory)` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint) where  `directory`  isthe constructor argument to  `CheckpointManager` .

Suitable for passing to [ `tf.train.Checkpoint.restore` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#restore) to resume training.

#### 返回：
The checkpoint prefix. If there are no checkpoints, returns  `None` .

## 方法


###  `save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_management.py#L679-L737)

```
 save(checkpoint_number=None)
 
```

创建并管理新的检查点。

#### 参数：
- **`checkpoint_number`** : An optional integer, or an integer-dtype  `Variable`  or `Tensor` , used to number the checkpoint. If  `None`  (default),checkpoints are numbered using  `checkpoint.save_counter` . Even if `checkpoint_number`  is provided,  `save_counter`  is still incremented. Auser-provided  `checkpoint_number`  is not incremented even if it is a `Variable` .


#### 返回：
The path to the new checkpoint. It is also recorded in the  `checkpoints` and  `latest_checkpoint`  properties.

