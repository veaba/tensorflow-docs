[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/makedirs) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L441-L453)  
  
  
Creates a directory and all parent/intermediate directories.

### Aliases:

  * [`tf.compat.v1.io.gfile.makedirs`](/api_docs/python/tf/io/gfile/makedirs)
  * [`tf.compat.v2.io.gfile.makedirs`](/api_docs/python/tf/io/gfile/makedirs)

    
    
    tf.io.gfile.makedirs(path)
    

It succeeds if path already exists and is writable.

#### Args:

  * **`path`** : string, name of the directory to be created

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

