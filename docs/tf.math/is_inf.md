返回x的哪些元素是inf。

**别名** : [ `tf.compat.v1.debugging.is_inf` ](/api_docs/python/tf/math/is_inf), [ `tf.compat.v1.is_inf` ](/api_docs/python/tf/math/is_inf), [ `tf.compat.v1.math.is_inf` ](/api_docs/python/tf/math/is_inf), [ `tf.compat.v2.math.is_inf` ](/api_docs/python/tf/math/is_inf)

```
 tf.math.is_inf(    x,    name=None) 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `bool` .

#### numpy兼容性
相当于np.isinf

