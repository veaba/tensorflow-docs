提供自纪元以来的时间（秒）。

**别名** : [ `tf.compat.v1.timestamp` ](/api_docs/python/tf/timestamp), [ `tf.compat.v2.timestamp` ](/api_docs/python/tf/timestamp)

```
 tf.timestamp(name=None)
 
```

Returns the timestamp as a  `float64`  for seconds since the Unix epoch.


**Note:**  the timestamp is computed when the op is executed, not when it is addedto the graph.


#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float64` .

