返回目录中包含的条目列表。

```
 tf.compat.v1.gfile.ListDirectory(dirname)
 
```

The list is in arbitrary order. It does not contain the special entries "."and "..".

#### 参数：
- **`dirname`** : string, path to a directory


#### 返回：
[filename1, filename2, ... filenameN] as strings

#### 加薪：
errors.notfounderror如果目录不存在

