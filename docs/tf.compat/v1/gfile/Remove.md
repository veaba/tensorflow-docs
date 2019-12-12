删除位于“filename”的文件。

```
 tf.compat.v1.gfile.Remove(filename)
 
```

#### 参数：
- **`filename`** : string, a filename


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : Propagates any errors reported by the FileSystem API.  E.g.,NotFoundError if the file does not exist.
