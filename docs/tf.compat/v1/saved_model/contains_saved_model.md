[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/loader_impl.py#L192-L216)  
---  
  
Checks whether the provided export directory could contain a SavedModel.

### Aliases:

  * [`tf.compat.v1.saved_model.loader.maybe_saved_model_directory`](/api_docs/python/tf/compat/v1/saved_model/contains_saved_model)
  * [`tf.compat.v1.saved_model.maybe_saved_model_directory`](/api_docs/python/tf/compat/v1/saved_model/contains_saved_model)

    
    
    tf.compat.v1.saved_model.contains_saved_model(export_dir)
    

Note that the method does not load any data by itself. If the method returns
`false`, the export directory definitely does not contain a SavedModel. If the
method returns `true`, the export directory may contain a SavedModel but
provides no guarantee that it can be loaded.

#### Args:

  * **`export_dir`** : Absolute string path to possible export location. For example, '/my/foo/model'.

#### Returns:

True if the export directory contains SavedModel files, False otherwise.

