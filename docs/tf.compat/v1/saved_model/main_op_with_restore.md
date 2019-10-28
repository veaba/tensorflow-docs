Returns a main op to init variables, tables and restore the graph. (deprecated)
### Aliases:
- `tf.compat.v1.saved_model.main_op.main_op_with_restore`

```
 tf.compat.v1.saved_model.main_op_with_restore(restore_op_name)
```
Returns the main op including the group of ops that initializes all variables, initialize local variables, initialize all tables and the restore op name.
#### Args:
- `restore_op_name`: Name of the op to use to restore the graph.
#### Returns:
The set of ops to be run as part of the main op upon the load operation.
