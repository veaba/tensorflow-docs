Loads the model from a SavedModel as specified by tags. (deprecated)
### Aliases:
- tf.compat.v1.saved_model.loader.load

```
 tf.compat.v1.saved_model.load(
    sess,
    tags,
    export_dir,
    import_scope=None,
    **saver_kwargs
)
```
#### Args:
- sess: The TensorFlow session to restore the variables.
- tags: Set of string tags to identify the required MetaGraphDef. These should correspond to the tags used when saving the variables using the SavedModel save() API.
- export_dir: Directory in which the SavedModel protocol buffer and variables to be loaded are located.
- import_scope: Optional string -- if specified, prepend this string followed by '/' to all loaded tensor names. This scope is applied to tensor instances loaded into the passed session, but it is not written through to the static MetaGraphDef protocol buffer that is returned.
- **saver_kwargs: Optional keyword arguments passed through to Saver.
#### Returns:
The MetaGraphDef protocol buffer loaded in the provided session. This can be used to further extract signature-defs, collection-defs, etc.
#### Raises:
- RuntimeError: MetaGraphDef associated with the tags cannot be found.
