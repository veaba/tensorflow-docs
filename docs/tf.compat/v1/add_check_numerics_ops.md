Connect a [ `tf.debugging.check_numerics` ](https://tensorflow.google.cn/api_docs/python/tf/debugging/check_numerics) to every floating point tensor.

```
 tf.compat.v1.add_check_numerics_ops()
 
```

 `check_numerics`  operations themselves are added for each  `half` ,  `float` ,or  `double`  tensor in the current default graph. For all ops in the graph, the `check_numerics`  op for all of its ( `half` ,  `float` , or  `double` ) inputsis guaranteed to run before the  `check_numerics`  op on any of its outputs.


**Note:**  This API is not compatible with the use of [ `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) or[ `tf.while_loop` ](https://tensorflow.google.cn/api_docs/python/tf/while_loop), and will raise a  `ValueError`  if you attempt to call itin such a graph.


#### 返回：
A  `group`  op depending on all  `check_numerics`  ops added.

#### 加薪：
- **`ValueError`** : If the graph contains any numeric operations in a control flowstructure.
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
Not compatible with eager execution. To check for  `Inf` s and  `NaN` s undereager execution, call  `tfe.seterr(inf_or_nan='raise')`  once before executingthe checked operations.

