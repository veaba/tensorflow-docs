Standard deviation of a tensor, alongside the specified axis.

**别名** : [ `tf.compat.v1.keras.backend.std` ](/api_docs/python/tf/keras/backend/std), [ `tf.compat.v2.keras.backend.std` ](/api_docs/python/tf/keras/backend/std)

```
 tf.keras.backend.std(
    x,
    axis=None,
    keepdims=False
)
 
```

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


#### 参数：
- **`x`** : A tensor or variable.
- **`axis`** : An integer, the axis to compute the standard deviation.
- **`keepdims`** : A boolean, whether to keep the dimensions or not.If  `keepdims`  is  `False` , the rank of the tensor is reducedby 1. If  `keepdims`  is  `True` ,the reduced dimension is retained with length 1.


#### 返回：
A tensor with the standard deviation of elements of  `x` .

