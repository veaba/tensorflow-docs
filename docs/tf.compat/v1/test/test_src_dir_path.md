[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/test.py#L79-L90)  
---  
  
Creates an absolute test srcdir path given a relative path.

    
    
    tf.compat.v1.test.test_src_dir_path(relative_path)
    

#### Args:

  * **`relative_path`** : a path relative to tensorflow root. e.g. "core/platform".

#### Returns:

An absolute path to the linked in runfiles.

