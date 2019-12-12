Returns the min of x and y (i.e. x < y ? x : y) element-wise.

**别名** : [ `tf.compat.v1.math.minimum` ](/api_docs/python/tf/math/minimum), [ `tf.compat.v1.minimum` ](/api_docs/python/tf/math/minimum), [ `tf.compat.v2.math.minimum` ](/api_docs/python/tf/math/minimum), [ `tf.compat.v2.minimum` ](/api_docs/python/tf/math/minimum), [ `tf.minimum` ](/api_docs/python/tf/math/minimum)

```
 tf.math.minimum(
    x,
    y,
    name=None
)
 
```

### 在教程中使用：
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
*NOTE*: [ `math.minimum` ](https://tensorflow.google.cn/api_docs/python/tf/math/minimum) supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

