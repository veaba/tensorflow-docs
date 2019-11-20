[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/listdir) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L618-L645)  
  
  
Returns a list of entries contained within a directory.

### Aliases:

  * [`tf.compat.v1.io.gfile.listdir`](/api_docs/python/tf/io/gfile/listdir)
  * [`tf.compat.v2.io.gfile.listdir`](/api_docs/python/tf/io/gfile/listdir)

    
    
    tf.io.gfile.listdir(path)
    

The list is in arbitrary order. It does not contain the special entries "."
and "..".

#### Args:

  * **`path`** : string, path to a directory

#### Returns:

[filename1, filename2, ... filenameN] as strings

#### Raises:

errors.NotFoundError if directory doesn't exist

