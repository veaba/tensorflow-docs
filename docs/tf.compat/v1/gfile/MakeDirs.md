创建一个目录和所有父/中间目录。

```
 tf.compat.v1.gfile.MakeDirs(dirname) 
```

如果dirname已经存在并且是可写的，它将成功。

#### 参数：
- **`dirname`** : string, name of the directory to be created


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
