创建填充标量值的张量。

**别名** : [ `tf.compat.v1.fill` ](/api_docs/python/tf/fill), [ `tf.compat.v2.fill` ](/api_docs/python/tf/fill)

```
 tf.fill(
    dims,
    value,
    name=None
)
 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)


### 在教程中使用：
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
This operation creates a tensor of shape  `dims`  and fills it with  `value` .

#### 例如：


```
 # Output tensor has shape [2, 3].
fill([2, 3], 9) ==> [[9, 9, 9]
                     [9, 9, 9]]
 
```

[ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) differs from [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) in a few ways:

- [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) only supports scalar contents, whereas [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) supportsTensor values.
- [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) creates an Op in the computation graph that constructs theactualTensor value at runtime. This is in contrast to [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) which embedsthe entire Tensor into the graph with a  `Const`  node.
- Because [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) evaluates at graph runtime, it supports dynamic shapesbased on other runtime Tensors, unlike [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant).


#### 参数：
- **`dims`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` . 1-D.Represents the shape of the output tensor.
- **`value`** : A  `Tensor` . 0-D (scalar). Value to fill the returned tensor.@compatibility(numpy) Equivalent to np.full @end_compatibility
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `value` .

