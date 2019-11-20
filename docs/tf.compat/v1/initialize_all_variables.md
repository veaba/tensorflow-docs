[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L3243-L3248)  
---  
  
See
[`tf.compat.v1.global_variables_initializer`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/global_variables_initializer).
(deprecated)

    
    
    tf.compat.v1.initialize_all_variables()
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed after 2017-03-02.
Instructions for updating: Use `tf.global_variables_initializer` instead.

**NOTE** The output of this function should be used. If it is not, a warning
will be logged. To mark the output as used, call its .mark_used() method.

