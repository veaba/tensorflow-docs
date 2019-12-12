加载TensorFlow插件。

**别名** : [ `tf.compat.v1.load_library` ](/api_docs/python/tf/load_library), [ `tf.compat.v2.load_library` ](/api_docs/python/tf/load_library)

```
 tf.load_library(library_location)
 
```

"library_location" can be a path to a specific shared object, or a folder.If it is a folder, all shared objects that are named "libtfkernel*" will beloaded. When the library is loaded, kernels registered in the library via the `REGISTER_*`  macros are made available in the TensorFlow process.

#### 参数：
- **`library_location`** : Path to the plugin or the folder of plugins.Relative or absolute filesystem path to a dynamic library file or folder.


#### 返回：
None

#### 加薪：
- **`OSError`** : When the file to be loaded is not found.
- **`RuntimeError`** : when unable to load the library.
