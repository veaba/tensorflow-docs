设置用于独立操作之间并行的线程数。

**别名** : [ `tf.compat.v1.config.threading.set_inter_op_parallelism_threads` ](/api_docs/python/tf/config/threading/set_inter_op_parallelism_threads), [ `tf.compat.v2.config.threading.set_inter_op_parallelism_threads` ](/api_docs/python/tf/config/threading/set_inter_op_parallelism_threads)

```
 tf.config.threading.set_inter_op_parallelism_threads(num_threads)
 
```

Determines the number of threads used by independent non-blocking operations.0 means the system picks an appropriate number.

#### 参数：
- **`num_threads`** : Number of parallel threads
