Segment-wise linear approximation of sigmoid.

**别名** : [ `tf.compat.v1.keras.backend.hard_sigmoid` ](/api_docs/python/tf/keras/backend/hard_sigmoid), [ `tf.compat.v2.keras.backend.hard_sigmoid` ](/api_docs/python/tf/keras/backend/hard_sigmoid)

```
 tf.keras.backend.hard_sigmoid(x)
 
```

Faster than sigmoid.Returns  `0.`  if  `x < -2.5` ,  `1.`  if  `x > 2.5` .In  `-2.5 <= x <= 2.5` , returns  `0.2 * x + 0.5` .

#### 参数：
- **`x`** : A tensor or variable.


#### 返回：
张量

