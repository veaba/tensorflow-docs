Computes hyperbolic tangent of  `x`  element-wise.

**别名** : [ `tf.compat.v1.math.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.compat.v1.nn.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.compat.v1.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.compat.v2.math.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.compat.v2.nn.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.compat.v2.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.nn.tanh` ](/api_docs/python/tf/math/tanh), [ `tf.tanh` ](/api_docs/python/tf/math/tanh)

```
 tf.math.tanh(
    x,
    name=None
)
 
```

### 在教程中使用：
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)

Given an input tensor, this function computes hyperbolic tangent of everyelement in the tensor. Input range is  `[-inf, inf]`  andoutput range is  `[-1,1]` .


```
 x = tf.constant([-float("inf"), -5, -0.5, 1, 1.2, 2, 3, float("inf")])
tf.math.tanh(x) ==> [-1. -0.99990916 -0.46211717 0.7615942 0.8336547 0.9640276 0.9950547 1.]
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.tanh(x.values, ...), x.dense_shape)` 

