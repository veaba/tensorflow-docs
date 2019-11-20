[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/make_saveable_from_iterator)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/iterator_ops.py#L30-L72)  
  
  
Returns a SaveableObject for saving/restoring iterator state using Saver.

### Aliases:

  * [`tf.compat.v1.data.experimental.make_saveable_from_iterator`](/api_docs/python/tf/data/experimental/make_saveable_from_iterator)
  * [`tf.compat.v2.data.experimental.make_saveable_from_iterator`](/api_docs/python/tf/data/experimental/make_saveable_from_iterator)

    
    
    tf.data.experimental.make_saveable_from_iterator(iterator)
    

#### Args:

  * **`iterator`** : Iterator.

#### Returns:

A SaveableObject for saving/restoring iterator state using Saver.

#### Raises:

  * **`ValueError`** : If iterator does not support checkpointing.

#### For example:

    
    
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
    

**Note:** When restoring the iterator, the existing iterator state is
completely discarded. This means that any changes you may have made to the
Dataset graph will be discarded as well! This includes the new Dataset graph
that you may have built during validation. So, while running validation, make
sure to run the initializer for the validation input pipeline after restoring
the checkpoint. **Note:** Not all iterators support checkpointing yet.
Attempting to save the state of an unsupported iterator will throw an error.

