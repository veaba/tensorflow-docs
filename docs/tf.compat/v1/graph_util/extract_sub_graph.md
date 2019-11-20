[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/graph_util_impl.py#L170-L208)  
---  
  
Extract the subgraph that can reach any of the nodes in 'dest_nodes'.
(deprecated)

    
    
    tf.compat.v1.graph_util.extract_sub_graph(
        graph_def,
        dest_nodes
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`tf.compat.v1.graph_util.extract_sub_graph`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/graph_util/extract_sub_graph)

#### Args:

  * **`graph_def`** : A graph_pb2.GraphDef proto.
  * **`dest_nodes`** : A list of strings specifying the destination node names.

#### Returns:

The GraphDef of the sub-graph.

#### Raises:

  * **`TypeError`** : If 'graph_def' is not a graph_pb2.GraphDef proto.

