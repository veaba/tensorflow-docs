[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L714-L727)  
---  
  
Returns file statistics for a given path.

    
    
    tf.compat.v1.gfile.Stat(filename)
    

#### Args:

  * **`filename`** : string, path to a file

#### Returns:

FileStatistics struct that contains information about the path

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

