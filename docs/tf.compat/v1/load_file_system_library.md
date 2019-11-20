[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/load_library.py#L89-L109)  
---  
  
Loads a TensorFlow plugin, containing file system implementation. (deprecated)

    
    
    tf.compat.v1.load_file_system_library(library_filename)
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`tf.load_library`](https://tensorflow.google.cn/api_docs/python/tf/load_library)
instead.

Pass `library_filename` to a platform-specific mechanism for dynamically
loading a library. The rules for determining the exact location of the library
are platform-specific and are not documented here.

#### Args:

  * **`library_filename`** : Path to the plugin. Relative or absolute filesystem path to a dynamic library file.

#### Returns:

None.

#### Raises:

  * **`RuntimeError`** : when unable to load the library.

