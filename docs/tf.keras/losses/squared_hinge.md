Computes the squared hinge loss between  `y_true`  and  `y_pred` .

**别名** : [ `tf.compat.v1.keras.losses.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.compat.v1.keras.metrics.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.compat.v2.keras.losses.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.compat.v2.keras.metrics.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.compat.v2.losses.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.compat.v2.metrics.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.keras.metrics.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.losses.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge), [ `tf.metrics.squared_hinge` ](/api_docs/python/tf/keras/losses/squared_hinge)

```
 tf.keras.losses.squared_hinge(
    y_true,
    y_pred
)
 
```

#### 参数：
- **`y_true`** : The ground truth values.  `y_true`  values are expected to be -1 or 1.If binary (0 or 1) labels are provided we will convert them to -1 or 1.
- **`y_pred`** : The predicted values.


#### 返回：
每个样本有一个标量损失项的张量。

