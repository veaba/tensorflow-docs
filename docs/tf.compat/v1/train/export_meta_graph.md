Returns  `MetaGraphDef`  proto.

```
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
 
```

可以选择将其写入文件名。

This function exports the graph, saver, and collection objects into `MetaGraphDef`  protocol buffer with the intention of it being importedat a later time or location to restart training, run inference, or bea subgraph.

#### 参数：
- **`filename`** : Optional filename including the path for writing the generated `MetaGraphDef`  protocol buffer.
- **`meta_info_def`** :  `MetaInfoDef`  protocol buffer.
- **`graph_def`** :  `GraphDef`  protocol buffer.
- **`saver_def`** :  `SaverDef`  protocol buffer.
- **`collection_list`** : List of string keys to collect.
- **`as_text`** : If  `True` , writes the  `MetaGraphDef`  as an ASCII proto.
- **`graph`** : The  `Graph`  to export. If  `None` , use the default graph.
- **`export_scope`** : Optional  `string` . Name scope under which to extract thesubgraph. The scope name will be striped from the node definitions foreasy import later into new name scopes. If  `None` , the whole graph isexported. graph_def and export_scope cannot both be specified.
- **`clear_devices`** : Whether or not to clear the device field for an  `Operation` or  `Tensor`  during export.
- **`clear_extraneous_savers`** : Remove any Saver-related information from the graph(both Save/Restore ops and SaverDefs) that are not associated with theprovided SaverDef.
- **`strip_default_attrs`** : Boolean. If  `True` , default-valued attributes will beremoved from the NodeDefs. For a detailed guide, see[Stripping Default-Valued Attributes](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/saved_model/README.md#stripping-default-valued-attributes).
- **`save_debug_info`** : If  `True` , save the GraphDebugInfo to a separate file,which in the same directory of filename and with  `_debug`  added before thefile extend.
- **`**kwargs`** : Optional keyed arguments.


#### 返回：
A  `MetaGraphDef`  proto.

#### 加薪：
- **`ValueError`** : When the  `GraphDef`  is larger than 2GB.
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
Exporting/importing meta graphs is not supported unless both  `graph_def`  and `graph`  are provided. No graph exists when eager execution is enabled.

