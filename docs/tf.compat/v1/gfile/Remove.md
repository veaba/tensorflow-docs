[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L286-L297)  
---  
  
Deletes the file located at 'filename'.

    
    
    tf.compat.v1.gfile.Remove(filename)  
    

#### Args:

  * **`filename`** : string, a filename

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API. E.g., NotFoundError if the file does not exist.

