

Computes square of x element-wise.

**别名** : [ `tf.compat.v1.math.square` ](/api_docs/python/tf/math/square), [ `tf.compat.v1.square` ](/api_docs/python/tf/math/square), [ `tf.compat.v2.math.square` ](/api_docs/python/tf/math/square), [ `tf.compat.v2.square` ](/api_docs/python/tf/math/square), [ `tf.square` ](/api_docs/python/tf/math/square)

```
 tf.math.square(
    x,
    name=None
)
 
```

### 在指南中使用：
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)
- [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
- [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
I.e., y=x∗x=x2.

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.square(x.values, ...), x.dense_shape)` 

