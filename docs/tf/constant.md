![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Creates a constant tensor.

### Aliases:

- [ `tf.compat.v2.constant` ](/api_docs/python/tf/constant)


```python
tf.constant(
  value,
  dtype=None,
  shape=None,
  name='Const'
)

```


### Used in the guide:

- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)

- [Use a GPU](https://tensorflow.google.cn/guide/gpu)

- [Eager execution](https://tensorflow.google.cn/guide/eager)

- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)

- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)

### Used in the tutorials:

- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)

- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)

- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

- [Word embeddings](https://tensorflow.google.cn/tutorials/text/word_embeddings)

The resulting tensor is populated with values of type  `dtype` , asspecified by arguments  `value`  and (optionally)  `shape`  (see examplesbelow).

The argument  `value`  can be a constant value, or a list of values of type `dtype` . If  `value`  is a list, then the length of the list must be lessthan or equal to the number of elements implied by the  `shape`  argument (ifspecified). In the case where the list length is less than the number ofelements specified by  `shape` , the last element in the list will be usedto fill the remaining entries.

The argument  `shape`  is optional. If present, it specifies the dimensions ofthe resulting tensor. If not present, the shape of  `value`  is used.

If the argument  `dtype`  is not specified, then the type is inferred fromthe type of  `value` .

#### For example:


```python
# Constant 1-D Tensor populated with value list.
tensor = tf.constant([1, 2, 3, 4, 5, 6]) =&gt; [1 2 3 4 5 6]

# Constant 1-D Tensor populated with value list.
tensor = tf.constant([1, 2, 3, 4, 5, 6], shape=(2,3))
  &nbsp;=&gt; [[1 2 3], [4 5 6]]

# Constant 2-D tensor populated with scalar value -1.
tensor = tf.constant(-1.0, shape=[2, 3]) =&gt; [[-1. -1. -1.]
                      &nbsp;[-1. -1. -1.]]

```


[ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) differs from [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) in a few ways:

- tf.constant</code></a> supports arbitrary constants, not just uniform scalarTensors like <a href="https://tensorflow.google.cn/api_docs/python/tf/fill"><code translate="no" dir="ltr">tf.fill</code></a>.</li><li><a href="https://tensorflow.google.cn/api_docs/python/tf/constant"><code translate="no" dir="ltr">tf.constant</code></a> creates a <code translate="no" dir="ltr">Const</code> node in the computation graph with theexact value at graph construction time. On the other hand, <a href="https://tensorflow.google.cn/api_docs/python/tf/fill"><code translate="no" dir="ltr">tf.fill</code></a>creates an Op in the graph that is expanded at runtime.</li><li>Because <a href="https://tensorflow.google.cn/api_docs/python/tf/constant"><code translate="no" dir="ltr">tf.constant</code></a> only embeds constant values in the graph, it doesnot support dynamic shapes based on other runtime Tensors, whereas<a href="https://tensorflow.google.cn/api_docs/python/tf/fill"><code translate="no" dir="ltr">tf.fill</code></a> does.
#### Args:

- <p>**`value`** :          A constant value (or list) of output type  `dtype` .</p>

- <p>**`dtype`** :          The type of the elements of the resulting tensor.</p>

- <p>**`shape`** :          Optional dimensions of resulting tensor.</p>

- <p>**`name`** :           Optional name for the tensor.</p>

#### Returns:

A Constant Tensor.

#### Raises:

- **`TypeError`** : if shape is incorrectly specified or unsupported.
