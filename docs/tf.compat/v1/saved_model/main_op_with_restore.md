Returns a main op to init variables, tables and restore the graph. (deprecated)

```
 tf.compat.v1.saved_model.main_op_with_restore(restore_op_name)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This function will only be available through the v1 compatibility library as tf.compat.v1.saved_model.main_op_with_restore or tf.compat.v1.saved_model.main_op.main_op_with_restore.
Returns the main op including the group of ops that initializes allvariables, initialize local variables, initialize all tables and the restoreop name.

#### 参数：
- **`restore_op_name`** : Name of the op to use to restore the graph.


#### 返回：
在加载操作时作为主操作的一部分运行的操作集。

