Returns (x - y)(x - y) element-wise.

**别名** : [ `tf.compat.v1.math.squared_difference` ](/api_docs/python/tf/math/squared_difference), [ `tf.compat.v1.squared_difference` ](/api_docs/python/tf/math/squared_difference), [ `tf.compat.v2.math.squared_difference` ](/api_docs/python/tf/math/squared_difference)

```
 tf.math.squared_difference(
    x,
    y,
    name=None
)
 
```

*NOTE*: [ `math.squared_difference` ](https://tensorflow.google.cn/api_docs/python/tf/math/squared_difference) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

