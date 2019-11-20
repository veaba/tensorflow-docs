[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/main_op_impl.py#L50-L72)  
---  
  
Returns a main op to init variables, tables and restore the graph.
(deprecated)

### Aliases:

  * [`tf.compat.v1.saved_model.main_op.main_op_with_restore`](/api_docs/python/tf/compat/v1/saved_model/main_op_with_restore)

    
    
    tf.compat.v1.saved_model.main_op_with_restore(restore_op_name)
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: This function will only be available
through the v1 compatibility library as
tf.compat.v1.saved_model.main_op_with_restore or
tf.compat.v1.saved_model.main_op.main_op_with_restore.

Returns the main op including the group of ops that initializes all variables,
initialize local variables, initialize all tables and the restore op name.

#### Args:

  * **`restore_op_name`** : Name of the op to use to restore the graph.

#### Returns:

The set of ops to be run as part of the main op upon the load operation.

