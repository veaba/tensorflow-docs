[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L3229-L3240)  
---  
  
Returns an Op that initializes global variables.

### Aliases:

  * [`tf.compat.v1.initializers.global_variables`](/api_docs/python/tf/compat/v1/global_variables_initializer)

    
    
    tf.compat.v1.global_variables_initializer()
    

This is just a shortcut for `variables_initializer(global_variables())`

#### Returns:

An Op that initializes global variables in the graph.

