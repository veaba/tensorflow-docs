[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_management.py#L396-L439)  
---  
  
Returns the mtimes (modification timestamps) of the checkpoints. (deprecated)

    
    
    tf.compat.v1.train.get_checkpoint_mtimes(checkpoint_prefixes)
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use standard file utilities to get mtimes.

Globs for the checkpoints pointed to by `checkpoint_prefixes`. If the files
exist, collect their mtime. Both V2 and V1 checkpoints are considered, in that
priority.

This is the recommended way to get the mtimes, since it takes into account the
naming difference between V1 and V2 formats.

**Note:** If not all checkpoints exist, the length of the returned mtimes list
will be smaller than the length of `checkpoint_prefixes` list, so mapping
checkpoints to corresponding mtimes will not be possible.

#### Args:

  * **`checkpoint_prefixes`** : a list of checkpoint paths, typically the results of `Saver.save()` or those of [`tf.train.latest_checkpoint()`](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint), regardless of sharded/non-sharded or V1/V2.

#### Returns:

A list of mtimes (in microseconds) of the found checkpoints.

