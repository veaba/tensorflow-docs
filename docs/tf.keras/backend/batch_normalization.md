Applies batch normalization on x given mean, var, beta and gamma.

**别名** : [ `tf.compat.v1.keras.backend.batch_normalization` ](/api_docs/python/tf/keras/backend/batch_normalization), [ `tf.compat.v2.keras.backend.batch_normalization` ](/api_docs/python/tf/keras/backend/batch_normalization)

```
 tf.keras.backend.batch_normalization(
    x,
    mean,
    var,
    beta,
    gamma,
    axis=-1,
    epsilon=0.001
)
 
```

I.e. returns: `output = (x - mean) / (sqrt(var) + epsilon) * gamma + beta` 

#### 参数：
- **`x`** : Input tensor or variable.
- **`mean`** : Mean of batch.
- **`var`** : Variance of batch.
- **`beta`** : Tensor with which to center the input.
- **`gamma`** : Tensor by which to scale the input.
- **`axis`** : Integer, the axis that should be normalized.(typically the features axis).
- **`epsilon`** : Fuzz factor.


#### 返回：
张量

