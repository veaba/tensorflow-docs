[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L5841-L5858)  
---  
  
Clears the default graph stack and resets the global default graph.

    
    
    tf.compat.v1.reset_default_graph()
    

NOTE: The default graph is a property of the current thread. This function
applies only to the current thread. Calling this function while a
[`tf.compat.v1.Session`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)
or
[`tf.compat.v1.InteractiveSession`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/InteractiveSession)
is active will result in undefined behavior. Using any previously created
[`tf.Operation`](https://tensorflow.google.cn/api_docs/python/tf/Operation) or
[`tf.Tensor`](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects
after calling this function will result in undefined behavior. Raises:
AssertionError: If this function is called within a nested graph.

