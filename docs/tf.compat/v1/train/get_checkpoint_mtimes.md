Returns the mtimes (modification timestamps) of the checkpoints. (deprecated)

```
 tf.compat.v1.train.get_checkpoint_mtimes(checkpoint_prefixes)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use standard file utilities to get mtimes.
Globs for the checkpoints pointed to by  `checkpoint_prefixes` .  If the filesexist, collect their mtime.  Both V2 and V1 checkpoints are considered, inthat priority.

This is the recommended way to get the mtimes, since it takes into accountthe naming difference between V1 and V2 formats.


**Note:**  If not all checkpoints exist, the length of the returned mtimes listwill be smaller than the length of  `checkpoint_prefixes`  list, so mappingcheckpoints to corresponding mtimes will not be possible.


#### 参数：
- **`checkpoint_prefixes`** : a list of checkpoint paths, typically the results of `Saver.save()`  or those of [ `tf.train.latest_checkpoint()` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint), regardless ofsharded/non-sharded or V1/V2.


#### 返回：
找到的检查点的mtimes（微秒）列表。

