[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L5180-L5191)  
---  
  
Wrapper for [`Graph.container()`](/api_docs/python/tf/Graph#container) using
the default graph.

    
    
    tf.compat.v1.container(container_name)
    

#### Args:

  * **`container_name`** : The container string to use in the context.

#### Returns:

A context manager that specifies the default container to use for newly
created stateful ops.

