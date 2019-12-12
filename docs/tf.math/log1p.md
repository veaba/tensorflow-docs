

Computes natural logarithm of (1 + x) element-wise.

**别名** : [ `tf.compat.v1.log1p` ](/api_docs/python/tf/math/log1p), [ `tf.compat.v1.math.log1p` ](/api_docs/python/tf/math/log1p), [ `tf.compat.v2.math.log1p` ](/api_docs/python/tf/math/log1p)

```
 tf.math.log1p(
    x,
    name=None
)
 
```

I.e., y=loge(1+x).

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

