[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/mkdir) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L411-L423)  
  
  
Creates a directory with the name given by 'path'.

### Aliases:

  * [`tf.compat.v1.io.gfile.mkdir`](/api_docs/python/tf/io/gfile/mkdir)
  * [`tf.compat.v2.io.gfile.mkdir`](/api_docs/python/tf/io/gfile/mkdir)

    
    
    tf.io.gfile.mkdir(path)
    

#### Args:

  * **`path`** : string, name of the directory to be created Notes: The parent directories need to exist. Use recursive_create_dir instead if there is the possibility that the parent dirs don't exist.

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

