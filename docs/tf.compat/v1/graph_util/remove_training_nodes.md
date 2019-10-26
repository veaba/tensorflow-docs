Prunes out nodes that aren't needed for inference. (deprecated)

```
 tf.compat.v1.graph_util.remove_training_nodes(
    input_graph,
    protected_nodes=None
)
```
There are nodes like Identity and CheckNumerics that are only useful during training, and can be removed in graphs that will be used for nothing but inference. Here we identify and remove them, returning an equivalent graph. To be specific, CheckNumerics nodes are always removed, and Identity nodes that aren't involved in control edges are spliced out so that their input and outputs are directly connected.
#### Args:
- input_graph: Model to analyze and prune.
- protected_nodes: An optional list of names of nodes to be kept unconditionally. This is for example useful to preserve Identity output nodes.
#### Returns:
A list of nodes with the unnecessary ones removed.
