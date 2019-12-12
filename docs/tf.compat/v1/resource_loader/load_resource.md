Load the resource at given path, where path is relative to tensorflow/.

```
 tf.compat.v1.resource_loader.load_resource(path)
 
```

#### 参数：
- **`path`** : a string resource path relative to tensorflow/.


#### 返回：
资源的内容。

#### 加薪：
- **`IOError`** : If the path is not found, or the resource can't be opened.
