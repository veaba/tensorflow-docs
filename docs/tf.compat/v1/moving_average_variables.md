返回保持其移动平均值的所有变量。

```
 tf.compat.v1.moving_average_variables(scope=None) 
```

If an  `ExponentialMovingAverage`  object is created and the  `apply()` method is called on a list of variables, these variables willbe added to the  `GraphKeys.MOVING_AVERAGE_VARIABLES`  collection.This convenience function returns the contents of that collection.

#### 参数：
- **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered toinclude only items whose  `name`  attribute matches  `scope`  using `re.match` . Items without a  `name`  attribute are never returned if a scopeis supplied. The choice of  `re.match`  means that a  `scope`  without specialtokens filters by prefix.


#### 返回：
变量对象的列表。

