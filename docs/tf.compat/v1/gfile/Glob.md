返回与给定模式匹配的文件列表。

```
 tf.compat.v1.gfile.Glob(filename) 
```

#### 参数：
- **`filename`** : string or iterable of strings. The glob pattern(s).


#### 返回：
包含与给定模式匹配的文件名的字符串列表。

#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If there are filesystem / directory listing errors.
