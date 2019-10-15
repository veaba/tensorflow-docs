
Set number of threads used within an individual op for parallelism.
### Aliases:
- `tf.compat.v1.config.threading.set_intra_op_parallelism_threads`
- `tf.compat.v2.config.threading.set_intra_op_parallelism_threads`

```
 tf.config.threading.set_intra_op_parallelism_threads(num_threads)
```

Certain operations like matrix multiplication and reductions can utilize parallel threads for speed ups. A value of 0 means the system picks an appropriate number.
#### Args:
- `num_threads`: Number of parallel threads
