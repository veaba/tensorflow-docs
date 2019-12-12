合并默认图表中收集的所有摘要。

```
 tf.compat.v1.summary.merge_all(
    key=tf.GraphKeys.SUMMARIES,
    scope=None,
    name=None
)
 
```

#### 参数：
- **`key`** :  `GraphKey`  used to collect the summaries.  Defaults to `GraphKeys.SUMMARIES` .
- **`scope`** : Optional scope used to filter the summary ops, using  `re.match` 


#### 返回：
If no summaries were collected, returns None.  Otherwise returns a scalar `Tensor`  of type  `string`  containing the serialized  `Summary`  protocolbuffer resulting from the merging.

#### 加薪：
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
Not compatible with eager execution. To write TensorBoardsummaries under eager execution, use  `tf.contrib.summary`  instead.

