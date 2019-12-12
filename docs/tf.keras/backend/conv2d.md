2D convolution.

**别名** : [ `tf.compat.v1.keras.backend.conv2d` ](/api_docs/python/tf/keras/backend/conv2d), [ `tf.compat.v2.keras.backend.conv2d` ](/api_docs/python/tf/keras/backend/conv2d)

```
 tf.keras.backend.conv2d(
    x,
    kernel,
    strides=(1, 1),
    padding='valid',
    data_format=None,
    dilation_rate=(1, 1)
)
 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`kernel`** : kernel tensor.
- **`strides`** : strides tuple.
- **`padding`** : string,  `"same"`  or  `"valid"` .
- **`data_format`** :  `"channels_last"`  or  `"channels_first"` .
- **`dilation_rate`** : tuple of 2 integers.


#### 返回：
A tensor, result of 2D convolution.

#### 加薪：
- **`ValueError`** : if  `data_format`  is neither  `channels_last`  or `channels_first` .
