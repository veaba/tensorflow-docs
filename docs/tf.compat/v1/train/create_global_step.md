[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/training_util.py#L106-L144)  
---  
  
Create global step tensor in graph.

    
    
    tf.compat.v1.train.create_global_step(graph=None)
    

#### Args:

  * **`graph`** : The graph in which to create the global step tensor. If missing, use default graph.

#### Returns:

Global step tensor.

#### Raises:

  * **`ValueError`** : if global step tensor is already defined.

