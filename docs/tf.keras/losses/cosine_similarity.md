计算标签和预测之间的余弦相似性。

**别名** : [ `tf.compat.v1.keras.losses.cosine` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.compat.v1.keras.losses.cosine_proximity` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.compat.v1.keras.losses.cosine_similarity` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.compat.v1.keras.metrics.cosine` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.compat.v1.keras.metrics.cosine_proximity` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.compat.v2.keras.losses.cosine_similarity` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.compat.v2.losses.cosine_similarity` ](/api_docs/python/tf/keras/losses/cosine_similarity), [ `tf.losses.cosine_similarity` ](/api_docs/python/tf/keras/losses/cosine_similarity)

```
 tf.keras.losses.cosine_similarity(
    y_true,
    y_pred,
    axis=-1
)
 
```

Note that it is a negative quantity between -1 and 0, where 0 indicatesorthogonality and values closer to -1 indicate greater similarity. This makesit usable as a loss function in a setting where you try to maximize theproximity between predictions and targets.

 `loss = -sum(y_true * y_pred)` 

#### 参数：
- **`y_true`** : Tensor of true targets.
- **`y_pred`** : Tensor of predicted targets.
- **`axis`** : Axis along which to determine similarity.


#### 返回：
余弦相似张量。

