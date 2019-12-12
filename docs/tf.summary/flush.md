强制摘要编写器将任何缓冲数据发送到存储。

```
 tf.summary.flush(    writer=None,    name=None) 
```

这项行动一直持续到结束。

#### 参数：
- **`writer`** : The [ `tf.summary.SummaryWriter` ](https://tensorflow.google.cn/api_docs/python/tf/summary/SummaryWriter) resource to flush.The thread default will be used if this parameter is None.Otherwise a [ `tf.no_op` ](https://tensorflow.google.cn/api_docs/python/tf/no_op) is returned.
- **`name`** : A name for the operation (optional).


#### 返回：
The created [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation).

