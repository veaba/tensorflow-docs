Extract the subgraph that can reach any of the nodes in 'dest_nodes'. (deprecated)

```
 tf.compat.v1.graph_util.extract_sub_graph(
    graph_def,
    dest_nodes
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.graph_util.extract_sub_graph` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/graph_util/extract_sub_graph)


#### 参数：
- **`graph_def`** : A graph_pb2.GraphDef proto.
- **`dest_nodes`** : A list of strings specifying the destination node names.


#### 返回：
The GraphDef of the sub-graph.

#### 加薪：
- **`TypeError`** : If 'graph_def' is not a graph_pb2.GraphDef proto.
