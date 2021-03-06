

## Class  `Saver` 
保存和还原变量。

See [Variables](https://tensorflow.org/guide/variables)for an overview of variables, saving and restoring.

The  `Saver`  class adds ops to save and restore variables to and from*checkpoints*.  It also provides convenience methods to run these ops.

Checkpoints are binary files in a proprietary format which map variable namesto tensor values.  The best way to examine the contents of a checkpoint is toload it using a  `Saver` .

Savers can automatically number checkpoint filenames with a provided counter.This lets you keep multiple checkpoints at different steps while training amodel.  For example you can number the checkpoint filenames with the trainingstep number.  To avoid filling up disks, savers manage checkpoint filesautomatically. For example, they can keep only the N most recent files, orone checkpoint for every N hours of training.

You number checkpoint filenames by passing a value to the optional `global_step`  argument to  `save()` :

```
 saver.save(sess, 'my-model', global_step=0) ==> filename: 'my-model-0'
...
saver.save(sess, 'my-model', global_step=1000) ==> filename: 'my-model-1000'
 
```

Additionally, optional arguments to the  `Saver()`  constructor let you controlthe proliferation of checkpoint files on disk:

-  `max_to_keep`  indicates the maximum number of recent checkpoint files tokeep.  As new files are created, older files are deleted.   If None or 0,no checkpoints are deleted from the filesystem but only the last one iskept in the  `checkpoint`  file.  Defaults to 5 (that is, the 5 most recentcheckpoint files are kept.)


-  `keep_checkpoint_every_n_hours` : In addition to keeping the most recent `max_to_keep`  checkpoint files, you might want to keep one checkpoint filefor every N hours of training.  This can be useful if you want to lateranalyze how a model progressed during a long training session.  Forexample, passing  `keep_checkpoint_every_n_hours=2`  ensures that you keepone checkpoint file for every 2 hours of training.  The default value of10,000 hours effectively disables the feature.


Note that you still have to call the  `save()`  method to save the model.Passing these arguments to the constructor will not save variablesautomatically for you.

定期保存的培训计划如下：

```
 ...
# Create a saver.
saver = tf.compat.v1.train.Saver(...variables...)
# Launch the graph and train, saving the model every 1,000 steps.
sess = tf.compat.v1.Session()
for step in xrange(1000000):
    sess.run(..training_op..)
    if step % 1000 == 0:
        # Append the step number to the checkpoint name:
        saver.save(sess, 'my-model', global_step=step)
 
```

In addition to checkpoint files, savers keep a protocol buffer on disk withthe list of recent checkpoints. This is used to manage numbered checkpointfiles and by  `latest_checkpoint()` , which makes it easy to discover the pathto the most recent checkpoint. That protocol buffer is stored in a file named'checkpoint' next to the checkpoint files.

If you create several savers, you can specify a different filename for theprotocol buffer file in the call to  `save()` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L681-L835)

```
 __init__(
    var_list=None,
    reshape=False,
    sharded=False,
    max_to_keep=5,
    keep_checkpoint_every_n_hours=10000.0,
    name=None,
    restore_sequentially=False,
    saver_def=None,
    builder=None,
    defer_build=False,
    allow_empty=False,
    write_version=tf.train.SaverDef.V2,
    pad_step_number=False,
    save_relative_paths=False,
    filename=None
)
 
```

Creates a  `Saver` .

构造函数添加操作以保存和还原变量。

 `var_list`  specifies the variables that will be saved and restored. It canbe passed as a  `dict`  or a list:

- A  `dict`  of names to variables: The keys are the names that will beused to save or restore the variables in the checkpoint files.
- A list of variables: The variables will be keyed with their op name inthe checkpoint files.


#### 例如：


```
 v1 = tf.Variable(..., name='v1')
v2 = tf.Variable(..., name='v2')

# Pass the variables as a dict:
saver = tf.compat.v1.train.Saver({'v1': v1, 'v2': v2})

# Or pass them as a list.
saver = tf.compat.v1.train.Saver([v1, v2])
# Passing a list is equivalent to passing a dict with the variable op names
# as keys:
saver = tf.compat.v1.train.Saver({v.op.name: v for v in [v1, v2]})
 
```


**Note:**  the newer  `AutoTrackable`  API is not supported by  `Saver` . In thiscase, the [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) class should be used.
The optional  `reshape`  argument, if  `True` , allows restoring a variable froma save file where the variable had a different shape, but the same numberof elements and type.  This is useful if you have reshaped a variable andwant to reload it from an older checkpoint.

The optional  `sharded`  argument, if  `True` , instructs the saver to shardcheckpoints per device.

