Connect a [ `tf.debugging.check_numerics` ](https://tensorflow.google.cn/api_docs/python/tf/debugging/check_numerics) to every floating point tensor.



```
 tf.compat.v1.add_check_numerics_ops()
 
```

 `check_numerics`  operations themselves are added for each  `half` ,  `float` ,
or  `double`  tensor in the current default graph. For all ops in the graph, the
 `check_numerics`  op for all of its ( `half` ,  `float` , or  `double` ) inputs
is guaranteed to run before the  `check_numerics`  op on any of its outputs.


[**Note:**  This API is not compatible with the use of  `tf.cond` ](https://tensorflow.google.cn/api_docs/python/tf/cond) or
[ `tf.while_loop` ](https://tensorflow.google.cn/api_docs/python/tf/while_loop), and will raise a  `ValueError`  if you attempt to call it
in such a graph.</aside>


#### Returns:
A  `group`  op depending on all  `check_numerics`  ops added.



#### Raises:

- **`ValueError`** : If the graph contains any numeric operations in a control flow
structure.

- **`RuntimeError`** : If called with eager execution enabled.



#### Eager Compatibility
Not compatible with eager execution. To check for  `Inf` s and  `NaN` s under
eager execution, call  `tfe.seterr(inf_or_nan='raise')`  once before executing
the checked operations.

