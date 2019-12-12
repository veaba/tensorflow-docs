Sets entries in  `x`  to zero at random, while scaling the entire tensor.

**别名** : [ `tf.compat.v1.keras.backend.dropout` ](/api_docs/python/tf/keras/backend/dropout), [ `tf.compat.v2.keras.backend.dropout` ](/api_docs/python/tf/keras/backend/dropout)

```
 tf.keras.backend.dropout(
    x,
    level,
    noise_shape=None,
    seed=None
)
 
```

#### 参数：
- **`x`** : tensor
- **`level`** : fraction of the entries in the tensorthat will be set to 0.
- **`noise_shape`** : shape for randomly generated keep/drop flags,must be broadcastable to the shape of  `x` 
- **`seed`** : random seed to ensure determinism.


#### 返回：
张量

