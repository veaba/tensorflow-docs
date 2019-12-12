Returns all variables in the MODEL_VARIABLES collection.

```
 tf.compat.v1.model_variables(scope=None)
 
```

#### 参数：
- **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered toinclude only items whose  `name`  attribute matches  `scope`  using `re.match` . Items without a  `name`  attribute are never returned if a scopeis supplied. The choice of  `re.match`  means that a  `scope`  without specialtokens filters by prefix.


#### 返回：
局部变量对象的列表。

