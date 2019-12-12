重命名或移动文件/目录。

**别名** : [ `tf.compat.v1.io.gfile.rename` ](/api_docs/python/tf/io/gfile/rename), [ `tf.compat.v2.io.gfile.rename` ](/api_docs/python/tf/io/gfile/rename)

```
 tf.io.gfile.rename(
    src,
    dst,
    overwrite=False
)
 
```

#### 参数：
- **`src`** : string, pathname for a file
- **`dst`** : string, pathname to which the file needs to be moved
- **`overwrite`** : boolean, if false it's an error for  `dst`  to be occupied by anexisting file.


#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If the operation fails.
