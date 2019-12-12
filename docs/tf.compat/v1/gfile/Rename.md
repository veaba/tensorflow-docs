重命名或移动文件/目录。

```
 tf.compat.v1.gfile.Rename(    oldname,    newname,    overwrite=False) 
```

#### 参数：
- **`oldname`** : string, pathname for a file
- **`newname`** : string, pathname to which the file needs to be moved
- **`overwrite`** : boolean, if false it's an error for  `newname`  to be occupied byan existing file.


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
