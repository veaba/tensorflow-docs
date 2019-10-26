Replaces all the variables in a graph with constants of the same values. (deprecated)

```
 tf.compat.v1.graph_util.convert_variables_to_constants(
    sess,
    input_graph_def,
    output_node_names,
    variable_names_whitelist=None,
    variable_names_blacklist=None
)
```
If you have a trained graph containing Variable ops, it can be convenient to convert them all to Const ops holding the same values. This makes it possible to describe the network fully with a single GraphDef file, and allows the removal of a lot of ops related to loading and saving the variables.
#### Args:
- sess: Active TensorFlow session containing the variables.
- input_graph_def: GraphDef object holding the network.
- output_node_names: List of name strings for the result nodes of the graph.
- variable_names_whitelist: The set of variable names to convert (by default, all variables are converted).
- variable_names_blacklist: The set of variable names to omit converting to constants.
#### Returns:
GraphDef containing a simplified version of the original.
