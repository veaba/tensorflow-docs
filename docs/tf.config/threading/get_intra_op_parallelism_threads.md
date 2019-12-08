Get number of threads used within an individual op for parallelism.



### Aliases:

- [ `tf.compat.v1.config.threading.get_intra_op_parallelism_threads` ](/api_docs/python/tf/config/threading/get_intra_op_parallelism_threads)

- [ `tf.compat.v2.config.threading.get_intra_op_parallelism_threads` ](/api_docs/python/tf/config/threading/get_intra_op_parallelism_threads)



```
 tf.config.threading.get_intra_op_parallelism_threads()
 
```

Certain operations like matrix multiplication and reductions can utilize
parallel threads for speed ups. A value of 0 means the system picks an
appropriate number.



#### Returns:
Number of parallel threads

