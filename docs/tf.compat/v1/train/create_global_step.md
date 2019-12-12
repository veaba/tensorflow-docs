在图中创建全局阶跃张量。

```
 tf.compat.v1.train.create_global_step(graph=None)
 
```

#### 参数：
- **`graph`** : The graph in which to create the global step tensor. If missing, usedefault graph.


#### 返回：
全局阶跃张量。

#### 加薪：
- **`ValueError`** : if global step tensor is already defined.
