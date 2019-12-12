返回局部变量。

```
 tf.compat.v1.local_variables(scope=None)
 
```

Local variables - per process variables, usually not saved/restored tocheckpoint and used for temporary or intermediate values.For example, they can be used as counters for metrics computation ornumber of epochs this machine has read data.The  `tf.contrib.framework.local_variable()`  function automatically adds thenew variable to  `GraphKeys.LOCAL_VARIABLES` .This convenience function returns the contents of that collection.

An alternative to local variables are global variables. See[ `tf.compat.v1.global_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/global_variables)

#### 参数：
- **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered toinclude only items whose  `name`  attribute matches  `scope`  using `re.match` . Items without a  `name`  attribute are never returned if a scopeis supplied. The choice of  `re.match`  means that a  `scope`  without specialtokens filters by prefix.


#### 返回：
A list of local  `Variable`  objects.

