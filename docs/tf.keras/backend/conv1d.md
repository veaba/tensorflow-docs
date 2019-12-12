1D convolution.

**别名** : [ `tf.compat.v1.keras.backend.conv1d` ](/api_docs/python/tf/keras/backend/conv1d), [ `tf.compat.v2.keras.backend.conv1d` ](/api_docs/python/tf/keras/backend/conv1d)

```
 tf.keras.backend.conv1d(    x,    kernel,    strides=1,    padding='valid',    data_format=None,    dilation_rate=1) 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`kernel`** : kernel tensor.
- **`strides`** : stride integer.
- **`padding`** : string,  `"same"` ,  `"causal"`  or  `"valid"` .
- **`data_format`** : string, one of "channels_last", "channels_first".
- **`dilation_rate`** : integer dilate rate.


#### 返回：
A tensor, result of 1D convolution.

#### 加薪：
- **`ValueError`** : if  `data_format`  is neither  `channels_last`  or `channels_first` .
