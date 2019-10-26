Loads a TensorFlow plugin, containing file system implementation. (deprecated)

```
 tf.compat.v1.load_file_system_library(library_filename)
```
Pass library_filename to a platform-specific mechanism for dynamically loading a library. The rules for determining the exact location of the library are platform-specific and are not documented here.
#### Args:
- library_filename: Path to the plugin. Relative or absolute filesystem path to a dynamic library file.
#### Returns:
None.
#### Raises:
- RuntimeError: when unable to load the library.
