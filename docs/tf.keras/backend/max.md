张量的最大值。

**别名** : [ `tf.compat.v1.keras.backend.max` ](/api_docs/python/tf/keras/backend/max), [ `tf.compat.v2.keras.backend.max` ](/api_docs/python/tf/keras/backend/max)

```
 tf.keras.backend.max(    x,    axis=None,    keepdims=False) 
```

#### 参数：
- **`x`** : A tensor or variable.
- **`axis`** : An integer, the axis to find maximum values.
- **`keepdims`** : A boolean, whether to keep the dimensions or not.If  `keepdims`  is  `False` , the rank of the tensor is reducedby 1. If  `keepdims`  is  `True` ,the reduced dimension is retained with length 1.


#### 返回：
A tensor with maximum values of  `x` .

