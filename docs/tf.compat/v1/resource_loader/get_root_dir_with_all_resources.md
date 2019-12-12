获取包含生成规则中所有数据属性的根目录。

```
 tf.compat.v1.resource_loader.get_root_dir_with_all_resources()
 
```

#### 返回：
The path to the specified file present in the data attribute of py_testor py_binary. Falls back to returning the same as get_data_files_path if itfails to detect a bazel runfiles directory.

