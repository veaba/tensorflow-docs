Returns True if the given node_def must run on CPU, otherwise False. (deprecated)

```
 tf.compat.v1.graph_util.must_run_on_cpu(
    node,
    pin_variables_on_cpu=False
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.graph_util.must_run_on_cpu` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/graph_util/must_run_on_cpu)


#### 参数：
- **`node`** : The node to be assigned to a device. Could be either an ops.Operationor NodeDef.
- **`pin_variables_on_cpu`** : If True, this function will return False if node_defrepresents a variable-related op.


#### 返回：
True if the given node must run on CPU, otherwise False.

