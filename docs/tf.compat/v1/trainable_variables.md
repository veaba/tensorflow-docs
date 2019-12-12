Returns all variables created with  `trainable=True` .

```
 tf.compat.v1.trainable_variables(scope=None) 
```

When passed  `trainable=True` , the  `Variable()`  constructor automaticallyadds new variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES` . This convenience function returns thecontents of that collection.

#### 参数：
- **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered toinclude only items whose  `name`  attribute matches  `scope`  using `re.match` . Items without a  `name`  attribute are never returned if a scopeis supplied. The choice of  `re.match`  means that a  `scope`  without specialtokens filters by prefix.


#### 返回：
变量对象的列表。

