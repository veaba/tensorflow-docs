得到全局阶跃张量。

```
 tf.compat.v1.train.get_global_step(graph=None) 
```

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
The global step tensor must be an integer variable. We first try to find itin the collection  `GLOBAL_STEP` , or by name  `global_step:0` .

#### 参数：
- **`graph`** : The graph to find the global step in. If missing, use default graph.


#### 返回：
The global step variable, or  `None`  if none was found.

#### 加薪：
- **`TypeError`** : If the global step tensor has a non-integer type, or if it is nota  `Variable` .
