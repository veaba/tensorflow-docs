## Class Checkpoint
Groups trackable objects, saving and restoring them.
### Aliases:
- Class `tf.compat.v2.train.Checkpoint`
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
### Used in the tutorials:
- ``C``y``c``l``e``G``A``N``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``P``i``x``2``P``i``x``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
`Checkpoint`'s constructor accepts keyword arguments whose values are types that contain trackable state, such as `tf.keras.optimizers.Optimizer` implementations, `tf.Variable`, `tf.keras.Layer` implementations, or `tf.keras.Model` implementations. It saves these values with a checkpoint, and maintains a `save_counter` for numbering checkpoints.
#### Example usage:

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
`Checkpoint.save` and `Checkpoint.restore` write and read object-based checkpoints, in contrast to TensorFlow 1.x's `tf.compat.v1.train.Saver` which writes and reads `variable.name` based checkpoints. Object-based checkpointing saves a graph of dependencies between Python objects (`Layer`s, `Optimizer`s, `Variable`s, etc.) with named edges, and this graph is used to match variables when restoring a checkpoint. It can be more robust to changes in the Python program, and helps to support restore-on-create for variables.
`Checkpoint` objects have dependencies on the objects passed as keyword arguments to their constructors, and each dependency is given a name that is identical to the name of the keyword argument for which it was created. TensorFlow classes like `Layer`s and `Optimizer`s will automatically add dependencies on their variables (e.g. "kernel" and "bias" for `tf.keras.layers.Dense`). Inheriting from `tf.keras.Model` makes managing dependencies easy in user-defined classes, since `Model` hooks into attribute assignment. For example:

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
This `Model` has a dependency named "input_transform" on its `Dense` layer, which in turn depends on its variables. As a result, saving an instance of `Regress` using `tf.train.Checkpoint` will also save all the variables created by the `Dense` layer.
When variables are assigned to multiple workers, each worker writes its own section of the checkpoint. These sections are then merged/re-indexed to behave as a single checkpoint. This avoids copying all variables to one worker, but does require that all workers see a common filesystem.
While `tf.keras.Model.save_weights` and `tf.train.Checkpoint.save` save in the same format, note that the root of the resulting checkpoint is the object the save method is attached to. This means saving a `tf.keras.Model` using `save_weights` and loading into a `tf.train.Checkpoint` with a `Model` attached (or vice versa) will not match the `Model`'s variables. See the guide to training checkpoints for details. Prefer `tf.train.Checkpoint` over `tf.keras.Model.save_weights` for training checkpoints.
#### Attributes:
## __init__
View source

```
 __init__(**kwargs)
```
Group objects into a training checkpoint.
#### Args:
#### Raises:
- `ValueError`: If objects in `kwargs` are not trackable.
## Properties
### save_counter
An integer variable which starts at zero and is incremented on save.
Used to number checkpoints.
#### Returns:
The save counter variable.
## Methods
### restore
View source

```
 restore(save_path)
```
Restore a training checkpoint.
Restores this `Checkpoint` and any objects it depends on.
Either assigns values immediately if variables to restore have been created already, or defers restoration until the variables are created. Dependencies added after this call will be matched if they have a corresponding object in the checkpoint (the restore request will queue in any trackable object waiting for the expected dependency to be added).
