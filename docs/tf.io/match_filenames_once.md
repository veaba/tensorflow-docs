[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/match_filenames_once) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/input.py#L58-L78)  
---|---  
  
Save the list of files matching pattern, so it is only computed once.

### Aliases:

  * [`tf.compat.v1.io.match_filenames_once`](/api_docs/python/tf/io/match_filenames_once)
  * [`tf.compat.v1.train.match_filenames_once`](/api_docs/python/tf/io/match_filenames_once)
  * [`tf.compat.v2.io.match_filenames_once`](/api_docs/python/tf/io/match_filenames_once)

    
    
    tf.io.match_filenames_once(
        pattern,
        name=None
    )
    

NOTE: The order of the files returned is deterministic.

#### Args:

  * **`pattern`** : A file pattern (glob), or 1D tensor of file patterns.
  * **`name`** : A name for the operations (optional).

#### Returns:

A variable that is initialized to the list of files matching the pattern(s).

