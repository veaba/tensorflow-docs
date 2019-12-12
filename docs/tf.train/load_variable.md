返回检查点中给定变量的张量值。

**别名** : [ `tf.compat.v1.train.load_variable` ](/api_docs/python/tf/train/load_variable), [ `tf.compat.v2.train.load_variable` ](/api_docs/python/tf/train/load_variable)

```
 tf.train.load_variable(
    ckpt_dir_or_file,
    name
)
 
```

#### 参数：
- **`ckpt_dir_or_file`** : Directory with checkpoints file or path to checkpoint.
- **`name`** : Name of the variable to return.


#### 返回：
A numpy  `ndarray`  with a copy of the value of this variable.

