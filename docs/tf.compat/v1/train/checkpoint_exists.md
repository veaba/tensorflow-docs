Checks whether a V1 or V2 checkpoint exists with the specified prefix. (deprecated)

```
 tf.compat.v1.train.checkpoint_exists(checkpoint_prefix)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use standard file APIs to check for files with this prefix.
This is the recommended way to check if a checkpoint exists, since it takesinto account the naming difference between V1 and V2 formats.

#### 参数：
- **`checkpoint_prefix`** : the prefix of a V1 or V2 checkpoint, with V2 takingpriority.  Typically the result of  `Saver.save()`  or that of[ `tf.train.latest_checkpoint()` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint), regardless of sharded/non-sharded orV1/V2.


#### 返回：
A bool, true if a checkpoint referred to by  `checkpoint_prefix`  exists.

