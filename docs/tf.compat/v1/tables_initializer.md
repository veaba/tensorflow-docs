返回初始化默认图的所有表的操作。

```
 tf.compat.v1.tables_initializer(name='init_all_tables')
 
```

See the [Low LevelIntro](https://tensorflow.google.cn/guide/low_level_intro#feature_columns)guide, for an example of usage.

#### 参数：
- **`name`** : Optional name for the initialization op.


#### 返回：
An Op that initializes all tables.  Note that if there arenot tables the returned Op is a NoOp.

