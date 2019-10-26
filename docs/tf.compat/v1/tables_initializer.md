Returns an Op that initializes all tables of the default graph.
### Aliases:
- tf.compat.v1.initializers.tables_initializer

```
 tf.compat.v1.tables_initializer(name='init_all_tables')
```
[Low Level Intro](https://tensorflow.google.cn/guide/low_level_intro#feature_columns)See the  guide, for an example of usage.

#### Args:
- name: Optional name for the initialization op.
#### Returns:
An Op that initializes all tables. Note that if there are not tables the returned Op is a NoOp.
