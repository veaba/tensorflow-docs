[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/remove) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L300-L311)  
---|---  
  
Deletes the path located at 'path'.

### Aliases:

  * [`tf.compat.v1.io.gfile.remove`](/api_docs/python/tf/io/gfile/remove)
  * [`tf.compat.v2.io.gfile.remove`](/api_docs/python/tf/io/gfile/remove)

    
    
    tf.io.gfile.remove(path)
    

#### Args:

  * **`path`** : string, a path

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API. E.g., NotFoundError if the path does not exist.

