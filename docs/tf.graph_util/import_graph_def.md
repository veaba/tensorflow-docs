Imports the graph from  `graph_def`  into the current default  `Graph` . (deprecated arguments)

**别名** : [ `tf.compat.v1.graph_util.import_graph_def` ](/api_docs/python/tf/graph_util/import_graph_def), [ `tf.compat.v1.import_graph_def` ](/api_docs/python/tf/graph_util/import_graph_def), [ `tf.compat.v2.graph_util.import_graph_def` ](/api_docs/python/tf/graph_util/import_graph_def), [ `tf.compat.v2.import_graph_def` ](/api_docs/python/tf/graph_util/import_graph_def), [ `tf.import_graph_def` ](/api_docs/python/tf/graph_util/import_graph_def)

```
 tf.graph_util.import_graph_def(
    graph_def,
    input_map=None,
    return_elements=None,
    name=None,
    op_dict=None,
    producer_op_list=None
)
 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)

**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(op_dict)` . They will be removed in a future version.Instructions for updating:Please file an issue at https://github.com/tensorflow/tensorflow/issues if you depend on this feature.
This function provides a way to import a serialized TensorFlow[ `GraphDef` ](https://tensorflow.google.cn/code/tensorflow/core/framework/graph.proto)protocol buffer, and extract individual objects in the  `GraphDef`  as[ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) and [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) objects. Once extracted,these objects are placed into the current default  `Graph` . See[ `tf.Graph.as_graph_def` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#as_graph_def) for a way to create a  `GraphDef` proto.

#### 参数：
- **`graph_def`** : A  `GraphDef`  proto containing operations to be imported intothe default graph.
- **`input_map`** : A dictionary mapping input names (as strings) in  `graph_def` to  `Tensor`  objects. The values of the named input tensors in theimported graph will be re-mapped to the respective  `Tensor`  values.
- **`return_elements`** : A list of strings containing operation names in `graph_def`  that will be returned as  `Operation`  objects; and/ortensor names in  `graph_def`  that will be returned as  `Tensor`  objects.
- **`name`** : (Optional.) A prefix that will be prepended to the names in `graph_def` . Note that this does not apply to imported function names.Defaults to  `"import"` .
- **`op_dict`** : (Optional.) Deprecated, do not use.
- **`producer_op_list`** : (Optional.) An  `OpList`  proto with the (possibly stripped)list of  `OpDef` s used by the producer of the graph. If provided,unrecognized attrs for ops in  `graph_def`  that have their default valueaccording to  `producer_op_list`  will be removed. This will allow some more `GraphDef` s produced by later binaries to be accepted by earlier binaries.


#### 返回：
A list of  `Operation`  and/or  `Tensor`  objects from the imported graph,corresponding to the names in  `return_elements` ,and None if  `returns_elements`  is None.

#### 加薪：
- **`TypeError`** : If  `graph_def`  is not a  `GraphDef`  proto, `input_map`  is not a dictionary mapping strings to  `Tensor`  objects,or  `return_elements`  is not a list of strings.
- **`ValueError`** : If  `input_map` , or  `return_elements`  contains names thatdo not appear in  `graph_def` , or  `graph_def`  is not well-formed (e.g.it refers to an unknown tensor).
