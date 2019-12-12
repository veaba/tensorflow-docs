删除位于“path”的路径。

**别名** : [ `tf.compat.v1.io.gfile.remove` ](/api_docs/python/tf/io/gfile/remove), [ `tf.compat.v2.io.gfile.remove` ](/api_docs/python/tf/io/gfile/remove)

```
 tf.io.gfile.remove(path)
 
```

#### 参数：
- **`path`** : string, a path


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.  E.g.,NotFoundError if the path does not exist.
