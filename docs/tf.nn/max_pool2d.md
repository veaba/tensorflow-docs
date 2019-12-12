Performs the max pooling on the input.

**Aliases** : [ `tf.compat.v1.nn.max_pool2d` ](/api_docs/python/tf/nn/max_pool2d), [ `tf.compat.v2.nn.max_pool2d` ](/api_docs/python/tf/nn/max_pool2d)

```
 tf.nn.max_pool2d(
    input,
    ksize,
    strides,
    padding,
    data_format='NHWC',
    name=None
)
 
```

#### Args:
- **`input`** : A 4-D  `Tensor`  of the format specified by  `data_format` .
- **`ksize`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` . The size ofthe window for each dimension of the input tensor.
- **`strides`** : An int or list of  `ints`  that has length  `1` ,  `2`  or  `4` . Thestride of the sliding window for each dimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : A string. 'NHWC', 'NCHW' and 'NCHW_VECT_C' are supported.
- **`name`** : Optional name for the operation.


#### Returns:
A  `Tensor`  of format specified by  `data_format` .The max pooled output tensor.

