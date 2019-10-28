## Class CheckpointInputPipelineHook
Checkpoints input pipeline state every N steps or seconds.
Inherits From: `SessionRunHook`
### Aliases:
- Class `tf.compat.v1.data.experimental.CheckpointInputPipelineHook`
- Class `tf.compat.v2.data.experimental.CheckpointInputPipelineHook`
This hook saves the state of the iterators in the `Graph` so that when training is resumed the input pipeline continues from where it left off. This could potentially avoid overfitting in certain pipelines where the number of training steps per eval are small compared to the dataset size or if the training pipeline is pre-empted.
Differences from `CheckpointSaverHook`: 1. Saves only the input pipelines in the "iterators" collection and not the global variables or other saveable objects. 2. Does not write the `GraphDef` and `MetaGraphDef` to the summary.
Example of checkpointing the training pipeline:

```
 est = tf.estimator.Estimator(model_fn)
while True:
  est.train(
      train_input_fn,
      hooks=[tf.data.experimental.CheckpointInputPipelineHook(est)],
      steps=train_steps_per_eval)
  # Note: We do not pass the hook here.
  metrics = est.evaluate(eval_input_fn)
  if should_stop_the_training(metrics):
    break
```
This hook should be used if the input pipeline state needs to be saved separate from the model checkpoint. Doing so may be useful for a few reasons: 1. The input pipeline checkpoint may be large, if there are large shuffle or prefetch buffers for instance, and may bloat the checkpoint size. 2. If the input pipeline is shared between training and validation, restoring the checkpoint during validation may override the validation input pipeline.
For saving the input pipeline checkpoint alongside the model weights use `tf.data.experimental.make_saveable_from_iterator` directly to create a `SaveableObject` and add to the `SAVEABLE_OBJECTS` collection. Note, however, that you will need to be careful not to restore the training iterator during eval. You can do that by not adding the iterator to the `SAVEABLE_OBJECTS` collector when building the eval graph.
## __init__
View source

```
 __init__(estimator)
```
Initializes a `CheckpointInputPipelineHook`.
#### Args:
- `estimator`: Estimator.
#### Raises:
- `ValueError`: One of `save_steps` or `save_secs` should be set.
- `ValueError`: At most one of saver or scaffold should be set.
## Methods
### after_create_session
View source

```
 after_create_session(
    session,
    coord
)
```
Called when new TensorFlow session is created.
This is called to signal the hooks that a new session has been created. This has two essential differences with the situation in which `begin` is called:
- ``W``h``e``n`` ``t``h``i``s`` ``i``s`` ``c``a``l``l``e``d``,`` ``t``h``e`` ``g``r``a``p``h`` ``i``s`` ``f``i``n``a``l``i``z``e``d`` ``a``n``d`` ``o``p``s`` ``c``a``n`` ``n``o`` ``l``o``n``g``e``r`` ``b``e`` ``a``d``d``e``d`` ``t``o`` ``t``h``e`` ``g``r``a``p``h``.``
- ``T``h``i``s`` ``m``e``t``h``o``d`` ``w``i``l``l`` ``a``l``s``o`` ``b``e`` ``c``a``l``l``e``d`` ``a``s`` ``a`` ``r``e``s``u``l``t`` ``o``f`` ``r``e``c``o``v``e``r``i``n``g`` ``a`` ``w``r``a``p``p``e``d`` ``s``e``s``s``i``o``n``,`` ``n``o``t`` ``o``n``l``y`` ``a``t`` ``t``h``e`` ``b``e``g``i``n``n``i``n``g`` ``o``f`` ``t``h``e`` ``o``v``e``r``a``l``l`` ``s``e``s``s``i``o``n``.``
#### Args:
- `session`: A TensorFlow Session that has been created.
- `coord`: A Coordinator object which keeps track of all threads.
### after_run
View source

```
 after_run(
    run_context,
    run_values
)
```
Called after each call to run().
