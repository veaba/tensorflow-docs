Save the list of files matching pattern, so it is only computed once.

**别名** : [ `tf.compat.v1.io.match_filenames_once` ](/api_docs/python/tf/io/match_filenames_once), [ `tf.compat.v1.train.match_filenames_once` ](/api_docs/python/tf/io/match_filenames_once), [ `tf.compat.v2.io.match_filenames_once` ](/api_docs/python/tf/io/match_filenames_once)

```
 tf.io.match_filenames_once(
    pattern,
    name=None
)
 
```

注意：返回文件的顺序是确定的。

#### 参数：
- **`pattern`** : A file pattern (glob), or 1D tensor of file patterns.
- **`name`** : A name for the operations (optional).


#### 返回：
初始化为与模式匹配的文件列表的变量。

