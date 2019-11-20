[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/glob) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L366-L393)  
---|---  
  
Returns a list of files that match the given pattern(s).

### Aliases:

  * [`tf.compat.v1.io.gfile.glob`](/api_docs/python/tf/io/gfile/glob)
  * [`tf.compat.v2.io.gfile.glob`](/api_docs/python/tf/io/gfile/glob)

    
    
    tf.io.gfile.glob(pattern)
    

#### Args:

  * **`pattern`** : string or iterable of strings. The glob pattern(s).

#### Returns:

A list of strings containing filenames that match the given pattern(s).

#### Raises:

  * **[`errors.OpError`](/api_docs/python/tf/errors/OpError)** : If there are filesystem / directory listing errors.

