Variance of a tensor, alongside the specified axis.

**别名** : [ `tf.compat.v1.keras.backend.var` ](/api_docs/python/tf/keras/backend/var), [ `tf.compat.v2.keras.backend.var` ](/api_docs/python/tf/keras/backend/var)

```
 tf.keras.backend.var(
    x,
    axis=None,
    keepdims=False
)
 
```

#### 参数：
- **`x`** : A tensor or variable.
- **`axis`** : An integer, the axis to compute the variance.
- **`keepdims`** : A boolean, whether to keep the dimensions or not.If  `keepdims`  is  `False` , the rank of the tensor is reducedby 1. If  `keepdims`  is  `True` ,the reduced dimension is retained with length 1.


#### 返回：
A tensor with the variance of elements of  `x` .

