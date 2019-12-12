将带有liteop提示的graphdef转换为存根操作。

```
 tf.compat.v1.lite.experimental.convert_op_hints_to_stubs(    session=None,    graph_def=None,    write_callback=(lambda graph_def, comments: None)) 
```

This is used to prepare for toco conversion of complex intrinsic usages.注意：only one of session or graph_def should be used, not both.

#### 参数：
- **`session`** : A TensorFlow session that contains the graph to convert.
- **`graph_def`** : A graph def that we should convert.
- **`write_callback`** : A function pointer that can be used to write intermediatesteps of graph transformation (optional).


#### 返回：
A new graphdef with all ops contained in OpHints being replaced bya single op call with the right parameters.

#### 加薪：
- **`ValueError`** : If both session and graph_def are provided.
