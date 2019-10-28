Returns a SaveableObject for saving/restoring iterator state using Saver.
### Aliases:
- `tf.compat.v1.data.experimental.make_saveable_from_iterator`
- `tf.compat.v2.data.experimental.make_saveable_from_iterator`

```
 tf.data.experimental.make_saveable_from_iterator(iterator)
```
#### Args:
- `iterator`: Iterator.
#### Returns:
A SaveableObject for saving/restoring iterator state using Saver.
#### Raises:
- `ValueError`: If iterator does not support checkpointing.
#### For example:

```
 with tf.Graph().as_default():
  ds = tf.data.Dataset.range(10)
  iterator = ds.make_initializable_iterator()
  # Build the iterator SaveableObject.
  saveable_obj = tf.data.experimental.make_saveable_from_iterator(iterator)
  # Add the SaveableObject to the SAVEABLE_OBJECTS collection so
  # it can be automatically saved using Saver.
  tf.compat.v1.add_to_collection(tf.GraphKeys.SAVEABLE_OBJECTS, saveable_obj)
  saver = tf.compat.v1.train.Saver()

  while continue_training:
    ... Perform training ...
    if should_save_checkpoint:
      saver.save()
```
