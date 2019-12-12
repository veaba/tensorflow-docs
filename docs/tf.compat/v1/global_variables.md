返回全局变量。

```
 tf.compat.v1.global_variables(scope=None)
 
```

Global variables are variables that are shared across machines in adistributed environment. The  `Variable()`  constructor or  `get_variable()` automatically adds new variables to the graph collection `GraphKeys.GLOBAL_VARIABLES` .This convenience function returns the contents of that collection.

An alternative to global variables are local variables. See[ `tf.compat.v1.local_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/local_variables)

#### 参数：
- **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered toinclude only items whose  `name`  attribute matches  `scope`  using `re.match` . Items without a  `name`  attribute are never returned if a scopeis supplied. The choice of  `re.match`  means that a  `scope`  without specialtokens filters by prefix.


#### 返回：
A list of  `Variable`  objects.

