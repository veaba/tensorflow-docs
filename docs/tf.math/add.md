Defined in generated file:  `python/ops/gen_math_ops.py` 

Returns x + y element-wise.



### Aliases:

- [ `tf.RaggedTensor.**add** ` ](/api_docs/python/tf/RaggedTensor#__add__)

- [ `tf.add` ](/api_docs/python/tf/math/add)

- [ `tf.compat.v1.RaggedTensor.**add** ` ](/api_docs/python/tf/RaggedTensor#__add__)

- [ `tf.compat.v1.add` ](/api_docs/python/tf/math/add)

- [ `tf.compat.v1.math.add` ](/api_docs/python/tf/math/add)

- [ `tf.compat.v2.RaggedTensor.**add** ` ](/api_docs/python/tf/RaggedTensor#__add__)

- [ `tf.compat.v2.add` ](/api_docs/python/tf/math/add)

- [ `tf.compat.v2.math.add` ](/api_docs/python/tf/math/add)



```
 tf.math.add(
    x,
    y,
    name=None
)
 
```



### Used in the guide:

- [Eager execution](https://tensorflow.google.cn/guide/eager)

- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)



### Used in the tutorials:

- [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)

<em>NOTE</em>: [ `math.add` ](https://tensorflow.google.cn/api_docs/python/tf/math/add) supports broadcasting.  `AddN`  does not. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)



#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `uint8` ,  `int8` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` ,  `string` .

- **`y`** : A  `Tensor` . Must have the same type as  `x` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

