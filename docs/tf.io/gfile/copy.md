[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/copy) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L472-L486)  
  
  
Copies data from `src` to `dst`.

### Aliases:

  * [`tf.compat.v1.io.gfile.copy`](/api_docs/python/tf/io/gfile/copy)
  * [`tf.compat.v2.io.gfile.copy`](/api_docs/python/tf/io/gfile/copy)

    
    
    tf.io.gfile.copy(
        src,
        dst,
        overwrite=False
    )
    

#### Args:

  * **`src`** : string, name of the file whose contents need to be copied
  * **`dst`** : string, name of the file to which to copy to
  * **`overwrite`** : boolean, if false it's an error for `dst` to be occupied by an existing file.

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If the operation fails.

