[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/saver.py#L1508-L1590)  
---  
  
Returns `MetaGraphDef` proto.

    
    
    tf.compat.v1.train.export_meta_graph(
        filename=None,
        meta_info_def=None,
        graph_def=None,
        saver_def=None,
        collection_list=None,
        as_text=False,
        graph=None,
        export_scope=None,
        clear_devices=False,
        clear_extraneous_savers=False,
        strip_default_attrs=False,
        save_debug_info=False,
        **kwargs
    )
    

Optionally writes it to filename.

This function exports the graph, saver, and collection objects into
`MetaGraphDef` protocol buffer with the intention of it being imported at a
later time or location to restart training, run inference, or be a subgraph.

#### Args:

  * **`filename`** : Optional filename including the path for writing the generated `MetaGraphDef` protocol buffer.
  * **`meta_info_def`** : `MetaInfoDef` protocol buffer.
  * **`graph_def`** : `GraphDef` protocol buffer.
  * **`saver_def`** : `SaverDef` protocol buffer.
  * **`collection_list`** : List of string keys to collect.
  * **`as_text`** : If `True`, writes the `MetaGraphDef` as an ASCII proto.
  * **`graph`** : The `Graph` to export. If `None`, use the default graph.
  * **`export_scope`** : Optional `string`. Name scope under which to extract the subgraph. The scope name will be striped from the node definitions for easy import later into new name scopes. If `None`, the whole graph is exported. graph_def and export_scope cannot both be specified.
  * **`clear_devices`** : Whether or not to clear the device field for an `Operation` or `Tensor` during export.
  * **`clear_extraneous_savers`** : Remove any Saver-related information from the graph (both Save/Restore ops and SaverDefs) that are not associated with the provided SaverDef.
  * **`strip_default_attrs`** : Boolean. If `True`, default-valued attributes will be removed from the NodeDefs. For a detailed guide, see [Stripping Default-Valued Attributes](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md#stripping-default-valued-attributes).
  * **`save_debug_info`** : If `True`, save the GraphDebugInfo to a separate file, which in the same directory of filename and with `_debug` added before the file extend.
  * **`**kwargs`** : Optional keyed arguments.

#### Returns:

A `MetaGraphDef` proto.

#### Raises:

  * **`ValueError`** : When the `GraphDef` is larger than 2GB.
  * **`RuntimeError`** : If called with eager execution enabled.

#### Eager Compatibility

Exporting/importing meta graphs is not supported unless both `graph_def` and
`graph` are provided. No graph exists when eager execution is enabled.

