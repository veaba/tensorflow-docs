Replaces all the variables in a graph with constants of the same values. (deprecated)

```
 tf.compat.v1.graph_util.convert_variables_to_constants(    sess,    input_graph_def,    output_node_names,    variable_names_whitelist=None,    variable_names_blacklist=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.graph_util.convert_variables_to_constants` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/graph_util/convert_variables_to_constants)
If you have a trained graph containing Variable ops, it can be convenient toconvert them all to Const ops holding the same values. This makes it possibleto describe the network fully with a single GraphDef file, and allows theremoval of a lot of ops related to loading and saving the variables.

#### 参数：
- **`sess`** : Active TensorFlow session containing the variables.
- **`input_graph_def`** : GraphDef object holding the network.
- **`output_node_names`** : List of name strings for the result nodes of the graph.
- **`variable_names_whitelist`** : The set of variable names to convert (by default,                      all variables are converted).
- **`variable_names_blacklist`** : The set of variable names to omit converting                      to constants.


#### 返回：
包含原始版本的简化版本的graphdef。

