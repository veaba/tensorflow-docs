Returns an Op that initializes all tables of the default graph. (deprecated)

```
 tf.compat.v1.initialize_all_tables(name='init_all_tables')
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use  `tf.tables_initializer`  instead.


#### 参数：
- **`name`** : Optional name for the initialization op.


#### 返回：
An Op that initializes all tables.  Note that if there arenot tables the returned Op is a NoOp.

