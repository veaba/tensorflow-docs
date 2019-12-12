关闭正在运行的分布式TPU系统。

```
 tf.compat.v1.tpu.shutdown_system(job=None) 
```

#### 参数：
- **`job`** : The job (the XXX in TensorFlow device specification /job:XXX) thatcontains the TPU devices that will be shutdown. If job=None it isassumed there is only one job in the TensorFlow flock, and an error willbe returned if this assumption does not hold.
