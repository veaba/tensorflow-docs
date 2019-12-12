2D deconvolution (i.e.

**别名** : [ `tf.compat.v1.keras.backend.conv2d_transpose` ](/api_docs/python/tf/keras/backend/conv2d_transpose), [ `tf.compat.v2.keras.backend.conv2d_transpose` ](/api_docs/python/tf/keras/backend/conv2d_transpose)

```
 tf.keras.backend.conv2d_transpose(
    x,
    kernel,
    output_shape,
    strides=(1, 1),
    padding='valid',
    data_format=None,
    dilation_rate=(1, 1)
)
 
```

转置卷积）。

#### 参数：
- **`x`** : Tensor or variable.
- **`kernel`** : kernel tensor.
- **`output_shape`** : 1D int tensor for the output shape.
- **`strides`** : strides tuple.
- **`padding`** : string,  `"same"`  or  `"valid"` .
- **`data_format`** : string,  `"channels_last"`  or  `"channels_first"` .
- **`dilation_rate`** : Tuple of 2 integers.


#### 返回：
A tensor, result of transposed 2D convolution.

#### 加薪：
- **`ValueError`** : if  `data_format`  is neither  `channels_last`  or `channels_first` .
