

## Class  `Checkpoint` 
Groups trackable objects, saving and restoring them.

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
 `Checkpoint` 's constructor accepts keyword arguments whose values are typesthat contain trackable state, such as [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)implementations, [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable),  `tf.keras.Layer`  implementations, or[ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) implementations. It saves these values with a checkpoint, andmaintains a  `save_counter`  for numbering checkpoints.

#### 示例用法：


```
 import tensorflow as tf
import os

checkpoint_directory = "/tmp/training_checkpoints"
checkpoint_prefix = os.path.join(checkpoint_directory, "ckpt")

checkpoint = tf.train.Checkpoint(optimizer=optimizer, model=model)
status = checkpoint.restore(tf.train.latest_checkpoint(checkpoint_directory))
for _ in range(num_training_steps):
  optimizer.minimize( ... )  # Variables will be restored on creation.
status.assert_consumed()  # Optional sanity checks.
checkpoint.save(file_prefix=checkpoint_prefix)
 
```

[ `Checkpoint.save` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) and [ `Checkpoint.restore` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#restore) write and read object-basedcheckpoints, in contrast to TensorFlow 1.x's [ `tf.compat.v1.train.Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver) whichwrites andreads  `variable.name`  based checkpoints. Object-based checkpointing saves agraph of dependencies between Python objects ( `Layer` s,  `Optimizer` s, `Variable` s, etc.) with named edges, and this graph is used to match variableswhen restoring a checkpoint. It can be more robust to changes in the Pythonprogram, and helps to support restore-on-create for variables.

 `Checkpoint`  objects have dependencies on the objects passed as keywordarguments to their constructors, and each dependency is given a name that isidentical to the name of the keyword argument for which it was created.TensorFlow classes like  `Layer` s and  `Optimizer` s will automatically adddependencies on their variables (e.g. "kernel" and "bias" for[ `tf.keras.layers.Dense` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dense)). Inheriting from [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) makes managingdependencies easy in user-defined classes, since  `Model`  hooks into attributeassignment. For example:

```
 class Regress(tf.keras.Model):

  def __init__(self):
    super(Regress, self).__init__()
    self.input_transform = tf.keras.layers.Dense(10)
    # ...

  def call(self, inputs):
    x = self.input_transform(inputs)
    # ...
 
```

This  `Model`  has a dependency named "input_transform" on its  `Dense`  layer,which in turn depends on its variables. As a result, saving an instance of `Regress`  using [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) will also save all the variables createdby the  `Dense`  layer.

When variables are assigned to multiple workers, each worker writes its ownsection of the checkpoint. These sections are then merged/re-indexed to behaveas a single checkpoint. This avoids copying all variables to one worker, butdoes require that all workers see a common filesystem.

While [ `tf.keras.Model.save_weights` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#save_weights) and [ `tf.train.Checkpoint.save` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) save in thesame format, note that the root of the resulting checkpoint is the object thesave method is attached to. This means saving a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model) using `save_weights`  and loading into a [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) with a  `Model` attached (or vice versa) will not match the  `Model` 's variables. See the[guide to trainingcheckpoints](https://tensorflow.google.cn/alpha/guide/checkpoints) fordetails. Prefer [ `tf.train.Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint) over [ `tf.keras.Model.save_weights` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#save_weights) fortraining checkpoints.

#### 属性：
- **`save_counter`** : Incremented when  `save()`  is called. Used to numbercheckpoints.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1761-L1783)

```
 __init__(**kwargs)
 
```

将对象分组到训练检查点。

#### 参数：
- **`**kwargs`** : Keyword arguments are set as attributes of this object, and aresaved with the checkpoint. Values must be trackable objects.


#### 加薪：
- **`ValueError`** : If objects in  `kwargs`  are not trackable.


## 属性


###  `save_counter` 
从零开始并在保存时递增的整数变量。

用于对检查点进行编号。

#### 返回：
保存计数器变量。

## 方法


###  `restore` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1897-L1976)

```
 restore(save_path)
 
```

恢复训练检查点。

Restores this  `Checkpoint`  and any objects it depends on.

Either assigns values immediately if variables to restore have been createdalready, or defers restoration until the variables are created. Dependenciesadded after this call will be matched if they have a corresponding object inthe checkpoint (the restore request will queue in any trackable objectwaiting for the expected dependency to be added).

To ensure that loading is complete and no more assignments will take place,use the  `assert_consumed()`  method of the status object returned by `restore` :

```
 checkpoint = tf.train.Checkpoint( ... )
checkpoint.restore(path).assert_consumed()
 
```

An exception will be raised if any Python objects in the dependency graphwere not found in the checkpoint, or if any checkpointed values do not havea matching Python object.

Name-based [ `tf.compat.v1.train.Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver) checkpoints from TensorFlow 1.x can beloadedusing this method. Names are used to match variables. Re-encode name-basedcheckpoints using [ `tf.train.Checkpoint.save` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) as soon as possible.

#### 参数：
- **`save_path`** : The path to the checkpoint, as returned by  `save`  or[ `tf.train.latest_checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint). If None (as when there is no latestcheckpoint for [ `tf.train.latest_checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint) to return), returns anobject which may run initializers for objects in the dependency graph.If the checkpoint was written by the name-based[ `tf.compat.v1.train.Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver), names are used to match variables.


#### 返回：
A load status object, which can be used to make assertions about thestatus of a checkpoint restoration.

返回的status对象具有以下方法：

-  `assert_consumed()` :Raises an exception if any variables/objects are unmatched: eithercheckpointed values which don't have a matching Python object orPython objects in the dependency graph with no values in thecheckpoint. This method returns the status object, and so may bechained with other assertions.


-  `assert_existing_objects_matched()` :Raises an exception if any existing Python objects in the dependencygraph are unmatched. Unlike  `assert_consumed` , this assertion willpass if values in the checkpoint have no corresponding Pythonobjects. For example a  `tf.keras.Layer`  object which has not yet beenbuilt, and so has not created any variables, will pass this assertionbut fail  `assert_consumed` . Useful when loading part of a largercheckpoint into a new Python program, e.g. a training checkpoint witha [ `tf.compat.v1.train.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer) was saved but only the state requiredforinference is being loaded. This method returns the status object, andso may be chained with other assertions.


-  `assert_nontrivial_match()` : Asserts that something aside from the rootobject was matched. This is a very weak assertion, but is useful forsanity checking in library code where objects may exist in thecheckpoint which haven't been created in Python and some Pythonobjects may not have a checkpointed value.


-  `expect_partial()` : Silence warnings about incomplete checkpointrestores. Warnings are otherwise printed for unused parts of thecheckpoint file or object when the  `Checkpoint`  object is deleted(often at program shutdown).


###  `save` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1842-L1895)

```
 save(file_prefix)
 
```

保存培训检查点并提供基本检查点管理。

The saved checkpoint includes variables created by this object and anytrackable objects it depends on at the time [ `Checkpoint.save()` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) iscalled.

 `save`  is a basic convenience wrapper around the  `write`  method,sequentially numbering checkpoints using  `save_counter`  and updating themetadata used by [ `tf.train.latest_checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint). More advanced checkpointmanagement, for example garbage collection and custom numbering, may beprovided by other utilities which also wrap  `write` ( `tf.contrib.checkpoint.CheckpointManager`  for example).

#### 参数：
- **`file_prefix`** : A prefix to use for the checkpoint filenames(/path/to/directory/and_a_prefix). Names are generated based on thisprefix and [ `Checkpoint.save_counter` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save_counter).


#### 返回：
检查点的完整路径。

###  `write` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1800-L1828)

```
 write(file_prefix)
 
```

编写训练检查点。

The checkpoint includes variables created by this object and anytrackable objects it depends on at the time [ `Checkpoint.write()` ](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#write) iscalled.

 `write`  does not number checkpoints, increment  `save_counter` , or update themetadata used by [ `tf.train.latest_checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint). It is primarily intended foruse by higher level checkpoint management utilities.  `save`  provides a verybasic implementation of these features.

#### 参数：
- **`file_prefix`** : A prefix to use for the checkpoint filenames(/path/to/directory/and_a_prefix).


#### 返回：
The full path to the checkpoint (i.e.  `file_prefix` ).

