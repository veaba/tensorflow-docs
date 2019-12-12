检查提供的导出目录是否可以包含savedModel。

**别名** : [ `tf.compat.v1.saved_model.loader.maybe_saved_model_directory` ](/api_docs/python/tf/compat/v1/saved_model/contains_saved_model), [ `tf.compat.v1.saved_model.maybe_saved_model_directory` ](/api_docs/python/tf/compat/v1/saved_model/contains_saved_model)

```
 tf.compat.v1.saved_model.contains_saved_model(export_dir)
 
```

Note that the method does not load any data by itself. If the method returns `false` , the export directory definitely does not contain a SavedModel. If themethod returns  `true` , the export directory may contain a SavedModel butprovides no guarantee that it can be loaded.

#### 参数：
- **`export_dir`** : Absolute string path to possible export location. For example,        '/my/foo/model'.


#### 返回：
True if the export directory contains SavedModel files, False otherwise.

