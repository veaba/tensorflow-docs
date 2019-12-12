Returns a main op to init variables and tables. (deprecated)

```
 tf.compat.v1.saved_model.main_op.main_op()
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:This function will only be available through the v1 compatibility library as tf.compat.v1.saved_model.main_op.main_op.
Returns the main op including the group of ops that initializes allvariables, initializes local variables and initialize all tables.

#### 返回：
在加载操作时作为主操作的一部分运行的操作集。

