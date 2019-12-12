获取数据依赖项中指定文件的路径。

```
 tf.compat.v1.resource_loader.get_path_to_datafile(path)
 
```

路径是相对于tensorflow的/

#### 参数：
- **`path`** : a string resource path relative to tensorflow/


#### 返回：
The path to the specified file present in the data attribute of py_testor py_binary.

#### 加薪：
- **`IOError`** : If the path is not found, or the resource can't be opened.
