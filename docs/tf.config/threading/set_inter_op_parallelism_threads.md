Set number of threads used for parallelism between independent operations.

**Aliases** : [ `tf.compat.v1.config.threading.set_inter_op_parallelism_threads` ](/api_docs/python/tf/config/threading/set_inter_op_parallelism_threads), [ `tf.compat.v2.config.threading.set_inter_op_parallelism_threads` ](/api_docs/python/tf/config/threading/set_inter_op_parallelism_threads)

```
 tf.config.threading.set_inter_op_parallelism_threads(num_threads)
 
```

Determines the number of threads used by independent non-blocking operations.0 means the system picks an appropriate number.

#### Args:
- **`num_threads`** : Number of parallel threads
