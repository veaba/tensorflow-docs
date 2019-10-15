
Helpers to manipulate a tensor graph in python.
## Functions
[convert_variables_to_constants(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/graph_util/convert_variables_to_constants): Replaces all the variables in a graph with constants of the same values. (deprecated)

[extract_sub_graph(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/graph_util/extract_sub_graph): Extract the subgraph that can reach any of the nodes in 'dest_nodes'. (deprecated)

[import_graph_def(...)](https://www.tensorflow.org/api_docs/python/tf/graph_util/import_graph_def): Imports the graph from graph_def into the current default Graph. (deprecated arguments)

[must_run_on_cpu(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/graph_util/must_run_on_cpu): Returns True if the given node_def must run on CPU, otherwise False. (deprecated)

[remove_training_nodes(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/graph_util/remove_training_nodes): Prunes out nodes that aren't needed for inference. (deprecated)

[tensor_shape_from_node_def_name(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/graph_util/tensor_shape_from_node_def_name): Convenience function to get a shape from a NodeDef's input string. (deprecated)

