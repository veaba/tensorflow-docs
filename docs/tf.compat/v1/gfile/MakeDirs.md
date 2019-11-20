[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L426-L438)  
---  
  
Creates a directory and all parent/intermediate directories.

    
    
    tf.compat.v1.gfile.MakeDirs(dirname)
    

It succeeds if dirname already exists and is writable.

#### Args:

  * **`dirname`** : string, name of the directory to be created

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

