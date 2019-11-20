[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L3251-L3262)  
---  
  
Returns an Op that initializes all local variables.

### Aliases:

  * [`tf.compat.v1.initializers.local_variables`](/api_docs/python/tf/compat/v1/local_variables_initializer)

    
    
    tf.compat.v1.local_variables_initializer()
    

This is just a shortcut for `variables_initializer(local_variables())`

#### Returns:

An Op that initializes all local variables in the graph.

