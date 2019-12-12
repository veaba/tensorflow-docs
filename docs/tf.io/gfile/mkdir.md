使用“path”给定的名称创建目录。

**别名** : [ `tf.compat.v1.io.gfile.mkdir` ](/api_docs/python/tf/io/gfile/mkdir), [ `tf.compat.v2.io.gfile.mkdir` ](/api_docs/python/tf/io/gfile/mkdir)

```
 tf.io.gfile.mkdir(path)
 
```

#### 参数：
- **`path`** : string, name of the directory to be createdNotes: The parent directories need to exist. Use recursive_create_dir insteadif there is the possibility that the parent dirs don't exist.


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
