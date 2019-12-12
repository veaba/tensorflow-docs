指定操作是同步执行还是异步执行。

**别名** : [ `tf.compat.v1.config.experimental.set_synchronous_execution` ](/api_docs/python/tf/config/experimental/set_synchronous_execution), [ `tf.compat.v2.config.experimental.set_synchronous_execution` ](/api_docs/python/tf/config/experimental/set_synchronous_execution)

```
 tf.config.experimental.set_synchronous_execution(enable)
 
```

TensorFlow can execute operations synchronously or asynchronously. Ifasynchronous execution is enabled, operations may return "non-ready" handles.

When  `enable`  is set to None, an appropriate value will be pickedautomatically. The value picked may change between TensorFlow releases.

#### 参数：
- **`enable`** : Whether operations should be dispatched synchronously.Valid values:
    - None: sets the system default.
    - True: executes each operation synchronously.
    - False: executes each operation asynchronously.
