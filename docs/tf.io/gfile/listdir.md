返回目录中包含的条目列表。

**别名** : [ `tf.compat.v1.io.gfile.listdir` ](/api_docs/python/tf/io/gfile/listdir), [ `tf.compat.v2.io.gfile.listdir` ](/api_docs/python/tf/io/gfile/listdir)

```
 tf.io.gfile.listdir(path)
 
```

The list is in arbitrary order. It does not contain the special entries "."and "..".

#### 参数：
- **`path`** : string, path to a directory


#### 返回：
[filename1, filename2, ... filenameN] as strings

#### 加薪：
errors.notfounderror如果目录不存在

