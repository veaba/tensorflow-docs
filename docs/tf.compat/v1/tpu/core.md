返回复制的TPU计算中核心的设备名。

```
 tf.compat.v1.tpu.core(num) 
```

#### 参数：
- **`num`** : the virtual core number within each replica to which operators shouldbe assigned.


#### 返回：
A device name, suitable for passing to [ `tf.device()` ](https://tensorflow.google.cn/api_docs/python/tf/device).

