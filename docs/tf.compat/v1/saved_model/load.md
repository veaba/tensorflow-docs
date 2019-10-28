Loads the model from a SavedModel as specified by tags. (deprecated)
### Aliases:
- `tf.compat.v1.saved_model.loader.load`

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
- `sess`: The TensorFlow `sess`ion to restore the variables.
#### Returns:
The `MetaGraphDef` protocol buffer loaded in the provided session. This can be used to further extract signature-defs, collection-defs, etc.
#### Raises:
- `RuntimeError`: MetaGraphDef associated with the tags cannot be found.
