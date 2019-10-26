## Class Checkpoint
Groups trackable objects, saving and restoring them.
[tf.compat.v1.train.Optimizer](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)Checkpoint's constructor accepts keyword arguments whose values are types that contain trackable state, such as  implementations, tf.Variable, tf.keras.Layer implementations, or tf.keras.Model implementations. It saves these values with a checkpoint, and maintains a save_counter for numbering checkpoints.

Example usage when graph building:

```
 import tensorflow as tf
import os

checkpoint_directory = "/tmp/training_checkpoints"
checkpoint_prefix = os.path.join(checkpoint_directory, "ckpt")

checkpoint = tf.train.Checkpoint(optimizer=optimizer, model=model)
status = checkpoint.restore(tf.train.latest_checkpoint(checkpoint_directory))
train_op = optimizer.minimize( ... )
status.assert_consumed()  # Optional sanity checks.
with tf.compat.v1.Session() as session:
  # Use the Session to restore variables, or initialize them if
  # tf.train.latest_checkpoint returned None.
  status.initialize_or_restore(session)
  for _ in range(num_training_steps):
    session.run(train_op)
  checkpoint.save(file_prefix=checkpoint_prefix)
```
Example usage with eager execution enabled:

```
 import tensorflow as tf
import os

tf.compat.v1.enable_eager_execution()

checkpoint_directory = "/tmp/training_checkpoints"
checkpoint_prefix = os.path.join(checkpoint_directory, "ckpt")

checkpoint = tf.train.Checkpoint(optimizer=optimizer, model=model)
status = checkpoint.restore(tf.train.latest_checkpoint(checkpoint_directory))
for _ in range(num_training_steps):
  optimizer.minimize( ... )  # Variables will be restored on creation.
status.assert_consumed()  # Optional sanity checks.
checkpoint.save(file_prefix=checkpoint_prefix)
```
[Checkpoint.save](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save) and Checkpoint.restore write and read object-based checkpoints, in contrast to tf.compat.v1.train.Saver which writes and reads variable.name based checkpoints. Object-based checkpointing saves a graph of dependencies between Python objects (Layers, Optimizers, Variables, etc.) with named edges, and this graph is used to match variables when restoring a checkpoint. It can be more robust to changes in the Python program, and helps to support restore-on-create for variables when executing eagerly. Prefer tf.train.Checkpoint over tf.compat.v1.train.Saver for new code.

[tf.keras.layers.Dense](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dense)Checkpoint objects have dependencies on the objects passed as keyword arguments to their constructors, and each dependency is given a name that is identical to the name of the keyword argument for which it was created. TensorFlow classes like Layers and Optimizers will automatically add dependencies on their variables (e.g. "kernel" and "bias" for ). Inheriting from tf.keras.Model makes managing dependencies easy in user-defined classes, since Model hooks into attribute assignment. For example:


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
[tf.train.Checkpoint](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint)This Model has a dependency named "input_transform" on its Dense layer, which in turn depends on its variables. As a result, saving an instance of Regress using  will also save all the variables created by the Dense layer.

When variables are assigned to multiple workers, each worker writes its own section of the checkpoint. These sections are then merged/re-indexed to behave as a single checkpoint. This avoids copying all variables to one worker, but does require that all workers see a common filesystem.
[tf.keras.Model.save_weights](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#save_weights)While  and tf.train.Checkpoint.save save in the same format, note that the root of the resulting checkpoint is the object the save method is attached to. This means saving a tf.keras.Model using save_weights and loading into a tf.train.Checkpoint with a Model attached (or vice versa) will not match the Model's variables. See the guide to training checkpoints for details. Prefer tf.train.Checkpoint over  for training checkpoints.

#### Attributes:
- save_counter: Incremented when save() is called. Used to number checkpoints.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1424-L1446)


```
 __init__(**kwargs)
```
Group objects into a training checkpoint.
#### Args:
- **kwargs: Keyword arguments are set as attributes of this object, and are saved with the checkpoint. Values must be trackable objects.
#### Raises:
- ValueError: If objects in kwargs are not trackable.
## Properties
### save_counter
An integer variable which starts at zero and is incremented on save.
Used to number checkpoints.
#### Returns:
The save counter variable.
## Methods
### restore
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1568-L1675)


```
 restore(save_path)
```
Restore a training checkpoint.
Restores this Checkpoint and any objects it depends on.
When executing eagerly, either assigns values immediately if variables to restore have been created already, or defers restoration until the variables are created. Dependencies added after this call will be matched if they have a corresponding object in the checkpoint (the restore request will queue in any trackable object waiting for the expected dependency to be added).
When graph building, restoration ops are added to the graph but not run immediately.
To ensure that loading is complete and no more assignments will take place, use the assert_consumed() method of the status object returned by restore:

