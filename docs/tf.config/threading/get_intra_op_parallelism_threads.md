获取单个操作中用于并行性的线程数。

**别名** : [ `tf.compat.v1.config.threading.get_intra_op_parallelism_threads` ](/api_docs/python/tf/config/threading/get_intra_op_parallelism_threads), [ `tf.compat.v2.config.threading.get_intra_op_parallelism_threads` ](/api_docs/python/tf/config/threading/get_intra_op_parallelism_threads)

```
 tf.config.threading.get_intra_op_parallelism_threads()
 
```

Certain operations like matrix multiplication and reductions can utilizeparallel threads for speed ups. A value of 0 means the system picks anappropriate number.

#### 返回：
并行线程数

