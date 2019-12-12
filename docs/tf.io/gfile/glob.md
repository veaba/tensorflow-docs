返回与给定模式匹配的文件列表。

**别名** : [ `tf.compat.v1.io.gfile.glob` ](/api_docs/python/tf/io/gfile/glob), [ `tf.compat.v2.io.gfile.glob` ](/api_docs/python/tf/io/gfile/glob)

```
 tf.io.gfile.glob(pattern)
 
```

#### 参数：
- **`pattern`** : string or iterable of strings. The glob pattern(s).


#### 返回：
包含与给定模式匹配的文件名的字符串列表。

#### 加薪：
- **[ `errors.OpError` ](/api_docs/python/tf/errors/OpError)** : If there are filesystem / directory listing errors.
