Mean of a tensor, alongside the specified axis.

**别名** : [ `tf.compat.v1.keras.backend.mean` ](/api_docs/python/tf/keras/backend/mean), [ `tf.compat.v2.keras.backend.mean` ](/api_docs/python/tf/keras/backend/mean)

```
 tf.keras.backend.mean(
    x,
    axis=None,
    keepdims=False
)
 
```

#### 参数：
- **`x`** : A tensor or variable.
- **`axis`** : A list of integer. Axes to compute the mean.
- **`keepdims`** : A boolean, whether to keep the dimensions or not.If  `keepdims`  is  `False` , the rank of the tensor is reducedby 1 for each entry in  `axis` . If  `keepdims`  is  `True` ,the reduced dimensions are retained with length 1.


#### 返回：
A tensor with the mean of elements of  `x` .

