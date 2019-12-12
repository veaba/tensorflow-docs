设置数值表达式中使用的模糊因子的值。

**别名** : [ `tf.compat.v1.keras.backend.set_epsilon` ](/api_docs/python/tf/keras/backend/set_epsilon), [ `tf.compat.v2.keras.backend.set_epsilon` ](/api_docs/python/tf/keras/backend/set_epsilon)

```
 tf.keras.backend.set_epsilon(value)
 
```

#### 参数：
- **`value`** : float. New value of epsilon.Example:  `python from keras import backend as K K.epsilon() >>> 1e-07K.set_epsilon(1e-05) K.epsilon() >>> 1e-05` 
