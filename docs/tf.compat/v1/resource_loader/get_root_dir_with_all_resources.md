[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/resource_loader.py#L60-L97)  
---  
  
Get a root directory containing all the data attributes in the build rule.

    
    
    tf.compat.v1.resource_loader.get_root_dir_with_all_resources()
    

#### Returns:

The path to the specified file present in the data attribute of py_test or
py_binary. Falls back to returning the same as get_data_files_path if it fails
to detect a bazel runfiles directory.

