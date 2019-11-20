[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L489-L502)  
---  
  
Rename or move a file / directory.

    
    
    tf.compat.v1.gfile.Rename(
        oldname,
        newname,
        overwrite=False
    )
    

#### Args:

  * **`oldname`** : string, pathname for a file
  * **`newname`** : string, pathname to which the file needs to be moved
  * **`overwrite`** : boolean, if false it's an error for `newname` to be occupied by an existing file.

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

