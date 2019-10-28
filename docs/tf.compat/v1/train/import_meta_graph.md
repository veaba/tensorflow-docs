Recreates a Graph saved in a `MetaGraphDef` proto.

```
 tf.compat.v1.train.import_meta_graph(
    meta_graph_or_file,
    clear_devices=False,
    import_scope=None,
    **kwargs
)
```
This function takes a `MetaGraphDef` protocol buffer as input. If the argument is a file containing a `MetaGraphDef` protocol buffer , it constructs a protocol buffer from the file content. The function then adds all the nodes from the `graph_def` field to the current graph, recreates all the collections, and returns a saver constructed from the `saver_def` field.
