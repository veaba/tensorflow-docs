[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/train/get_checkpoint_state) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_management.py#L244-L298)  
---|---  
  
Returns CheckpointState proto from the "checkpoint" file.

### Aliases:

  * [`tf.compat.v1.train.get_checkpoint_state`](/api_docs/python/tf/train/get_checkpoint_state)
  * [`tf.compat.v2.train.get_checkpoint_state`](/api_docs/python/tf/train/get_checkpoint_state)

    
    
    tf.train.get_checkpoint_state(
        checkpoint_dir,
        latest_filename=None
    )
    

If the "checkpoint" file contains a valid CheckpointState proto, returns it.

#### Args:

  * **`checkpoint_dir`** : The directory of checkpoints.
  * **`latest_filename`** : Optional name of the checkpoint file. Default to 'checkpoint'.

#### Returns:

A CheckpointState if the state was available, None otherwise.

#### Raises:

  * **`ValueError`** : if the checkpoint read doesn't have model_checkpoint_path set.

