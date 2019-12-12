创建常量张量。

```
 tf.constant(
    value,
    dtype=None,
    shape=None,
    name='Const'
)
 
```

### 在指南中使用：
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)


### 在教程中使用：
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Word embeddings](https://tensorflow.google.cn/tutorials/text/word_embeddings)
The resulting tensor is populated with values of type  `dtype` , asspecified by arguments  `value`  and (optionally)  `shape`  (see examplesbelow).

The argument  `value`  can be a constant value, or a list of values of type `dtype` . If  `value`  is a list, then the length of the list must be lessthan or equal to the number of elements implied by the  `shape`  argument (ifspecified). In the case where the list length is less than the number ofelements specified by  `shape` , the last element in the list will be usedto fill the remaining entries.

The argument  `shape`  is optional. If present, it specifies the dimensions ofthe resulting tensor. If not present, the shape of  `value`  is used.

If the argument  `dtype`  is not specified, then the type is inferred fromthe type of  `value` .

#### 例如：


```
 # Constant 1-D Tensor populated with value list.
tensor = tf.constant([1, 2, 3, 4, 5, 6]) => [1 2 3 4 5 6]

# Constant 1-D Tensor populated with value list.
tensor = tf.constant([1, 2, 3, 4, 5, 6], shape=(2,3))
     => [[1 2 3], [4 5 6]]

# Constant 2-D tensor populated with scalar value -1.
tensor = tf.constant(-1.0, shape=[2, 3]) => [[-1. -1. -1.]
                                             [-1. -1. -1.]]
 
```

[ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) differs from [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) in a few ways:

- [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) supports arbitrary constants, not just uniform scalarTensors like [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill).
- [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) creates a  `Const`  node in the computation graph with theexact value at graph construction time. On the other hand, [ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill)creates an Op in the graph that is expanded at runtime.
- Because [ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) only embeds constant values in the graph, it doesnot support dynamic shapes based on other runtime Tensors, whereas[ `tf.fill` ](https://tensorflow.google.cn/api_docs/python/tf/fill) does.


#### 参数：
- **`value`** :          A constant value (or list) of output type  `dtype` .


- **`dtype`** :          The type of the elements of the resulting tensor.


- **`shape`** :          Optional dimensions of resulting tensor.


- **`name`** :           Optional name for the tensor.


#### 返回：
恒定张量

#### 加薪：
- **`TypeError`** : if shape is incorrectly specified or unsupported.
