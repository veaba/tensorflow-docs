Performs the max pooling on the input.

**Aliases** : [ `tf.compat.v1.nn.max_pool1d` ](/api_docs/python/tf/nn/max_pool1d), [ `tf.compat.v2.nn.max_pool1d` ](/api_docs/python/tf/nn/max_pool1d)

```
 tf.nn.max_pool1d(
    input,
    ksize,
    strides,
    padding,
    data_format='NWC',
    name=None
)
 
```

Note internally this op reshapes and uses the underlying 2d operation.

#### Args:
- **`input`** : A 3-D  `Tensor`  of the format specified by  `data_format` .
- **`ksize`** : An int or list of  `ints`  that has length  `1`  or  `3` . The size of thewindow for each dimension of the input tensor.
- **`strides`** : An int or list of  `ints`  that has length  `1`  or  `3` . The stride ofthe sliding window for each dimension of the input tensor.
- **`padding`** : A string, either  `'VALID'`  or  `'SAME'` . The padding algorithm. Seethe "returns" section of [ `tf.nn.convolution` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution) for details.
- **`data_format`** : An optional string from: "NWC", "NCW". Defaults to "NWC".
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of format specified by  `data_format` .The max pooled output tensor.

