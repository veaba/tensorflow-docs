[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/stat) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L730-L745)  
---|---  
  
Returns file statistics for a given path.

### Aliases:

  * [`tf.compat.v1.io.gfile.stat`](/api_docs/python/tf/io/gfile/stat)
  * [`tf.compat.v2.io.gfile.stat`](/api_docs/python/tf/io/gfile/stat)

    
    
    tf.io.gfile.stat(path)
    

#### Args:

  * **`path`** : string, path to a file

#### Returns:

FileStatistics struct that contains information about the path

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

