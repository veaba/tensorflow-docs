Checks whether the provided export directory could contain a SavedModel.
### Aliases:
- tf.compat.v1.saved_model.loader.maybe_saved_model_directory
- tf.compat.v1.saved_model.maybe_saved_model_directory

```
 tf.compat.v1.saved_model.contains_saved_model(export_dir)
```
Note that the method does not load any data by itself. If the method returns false, the export directory definitely does not contain a SavedModel. If the method returns true, the export directory may contain a SavedModel but provides no guarantee that it can be loaded.
#### Args:
- export_dir: Absolute string path to possible export location. For example, '/my/foo/model'.
#### Returns:
True if the export directory contains SavedModel files, False otherwise.
