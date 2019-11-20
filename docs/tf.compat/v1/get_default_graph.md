[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L5861-L5877)  
---  
  
Returns the default graph for the current thread.

    
    
    tf.compat.v1.get_default_graph()
    

The returned graph will be the innermost graph on which a
[`Graph.as_default()`](/api_docs/python/tf/Graph#as_default) context has been
entered, or a global default graph if none has been explicitly created.

NOTE: The default graph is a property of the current thread. If you create a
new thread, and wish to use the default graph in that thread, you must
explicitly add a `with g.as_default():` in that thread's function.

#### Returns:

The default `Graph` being used in the current thread.

