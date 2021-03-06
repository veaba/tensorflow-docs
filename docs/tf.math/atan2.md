

Computes arctangent of  `y/x`  element-wise, respecting signs of the arguments.

**别名** : [ `tf.atan2` ](/api_docs/python/tf/math/atan2), [ `tf.compat.v1.atan2` ](/api_docs/python/tf/math/atan2), [ `tf.compat.v1.math.atan2` ](/api_docs/python/tf/math/atan2), [ `tf.compat.v2.atan2` ](/api_docs/python/tf/math/atan2), [ `tf.compat.v2.math.atan2` ](/api_docs/python/tf/math/atan2)

```
 tf.math.atan2(
    y,
    x,
    name=None
)
 
```

This is the angle ( \theta \in [-\pi, \pi] ) such that[ x = r \cos(\theta) ]and[ y = r \sin(\theta) ]where (r = \sqrt(x^2 + y^2) ).

#### 参数：
- **`y`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`x`** : A  `Tensor` . Must have the same type as  `y` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `y` .

