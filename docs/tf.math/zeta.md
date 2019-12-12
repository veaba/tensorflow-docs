

Compute the Hurwitz zeta function \(\zeta(x, q)\).

**别名** : [ `tf.compat.v1.math.zeta` ](/api_docs/python/tf/math/zeta), [ `tf.compat.v1.zeta` ](/api_docs/python/tf/math/zeta), [ `tf.compat.v2.math.zeta` ](/api_docs/python/tf/math/zeta)

```
 tf.math.zeta(
    x,
    q,
    name=None
)
 
```

hurwitz zeta函数定义为：

ζ(x,q)=∑∞n=0(q+n)−x

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .
- **`q`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

