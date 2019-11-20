[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/graph_util_impl.py#L376-L465)  
---  
  
Prunes out nodes that aren't needed for inference. (deprecated)

    
    
    tf.compat.v1.graph_util.remove_training_nodes(
        input_graph,
        protected_nodes=None
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`tf.compat.v1.graph_util.remove_training_nodes`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/graph_util/remove_training_nodes)

There are nodes like Identity and CheckNumerics that are only useful during
training, and can be removed in graphs that will be used for nothing but
inference. Here we identify and remove them, returning an equivalent graph. To
be specific, CheckNumerics nodes are always removed, and Identity nodes that
aren't involved in control edges are spliced out so that their input and
outputs are directly connected.

#### Args:

  * **`input_graph`** : Model to analyze and prune.
  * **`protected_nodes`** : An optional list of names of nodes to be kept unconditionally. This is for example useful to preserve Identity output nodes.

#### Returns:

A list of nodes with the unnecessary ones removed.

