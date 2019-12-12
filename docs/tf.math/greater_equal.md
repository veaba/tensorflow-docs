Returns the truth value of (x >= y) element-wise.

**Aliases** : [ `tf.compat.v1.greater_equal` ](/api_docs/python/tf/math/greater_equal), [ `tf.compat.v1.math.greater_equal` ](/api_docs/python/tf/math/greater_equal), [ `tf.compat.v2.greater_equal` ](/api_docs/python/tf/math/greater_equal), [ `tf.compat.v2.math.greater_equal` ](/api_docs/python/tf/math/greater_equal), [ `tf.greater_equal` ](/api_docs/python/tf/math/greater_equal)

```
 tf.math.greater_equal(
    x,
    y,
    name=None
)
 
```

*NOTE*: [ `math.greater_equal` ](https://tensorflow.google.cn/api_docs/python/tf/math/greater_equal) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `int64` ,  `bfloat16` ,  `uint16` ,  `half` ,  `uint32` ,  `uint64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `bool` .

