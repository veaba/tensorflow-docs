为并行性设置单个操作中使用的线程数。

**别名** : [ `tf.compat.v1.config.threading.set_intra_op_parallelism_threads` ](/api_docs/python/tf/config/threading/set_intra_op_parallelism_threads), [ `tf.compat.v2.config.threading.set_intra_op_parallelism_threads` ](/api_docs/python/tf/config/threading/set_intra_op_parallelism_threads)

```
 tf.config.threading.set_intra_op_parallelism_threads(num_threads)
 
```

Certain operations like matrix multiplication and reductions can utilizeparallel threads for speed ups. A value of 0 means the system picks anappropriate number.

#### 参数：
- **`num_threads`** : Number of parallel threads
