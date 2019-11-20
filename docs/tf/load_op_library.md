[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/load_op_library) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/load_library.py#L38-L86)  
---|---  
  
Loads a TensorFlow plugin, containing custom ops and kernels.

### Aliases:

  * [`tf.compat.v1.load_op_library`](/api_docs/python/tf/load_op_library)
  * [`tf.compat.v2.load_op_library`](/api_docs/python/tf/load_op_library)

    
    
    tf.load_op_library(library_filename)
    

Pass "library_filename" to a platform-specific mechanism for dynamically
loading a library. The rules for determining the exact location of the library
are platform-specific and are not documented here. When the library is loaded,
ops and kernels registered in the library via the `REGISTER_*` macros are made
available in the TensorFlow process. Note that ops with the same name as an
existing op are rejected and not registered with the process.

#### Args:

  * **`library_filename`** : Path to the plugin. Relative or absolute filesystem path to a dynamic library file.

#### Returns:

A python module containing the Python wrappers for Ops defined in the plugin.

#### Raises:

  * **`RuntimeError`** : when unable to load the library or get the python wrappers.

