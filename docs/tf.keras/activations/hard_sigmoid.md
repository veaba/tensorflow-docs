硬乙状结肠激活功能。

**别名** : [ `tf.compat.v1.keras.activations.hard_sigmoid` ](/api_docs/python/tf/keras/activations/hard_sigmoid), [ `tf.compat.v2.keras.activations.hard_sigmoid` ](/api_docs/python/tf/keras/activations/hard_sigmoid)

```
 tf.keras.activations.hard_sigmoid(x)
 
```

计算速度比乙状结肠激活快。

#### 参数：
- **`x`** : Input tensor.


#### 返回：
Hard sigmoid activation:

-  `0`  if  `x < -2.5` 
-  `1`  if  `x > 2.5` 
-  `0.2 * x + 0.5`  if  `-2.5 <= x <= 2.5` .
