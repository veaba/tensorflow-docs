![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Creates a tensor filled with a scalar value.

### Aliases:

- [ `tf.compat.v1.fill` ](/api_docs/python/tf/fill)

- [ `tf.compat.v2.fill` ](/api_docs/python/tf/fill)


```python
tf.fill(
  dims,
  value,
  name=None
)

```


### Used in the guide:

- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)

- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)

### Used in the tutorials:

- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

This operation creates a tensor of shape  `dims`  and fills it with  `value` .

#### For example:


```python
# Output tensor has shape [2, 3].
fill([2, 3], 9) ==&gt; [[9, 9, 9]
          &nbsp;[9, 9, 9]]

```


[ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) differs from [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) in a few ways:

- tf.fill</code></a> only supports scalar contents, whereas <a href="https://tensorflow.google.cn/api_docs/python/tf/constant"><code translate="no" dir="ltr">tf.constant</code></a> supportsTensor values.</li><li><a href="https://tensorflow.google.cn/api_docs/python/tf/fill"><code translate="no" dir="ltr">tf.fill</code></a> creates an Op in the computation graph that constructs theactualTensor value at runtime. This is in contrast to <a href="https://tensorflow.google.cn/api_docs/python/tf/constant"><code translate="no" dir="ltr">tf.constant</code></a> which embedsthe entire Tensor into the graph with a <code translate="no" dir="ltr">Const</code> node.</li><li>Because <a href="https://tensorflow.google.cn/api_docs/python/tf/fill"><code translate="no" dir="ltr">tf.fill</code></a> evaluates at graph runtime, it supports dynamic shapesbased on other runtime Tensors, unlike <a href="https://tensorflow.google.cn/api_docs/python/tf/constant"><code translate="no" dir="ltr">tf.constant</code></a>.
#### Args:

- **`dims`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` . 1-D.Represents the shape of the output tensor.

- **`value`** : A  `Tensor` . 0-D (scalar). Value to fill the returned tensor.@compatibility(numpy) Equivalent to np.full @end_compatibility

- **`name`** : A name for the operation (optional).

#### Returns:

A  `Tensor` . Has the same type as  `value` .
