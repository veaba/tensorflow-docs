确定路径是否存在。

```
 tf.compat.v1.gfile.Exists(filename)
 
```

#### 参数：
- **`filename`** : string, a path


#### 返回：
True if the path exists, whether it's a file or a directory.False if the path does not exist and there are no filesystem errors.

#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.
