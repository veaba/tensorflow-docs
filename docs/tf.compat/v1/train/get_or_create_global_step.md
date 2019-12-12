返回并创建（如果需要）全局阶跃张量。

```
 tf.compat.v1.train.get_or_create_global_step(graph=None) 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### 在教程中使用：
- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)


#### 参数：
- **`graph`** : The graph in which to create the global step tensor. If missing, usedefault graph.


#### 返回：
全局阶跃张量。

