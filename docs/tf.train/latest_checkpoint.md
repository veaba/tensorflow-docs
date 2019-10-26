Finds the filename of latest saved checkpoint file.
### Aliases:
- tf.compat.v1.train.latest_checkpoint
- tf.compat.v2.train.latest_checkpoint

```
 tf.train.latest_checkpoint(
    checkpoint_dir,
    latest_filename=None
)
```
### Used in the guide:
- Training checkpoints
- Eager execution
### Used in the tutorials:
- Text generation with an RNN
- Distributed training with Keras
- Save and load a model using a distribution strategy
- Deep Convolutional Generative Adversarial Network
- Pix2Pix
#### Args:
- checkpoint_dir: Directory where the variables were saved.
- latest_filename: Optional name for the protocol buffer file that contains the list of most recent checkpoint filenames. See the corresponding argument to Saver.save().
#### Returns:
The full path to the latest checkpoint or None if no checkpoint was found.
