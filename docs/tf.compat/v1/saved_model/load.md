[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/loader_impl.py#L238-L269)  
---  
  
Loads the model from a SavedModel as specified by tags. (deprecated)

### Aliases:

  * [`tf.compat.v1.saved_model.loader.load`](/api_docs/python/tf/compat/v1/saved_model/load)

    
    
    tf.compat.v1.saved_model.load(
        sess,
        tags,
        export_dir,
        import_scope=None,
        **saver_kwargs
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: This function will only be available
through the v1 compatibility library as tf.compat.v1.saved_model.loader.load
or tf.compat.v1.saved_model.load. There will be a new function for importing
SavedModels in Tensorflow 2.0.

#### Args:

  * **`sess`** : The TensorFlow session to restore the variables.
  * **`tags`** : Set of string tags to identify the required MetaGraphDef. These should correspond to the tags used when saving the variables using the SavedModel `save()` API.
  * **`export_dir`** : Directory in which the SavedModel protocol buffer and variables to be loaded are located.
  * **`import_scope`** : Optional `string` \-- if specified, prepend this string followed by '/' to all loaded tensor names. This scope is applied to tensor instances loaded into the passed session, but it is _not_ written through to the static `MetaGraphDef` protocol buffer that is returned.
  * **`**saver_kwargs`** : Optional keyword arguments passed through to Saver.

#### Returns:

The `MetaGraphDef` protocol buffer loaded in the provided session. This can be
used to further extract signature-defs, collection-defs, etc.

#### Raises:

  * **`RuntimeError`** : MetaGraphDef associated with the tags cannot be found.

