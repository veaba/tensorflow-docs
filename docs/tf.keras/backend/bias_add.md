将偏移向量添加到张量。

**别名** : [ `tf.compat.v1.keras.backend.bias_add` ](/api_docs/python/tf/keras/backend/bias_add), [ `tf.compat.v2.keras.backend.bias_add` ](/api_docs/python/tf/keras/backend/bias_add)

```
 tf.keras.backend.bias_add(
    x,
    bias,
    data_format=None
)
 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`bias`** : Bias tensor to add.
- **`data_format`** : string,  `"channels_last"`  or  `"channels_first"` .


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : In one of the two cases below:        1. invalid  `data_format`  argument.        2. invalid bias shape.           the bias should be either a vector or           a tensor with ndim(x) - 1 dimension
