返回值的截断随机正态分布的张量。

**别名** : [ `tf.compat.v1.keras.backend.truncated_normal` ](/api_docs/python/tf/keras/backend/truncated_normal), [ `tf.compat.v2.keras.backend.truncated_normal` ](/api_docs/python/tf/keras/backend/truncated_normal)

```
 tf.keras.backend.truncated_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=None,
    seed=None
)
 
```

The generated values follow a normal distributionwith specified mean and standard deviation,except that values whose magnitude is more thantwo standard deviations from the mean are dropped and re-picked.

#### 参数：
- **`shape`** : A tuple of integers, the shape of tensor to create.
- **`mean`** : Mean of the values.
- **`stddev`** : Standard deviation of the values.
- **`dtype`** : String, dtype of returned tensor.
- **`seed`** : Integer, random seed.


#### 返回：
张量