#### 参数：
- **`var_list`** : A list of  `Variable` / `SaveableObject` , or a dictionary mappingnames to  `SaveableObject` s. If  `None` , defaults to the list of allsaveable objects.
- **`reshape`** : If  `True` , allows restoring parameters from a checkpoint wherethe variables have a different shape.
- **`sharded`** : If  `True` , shard the checkpoints, one per device.
- **`max_to_keep`** : Maximum number of recent checkpoints to keep. Defaults to 5.
- **`keep_checkpoint_every_n_hours`** : How often to keep checkpoints. Defaults to10,000 hours.
- **`name`** : String.  Optional name to use as a prefix when adding operations.
- **`restore_sequentially`** : A  `Bool` , which if true, causes restore of differentvariables to happen sequentially within each device.  This can lowermemory usage when restoring very large models.
- **`saver_def`** : Optional  `SaverDef`  proto to use instead of running thebuilder. This is only useful for specialty code that wants to recreate a `Saver`  object for a previously built  `Graph`  that had a  `Saver` . The `saver_def`  proto should be the one returned by the  `as_saver_def()` call of the  `Saver`  that was created for that  `Graph` .
- **`builder`** : Optional  `SaverBuilder`  to use if a  `saver_def`  was not provided.Defaults to  `BulkSaverBuilder()` .
- **`defer_build`** : If  `True` , defer adding the save and restore ops to the `build()`  call. In that case  `build()`  should be called beforefinalizing the graph or using the saver.
- **`allow_empty`** : If  `False`  (default) raise an error if there are no variablesin the graph. Otherwise, construct the saver anyway and make it a no-op.
- **`write_version`** : controls what format to use when saving checkpoints.  Italso affects certain filepath matching logic.  The V2 format is therecommended choice: it is much more optimized than V1 in terms of memoryrequired and latency incurred during restore.  Regardless of thisflag, the Saver is able to restore from both V2 and V1 checkpoints.
- **`pad_step_number`** : if True, pads the global step number in the checkpointfilepaths to some fixed width (8 by default).  This is turned off bydefault.
- **`save_relative_paths`** : If  `True` , will write relative paths to thecheckpoint state file. This is needed if the user wants to copy thecheckpoint directory and reload from the copied directory.
- **`filename`** : If known at graph construction time, filename used for variableloading/saving.


#### 加薪：
- **`TypeError`** : If  `var_list`  is invalid.
- **`ValueError`** : If any of the keys or values in  `var_list`  are not unique.
- **`RuntimeError`** : If eager execution is enabled and `var_list`  does not specifya list of variables to save.


#### 迫切的兼容性
When eager execution is enabled,  `var_list`  must specify a  `list`  or  `dict` of variables to save. Otherwise, a  `RuntimeError`  will be raised.

