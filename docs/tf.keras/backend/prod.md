Multiplies the values in a tensor, alongside the specified axis.

**别名** : [ `tf.compat.v1.keras.backend.prod` ](/api_docs/python/tf/keras/backend/prod), [ `tf.compat.v2.keras.backend.prod` ](/api_docs/python/tf/keras/backend/prod)

```
 tf.keras.backend.prod(
    x,
    axis=None,
    keepdims=False
)
 
```

#### 参数：
- **`x`** : A tensor or variable.
- **`axis`** : An integer, the axis to compute the product.
- **`keepdims`** : A boolean, whether to keep the dimensions or not.If  `keepdims`  is  `False` , the rank of the tensor is reducedby 1. If  `keepdims`  is  `True` ,the reduced dimension is retained with length 1.


#### 返回：
A tensor with the product of elements of  `x` .

