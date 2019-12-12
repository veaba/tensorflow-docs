Removes a checkpoint given by  `checkpoint_prefix` . (deprecated)

```
 tf.compat.v1.train.remove_checkpoint(    checkpoint_prefix,    checkpoint_format_version=tf.train.SaverDef.V2,    meta_graph_suffix='meta') 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use standard file APIs to delete files with this prefix.


#### 参数：
- **`checkpoint_prefix`** : The prefix of a V1 or V2 checkpoint. Typically the resultof  `Saver.save()`  or that of [ `tf.train.latest_checkpoint()` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint), regardless ofsharded/non-sharded or V1/V2.
- **`checkpoint_format_version`** :  `SaverDef.CheckpointFormatVersion` , defaults to `SaverDef.V2` .
- **`meta_graph_suffix`** : Suffix for  `MetaGraphDef`  file. Defaults to 'meta'.
