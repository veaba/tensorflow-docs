整流线性单元。

**别名** : [ `tf.compat.v1.keras.backend.relu` ](/api_docs/python/tf/keras/backend/relu), [ `tf.compat.v2.keras.backend.relu` ](/api_docs/python/tf/keras/backend/relu)

```
 tf.keras.backend.relu(
    x,
    alpha=0.0,
    max_value=None,
    threshold=0
)
 
```

With default values, it returns element-wise  `max(x, 0)` .

Otherwise, it follows: `f(x) = max_value`  for  `x >= max_value` , `f(x) = x`  for  `threshold <= x < max_value` , `f(x) = alpha * (x - threshold)`  otherwise.

#### 参数：
- **`x`** : A tensor or variable.
- **`alpha`** : A scalar, slope of negative section (default= `0.` ).
- **`max_value`** : float. Saturation threshold.
- **`threshold`** : float. Threshold value for thresholded activation.


#### 返回：
张量

