创建名为“dirname”的目录。

```
 tf.compat.v1.gfile.MkDir(dirname) 
```

#### 参数：
- **`dirname`** : string, name of the directory to be createdNotes: The parent directories need to exist. Use recursive_create_dir insteadif there is the possibility that the parent dirs don't exist.


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
