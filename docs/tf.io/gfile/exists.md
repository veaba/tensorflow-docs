确定路径是否存在。

**别名** : [ `tf.compat.v1.io.gfile.exists` ](/api_docs/python/tf/io/gfile/exists), [ `tf.compat.v2.io.gfile.exists` ](/api_docs/python/tf/io/gfile/exists)

```
 tf.io.gfile.exists(path)
 
```

#### 参数：
- **`path`** : string, a path


#### 返回：
True if the path exists, whether it's a file or a directory.False if the path does not exist and there are no filesystem errors.

#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.
