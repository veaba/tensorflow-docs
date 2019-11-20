[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L546-L556)  
---  
  
Deletes everything under dirname recursively.

    
    
    tf.compat.v1.gfile.DeleteRecursively(dirname)
    

#### Args:

  * **`dirname`** : string, a path to a directory

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

