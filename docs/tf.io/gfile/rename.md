[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/rename) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L505-L519)  
  
  
Rename or move a file / directory.

### Aliases:

  * [`tf.compat.v1.io.gfile.rename`](/api_docs/python/tf/io/gfile/rename)
  * [`tf.compat.v2.io.gfile.rename`](/api_docs/python/tf/io/gfile/rename)

    
    
    tf.io.gfile.rename(
        src,
        dst,
        overwrite=False
    )
    

#### Args:

  * **`src`** : string, pathname for a file
  * **`dst`** : string, pathname to which the file needs to be moved
  * **`overwrite`** : boolean, if false it's an error for `dst` to be occupied by an existing file.

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

