返回与一个或多个全局模式匹配的文件集。

**别名** : [ `tf.compat.v1.io.matching_files` ](/api_docs/python/tf/io/matching_files), [ `tf.compat.v1.matching_files` ](/api_docs/python/tf/io/matching_files), [ `tf.compat.v2.io.matching_files` ](/api_docs/python/tf/io/matching_files)

```
 tf.io.matching_files(    pattern,    name=None) 
```

Note that this routine only supports wildcard characters in thebasename portion of the pattern, not in the directory portion.Note also that the order of filenames returned is deterministic.

#### 参数：
- **`pattern`** : A  `Tensor`  of type  `string` .Shell wildcard pattern(s). Scalar or vector of type string.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

