Loads a TensorFlow plugin.



### Aliases:

- [ `tf.compat.v1.load_library` ](/api_docs/python/tf/load_library)

- [ `tf.compat.v2.load_library` ](/api_docs/python/tf/load_library)



```
 tf.load_library(library_location)
 
```

"library_location" can be a path to a specific shared object, or a folder.
If it is a folder, all shared objects that are named "libtfkernel*" will be
loaded. When the library is loaded, kernels registered in the library via the
 `REGISTER_*`  macros are made available in the TensorFlow process.



#### Args:

- **`library_location`** : Path to the plugin or the folder of plugins.
Relative or absolute filesystem path to a dynamic library file or folder.



#### Returns:
None



#### Raises:

- **`OSError`** : When the file to be loaded is not found.

- **`RuntimeError`** : when unable to load the library.

