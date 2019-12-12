Returns the max of x and y (i.e. x > y ? x : y) element-wise.

**Aliases** : [ `tf.compat.v1.math.maximum` ](/api_docs/python/tf/math/maximum), [ `tf.compat.v1.maximum` ](/api_docs/python/tf/math/maximum), [ `tf.compat.v2.math.maximum` ](/api_docs/python/tf/math/maximum), [ `tf.compat.v2.maximum` ](/api_docs/python/tf/math/maximum), [ `tf.maximum` ](/api_docs/python/tf/math/maximum)

```
 tf.math.maximum(
    x,
    y,
    name=None
)
 
```

### Used in the tutorials:
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
*NOTE*: [ `math.maximum` ](https://tensorflow.google.cn/api_docs/python/tf/math/maximum) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `x` .

