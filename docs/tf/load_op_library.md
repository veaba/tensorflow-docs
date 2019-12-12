Loads a TensorFlow plugin, containing custom ops and kernels.

**Aliases** : [ `tf.compat.v1.load_op_library` ](/api_docs/python/tf/load_op_library), [ `tf.compat.v2.load_op_library` ](/api_docs/python/tf/load_op_library)

```
 tf.load_op_library(library_filename)
 
```

Pass "library_filename" to a platform-specific mechanism for dynamicallyloading a library. The rules for determining the exact location of thelibrary are platform-specific and are not documented here. When thelibrary is loaded, ops and kernels registered in the library via the `REGISTER_*`  macros are made available in the TensorFlow process. Notethat ops with the same name as an existing op are rejected and notregistered with the process.

#### Args:
- **`library_filename`** : Path to the plugin.Relative or absolute filesystem path to a dynamic library file.


#### Returns:
A python module containing the Python wrappers for Ops defined inthe plugin.

#### Raises:
- **`RuntimeError`** : when unable to load the library or get the python wrappers.
