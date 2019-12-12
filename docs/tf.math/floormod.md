Returns element-wise remainder of division. When  `x < 0`  xor  `y < 0`  is

**别名** : [ `tf.compat.v1.floormod` ](/api_docs/python/tf/math/floormod), [ `tf.compat.v1.math.floormod` ](/api_docs/python/tf/math/floormod), [ `tf.compat.v1.math.mod` ](/api_docs/python/tf/math/floormod), [ `tf.compat.v1.mod` ](/api_docs/python/tf/math/floormod), [ `tf.compat.v2.math.floormod` ](/api_docs/python/tf/math/floormod), [ `tf.compat.v2.math.mod` ](/api_docs/python/tf/math/floormod), [ `tf.math.mod` ](/api_docs/python/tf/math/floormod)

```
 tf.math.floormod(
    x,
    y,
    name=None
)
 
```

true, this follows Python semantics in that the result here is consistentwith a flooring divide. E.g.  `floor(x / y) * y + mod(x, y) = x` .

*NOTE*: [ `math.floormod` ](https://tensorflow.google.cn/api_docs/python/tf/math/floormod) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` ,  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

