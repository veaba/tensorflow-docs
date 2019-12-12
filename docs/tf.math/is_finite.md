返回x的哪些元素是有限的。

**别名** : [ `tf.compat.v1.debugging.is_finite` ](/api_docs/python/tf/math/is_finite), [ `tf.compat.v1.is_finite` ](/api_docs/python/tf/math/is_finite), [ `tf.compat.v1.math.is_finite` ](/api_docs/python/tf/math/is_finite), [ `tf.compat.v2.math.is_finite` ](/api_docs/python/tf/math/is_finite)

```
 tf.math.is_finite(
    x,
    name=None
)
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `bool` .

#### numpy兼容性
等价于np.isfinite

