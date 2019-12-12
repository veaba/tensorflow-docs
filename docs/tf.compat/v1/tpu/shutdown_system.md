Shuts down a running a distributed TPU system.

```
 tf.compat.v1.tpu.shutdown_system(job=None) 
```

#### Args:
- **`job`** : The job (the XXX in TensorFlow device specification /job:XXX) thatcontains the TPU devices that will be shutdown. If job=None it isassumed there is only one job in the TensorFlow flock, and an error willbe returned if this assumption does not hold.
