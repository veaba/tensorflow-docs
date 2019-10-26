Returns a main op to init variables and tables. (deprecated)

```
 tf.compat.v1.saved_model.main_op.main_op()
```
Returns the main op including the group of ops that initializes all variables, initializes local variables and initialize all tables.
#### Returns:
The set of ops to be run as part of the main op upon the load operation.