```
 checkpoint = tf.train.Checkpoint( ... )
checkpoint.restore(path).assert_consumed()
```
An exception will be raised if any Python objects in the dependency graph were not found in the checkpoint, or if any checkpointed values do not have a matching Python object.
When graph building, assert_consumed() indicates that all of the restore ops that will be created for this checkpoint have been created. They can be run via the run_restore_ops() method of the status object:

```
 checkpoint.restore(path).assert_consumed().run_restore_ops()
```
If the checkpoint has not been consumed completely, then the list of restore ops will grow as more objects are added to the dependency graph.
[tf.compat.v1.train.Saver](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver)Name-based  checkpoints can be loaded using this method. Names are used to match variables. No restore ops are created/run until run_restore_ops() or initialize_or_restore() are called on the returned status object when graph building, but there is restore-on-creation when executing eagerly. Re-encode name-based checkpoints using tf.train.Checkpoint.save as soon as possible.

#### Args:
- save_path: The path to the checkpoint, as returned by save or tf.train.latest_checkpoint. If None (as when there is no latest checkpoint for tf.train.latest_checkpoint to return), returns an object which may run initializers for objects in the dependency graph. If the checkpoint was written by the name-based tf.compat.v1.train.Saver, names are used to match variables.
#### Returns:
A load status object, which can be used to make assertions about the status of a checkpoint restoration and run initialization/restore ops.
The returned status object has the following methods:
- assert_consumed(): Raises an exception if any variables/objects are unmatched: either checkpointed values which don't have a matching Python object or Python objects in the dependency graph with no values in the checkpoint. This method returns the status object, and so may be chained with initialize_or_restore or run_restore_ops.
- assert_existing_objects_matched(): Raises an exception if any existing Python objects in the dependency graph are unmatched. Unlike assert_consumed, this assertion will pass if values in the checkpoint have no corresponding Python objects. For example a tf.keras.Layer object which has not yet been built, and so has not created any variables, will pass this assertion but fail assert_consumed. Useful when loading part of a larger checkpoint into a new Python program, e.g. a training checkpoint with a tf.compat.v1.train.Optimizer was saved but only the state required for inference is being loaded. This method returns the status object, and so may be chained with initialize_or_restore or run_restore_ops.
- assert_nontrivial_match(): Asserts that something aside from the root object was matched. This is a very weak assertion, but is useful for sanity checking in library code where objects may exist in the checkpoint which haven't been created in Python and some Python objects may not have a checkpointed value.
- expect_partial(): Silence warnings about incomplete checkpoint restores. Warnings are otherwise printed for unused parts of the checkpoint file or object when the Checkpoint object is deleted (often at program shutdown).
- initialize_or_restore(session=None): When graph building, runs variable initializers if save_path is None, but otherwise runs restore operations. If no session is explicitly specified, the default session is used. No effect when executing eagerly (variables are initialized or restored eagerly).
- run_restore_ops(session=None): When graph building, runs restore operations. If no session is explicitly specified, the default session is used. No effect when executing eagerly (restore operations are run eagerly). May only be called when save_path is not None.
### save
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1508-L1566)


```
 save(
    file_prefix,
    session=None
)
```
Saves a training checkpoint and provides basic checkpoint management.
[Checkpoint.save()](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#save)The saved checkpoint includes variables created by this object and any trackable objects it depends on at the time  is called.

[tf.train.latest_checkpoint](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint)save is a basic convenience wrapper around the write method, sequentially numbering checkpoints using save_counter and updating the metadata used by . More advanced checkpoint management, for example garbage collection and custom numbering, may be provided by other utilities which also wrap write (tf.contrib.checkpoint.CheckpointManager for example).

#### Args:
- file_prefix: A prefix to use for the checkpoint filenames (/path/to/directory/and_a_prefix). Names are generated based on this prefix and Checkpoint.save_counter.
- session: The session to evaluate variables in. Ignored when executing eagerly. If not provided when graph building, the default session is used.
#### Returns:
The full path to the checkpoint.
### write
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/tracking/util.py#L1463-L1494)


```
 write(
    file_prefix,
    session=None
)
```
Writes a training checkpoint.
[Checkpoint.write()](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint#write)The checkpoint includes variables created by this object and any trackable objects it depends on at the time  is called.

[tf.train.latest_checkpoint](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint)write does not number checkpoints, increment save_counter, or update the metadata used by . It is primarily intended for use by higher level checkpoint management utilities. save provides a very basic implementation of these features.

#### Args:
- file_prefix: A prefix to use for the checkpoint filenames (/path/to/directory/and_a_prefix).
- session: The session to evaluate variables in. Ignored when executing eagerly. If not provided when graph building, the default session is used.
#### Returns:
The full path to the checkpoint (i.e. file_prefix).
