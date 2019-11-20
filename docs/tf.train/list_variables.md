[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/train/list_variables) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_utils.py#L87-L103)  
  
  
Returns list of all variables in the checkpoint.

### Aliases:

  * [`tf.compat.v1.train.list_variables`](/api_docs/python/tf/train/list_variables)
  * [`tf.compat.v2.train.list_variables`](/api_docs/python/tf/train/list_variables)

    
    
    tf.train.list_variables(ckpt_dir_or_file)
    

### Used in the guide:

  * [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)

#### Args:

  * **`ckpt_dir_or_file`** : Directory with checkpoints file or path to checkpoint.

#### Returns:

List of tuples `(name, shape)`.

