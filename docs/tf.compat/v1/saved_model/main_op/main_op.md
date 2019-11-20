[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/saved_model/main_op_impl.py#L29-L46)  
---  
  
Returns a main op to init variables and tables. (deprecated)

    
    
    tf.compat.v1.saved_model.main_op.main_op()
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: This function will only be available
through the v1 compatibility library as
tf.compat.v1.saved_model.main_op.main_op.

Returns the main op including the group of ops that initializes all variables,
initializes local variables and initialize all tables.

#### Returns:

The set of ops to be run as part of the main op upon the load operation.

