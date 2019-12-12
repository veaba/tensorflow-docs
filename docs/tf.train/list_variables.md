返回检查点中所有变量的列表。

**别名** : [ `tf.compat.v1.train.list_variables` ](/api_docs/python/tf/train/list_variables), [ `tf.compat.v2.train.list_variables` ](/api_docs/python/tf/train/list_variables)

```
 tf.train.list_variables(ckpt_dir_or_file)
 
```

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)


#### 参数：
- **`ckpt_dir_or_file`** : Directory with checkpoints file or path to checkpoint.


#### 返回：
List of tuples  `(name, shape)` .