Although Saver works in some cases when executing eagerly, it isfragile. Please switch to [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) or[ `tf.keras.Model.save_weights` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#save_weights), which perform a more robust object-basedsaving. These APIs will load checkpoints written by  `Saver` .

## 属性


###  `last_checkpoints` 
List of not-yet-deleted checkpoint filenames.

You can pass any of the returned values to  `restore()` .

#### 返回：
A list of checkpoint filenames, sorted from oldest to newest.

## 方法


###  `as_saver_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L967-L973)

```
 as_saver_def()
 
```

Generates a  `SaverDef`  representation of this saver.

#### 返回：
A  `SaverDef`  proto.

###  `build` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L837-L840)

```
 build()
 
```

###  `export_meta_graph` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1210-L1254)

```
 export_meta_graph(
    filename=None,
    collection_list=None,
    as_text=False,
    export_scope=None,
    clear_devices=False,
    clear_extraneous_savers=False,
    strip_default_attrs=False,
    save_debug_info=False
)
 
```

Writes  `MetaGraphDef`  to save_path/filename.

#### 参数：
- **`filename`** : Optional meta_graph filename including the path.
- **`collection_list`** : List of string keys to collect.
- **`as_text`** : If  `True` , writes the meta_graph as an ASCII proto.
- **`export_scope`** : Optional  `string` . Name scope to remove.
- **`clear_devices`** : Whether or not to clear the device field for an  `Operation` or  `Tensor`  during export.
- **`clear_extraneous_savers`** : Remove any Saver-related information from thegraph (both Save/Restore ops and SaverDefs) that are not associated withthis Saver.
- **`strip_default_attrs`** : Boolean. If  `True` , default-valued attributes will beremoved from the NodeDefs. For a detailed guide, see[Stripping Default-ValuedAttributes](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md#stripping-default-valued-attributes).
- **`save_debug_info`** : If  `True` , save the GraphDebugInfo to a separate file,which in the same directory of filename and with  `_debug`  added beforethe file extension.


#### 返回：
A  `MetaGraphDef`  proto.

###  `from_proto` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1002-L1013)

```
 @staticmethod
from_proto(
    saver_def,
    import_scope=None
)
 
```

Returns a  `Saver`  object created from  `saver_def` .

#### 参数：
- **`saver_def`** : a  `SaverDef`  protocol buffer.
- **`import_scope`** : Optional  `string` . Name scope to use.


#### 返回：
A  `Saver`  built from saver_def.

###  `recover_last_checkpoints` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1056-L1072)

```
 recover_last_checkpoints(checkpoint_paths)
 
```

恢复崩溃后的内部保护程序状态。

This method is useful for recovering the "self._last_checkpoints" state.

Globs for the checkpoints pointed to by  `checkpoint_paths` .  If the filesexist, use their mtime as the checkpoint timestamp.

#### 参数：
- **`checkpoint_paths`** : a list of checkpoint paths.


###  `restore` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1256-L1326)

```
 restore(
    sess,
    save_path
)
 
```

恢复以前保存的变量。

This method runs the ops added by the constructor for restoring variables.It requires a session in which the graph was launched.  The variables torestore do not have to have been initialized, as restoring is itself a wayto initialize variables.

The  `save_path`  argument is typically a value previously returned from a `save()`  call, or a call to  `latest_checkpoint()` .

#### 参数：
- **`sess`** : A  `Session`  to use to restore the parameters. None in eager mode.
- **`save_path`** : Path where parameters were previously saved.


#### 加薪：
- **`ValueError`** : If save_path is None or not a valid checkpoint.


###  `save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1074-L1208)

```
 save(
    sess,
    save_path,
    global_step=None,
    latest_filename=None,
    meta_graph_suffix='meta',
    write_meta_graph=True,
    write_state=True,
    strip_default_attrs=False,
    save_debug_info=False
)
 
```

保存变量。

This method runs the ops added by the constructor for saving variables.It requires a session in which the graph was launched.  The variables tosave must also have been initialized.

The method returns the path prefix of the newly created checkpoint files.This string can be passed directly to a call to  `restore()` .

#### 参数：
- **`sess`** : A Session to use to save the variables.
- **`save_path`** : String.  Prefix of filenames created for the checkpoint.
- **`global_step`** : If provided the global step number is appended to  `save_path` to create the checkpoint filenames. The optional argument can be a `Tensor` , a  `Tensor`  name or an integer.
- **`latest_filename`** : Optional name for the protocol buffer file that willcontains the list of most recent checkpoints.  That file, kept in thesame directory as the checkpoint files, is automatically managed by thesaver to keep track of recent checkpoints.  Defaults to 'checkpoint'.
- **`meta_graph_suffix`** : Suffix for  `MetaGraphDef`  file. Defaults to 'meta'.
- **`write_meta_graph`** :  `Boolean`  indicating whether or not to write the metagraph file.
- **`write_state`** :  `Boolean`  indicating whether or not to write the `CheckpointStateProto` .
- **`strip_default_attrs`** : Boolean. If  `True` , default-valued attributes will beremoved from the NodeDefs. For a detailed guide, see[Stripping Default-ValuedAttributes](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md#stripping-default-valued-attributes).
- **`save_debug_info`** : If  `True` , save the GraphDebugInfo to a separate file,which in the same directory of save_path and with  `_debug`  added beforethe file extension. This is only enabled when  `write_meta_graph`  is `True` 


#### 返回：
A string: path prefix used for the checkpoint files.  If the saver is  sharded, this string ends with: '-?????-of-nnnnn' where 'nnnnn'  is the number of shards created.If the saver is empty, returns None.

#### 加薪：
- **`TypeError`** : If  `sess`  is not a  `Session` .
- **`ValueError`** : If  `latest_filename`  contains path components, or if itcollides with  `save_path` .
- **`RuntimeError`** : If save and restore ops weren't built.


###  `set_last_checkpoints` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1026-L1041)

```
 set_last_checkpoints(last_checkpoints)
 
```

DEPRECATED: Use set_last_checkpoints_with_time.

设置旧检查点文件名的列表。

#### 参数：
- **`last_checkpoints`** : A list of checkpoint filenames.


#### 加薪：
- **`AssertionError`** : If last_checkpoints is not a list.


###  `set_last_checkpoints_with_time` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1043-L1054)

```
 set_last_checkpoints_with_time(last_checkpoints_with_time)
 
```

设置旧检查点文件名和时间戳的列表。

#### 参数：
- **`last_checkpoints_with_time`** : A list of tuples of checkpoint filenames andtimestamps.


#### 加薪：
- **`AssertionError`** : If last_checkpoints_with_time is not a list.


###  `to_proto` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L975-L1000)

```
 to_proto(export_scope=None)
 
```

Converts this  `Saver`  to a  `SaverDef`  protocol buffer.

#### 参数：
- **`export_scope`** : Optional  `string` . Name scope to remove.


#### 返回：
A  `SaverDef`  protocol buffer.

