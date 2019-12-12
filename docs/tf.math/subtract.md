Returns x - y element-wise.

**别名** : [ `tf.compat.v1.math.subtract` ](/api_docs/python/tf/math/subtract), [ `tf.compat.v1.subtract` ](/api_docs/python/tf/math/subtract), [ `tf.compat.v2.math.subtract` ](/api_docs/python/tf/math/subtract), [ `tf.compat.v2.subtract` ](/api_docs/python/tf/math/subtract), [ `tf.subtract` ](/api_docs/python/tf/math/subtract)

```
 tf.math.subtract(
    x,
    y,
    name=None
)
 
```

*NOTE*:  `Subtract`  supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `uint8` ,  `int8` ,  `uint16` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

