Returns whether the  `targets`  are in the top  `k`   `predictions` .

**别名** : [ `tf.compat.v1.keras.backend.in_top_k` ](/api_docs/python/tf/keras/backend/in_top_k), [ `tf.compat.v2.keras.backend.in_top_k` ](/api_docs/python/tf/keras/backend/in_top_k)

```
 tf.keras.backend.in_top_k(
    predictions,
    targets,
    k
)
 
```

#### 参数：
- **`predictions`** : A tensor of shape  `(batch_size, classes)`  and type  `float32` .
- **`targets`** : A 1D tensor of length  `batch_size`  and type  `int32`  or  `int64` .
- **`k`** : An  `int` , number of top elements to consider.


#### 返回：
A 1D tensor of length  `batch_size`  and type  `bool` . `output[i]`  is  `True`  if  `predictions[i, targets[i]]`  is within top- `k` values of  `predictions[i]` .

