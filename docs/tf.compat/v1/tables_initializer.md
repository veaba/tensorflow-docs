Returns an Op that initializes all tables of the default graph.

```
 tf.compat.v1.tables_initializer(name='init_all_tables')
 
```

See the [Low LevelIntro](https://tensorflow.google.cn/guide/low_level_intro#feature_columns)guide, for an example of usage.

#### Args:
- **`name`** : Optional name for the initialization op.


#### Returns:
An Op that initializes all tables.  Note that if there arenot tables the returned Op is a NoOp.

