Loads the model from a SavedModel as specified by tags. (deprecated)

```
 tf.compat.v1.saved_model.load(
    sess,
    tags,
    export_dir,
    import_scope=None,
    **saver_kwargs
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This function will only be available through the v1 compatibility library as tf.compat.v1.saved_model.loader.load or tf.compat.v1.saved_model.load. There will be a new function for importing SavedModels in Tensorflow 2.0.


#### Args:
- **`sess`** : The TensorFlow session to restore the variables.
- **`tags`** : Set of string tags to identify the required MetaGraphDef. These shouldcorrespond to the tags used when saving the variables using theSavedModel  `save()`  API.
- **`export_dir`** : Directory in which the SavedModel protocol buffer and variablesto be loaded are located.
- **`import_scope`** : Optional  `string`  -- if specified, prepend this stringfollowed by '/' to all loaded tensor names. This scope is applied totensor instances loaded into the passed session, but it is *not* writtenthrough to the static  `MetaGraphDef`  protocol buffer that is returned.
- **`**saver_kwargs`** : Optional keyword arguments passed through to Saver.


#### Returns:
The  `MetaGraphDef`  protocol buffer loaded in the provided session. Thiscan be used to further extract signature-defs, collection-defs, etc.

#### Raises:
- **`RuntimeError`** : MetaGraphDef associated with the tags cannot be found.
