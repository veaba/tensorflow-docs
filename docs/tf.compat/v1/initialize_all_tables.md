[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L51-L63)  
---  
  
Returns an Op that initializes all tables of the default graph. (deprecated)

    
    
    tf.compat.v1.initialize_all_tables(name='init_all_tables')
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use `tf.tables_initializer` instead.

#### Args:

  * **`name`** : Optional name for the initialization op.

#### Returns:

An Op that initializes all tables. Note that if there are not tables the
returned Op is a NoOp.

