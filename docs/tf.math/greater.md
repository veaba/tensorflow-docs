Returns the truth value of (x > y) element-wise.

**别名** : [ `tf.compat.v1.greater` ](/api_docs/python/tf/math/greater), [ `tf.compat.v1.math.greater` ](/api_docs/python/tf/math/greater), [ `tf.compat.v2.greater` ](/api_docs/python/tf/math/greater), [ `tf.compat.v2.math.greater` ](/api_docs/python/tf/math/greater), [ `tf.greater` ](/api_docs/python/tf/math/greater)

```
 tf.math.greater(
    x,
    y,
    name=None
)
 
```

*NOTE*: [ `math.greater` ](https://tensorflow.google.cn/api_docs/python/tf/math/greater) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `bool` .

