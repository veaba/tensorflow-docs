获取操作是同步执行还是异步执行。

**别名** : [ `tf.compat.v1.config.experimental.get_synchronous_execution` ](/api_docs/python/tf/config/experimental/get_synchronous_execution), [ `tf.compat.v2.config.experimental.get_synchronous_execution` ](/api_docs/python/tf/config/experimental/get_synchronous_execution)

```
 tf.config.experimental.get_synchronous_execution()
 
```

TensorFlow can execute operations synchronously or asynchronously. Ifasynchronous execution is enabled, operations may return "non-ready" handles.

#### 返回：
当前线程执行模式

