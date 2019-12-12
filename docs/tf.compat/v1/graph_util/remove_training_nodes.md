Prunes out nodes that aren't needed for inference. (deprecated)

```
 tf.compat.v1.graph_util.remove_training_nodes(    input_graph,    protected_nodes=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.graph_util.remove_training_nodes` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/graph_util/remove_training_nodes)
There are nodes like Identity and CheckNumerics that are only usefulduring training, and can be removed in graphs that will be used fornothing but inference. Here we identify and remove them, returning anequivalent graph. To be specific, CheckNumerics nodes are always removed, andIdentity nodes that aren't involved in control edges are spliced out so thattheir input and outputs are directly connected.

#### Args:
- **`input_graph`** : Model to analyze and prune.
- **`protected_nodes`** : An optional list of names of nodes to be keptunconditionally. This is for example useful to preserve Identity outputnodes.


#### Returns:
A list of nodes with the unnecessary ones removed.

