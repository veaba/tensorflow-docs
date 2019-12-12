Computes mean and std for batch then apply batch_normalization on batch.

**别名** : [ `tf.compat.v1.keras.backend.normalize_batch_in_training` ](/api_docs/python/tf/keras/backend/normalize_batch_in_training), [ `tf.compat.v2.keras.backend.normalize_batch_in_training` ](/api_docs/python/tf/keras/backend/normalize_batch_in_training)

```
 tf.keras.backend.normalize_batch_in_training(    x,    gamma,    beta,    reduction_axes,    epsilon=0.001) 
```

#### 参数：
- **`x`** : Input tensor or variable.
- **`gamma`** : Tensor by which to scale the input.
- **`beta`** : Tensor with which to center the input.
- **`reduction_axes`** : iterable of integers,axes over which to normalize.
- **`epsilon`** : Fuzz factor.


#### 返回：
A tuple length of 3,  `(normalized_tensor, mean, variance)` .

