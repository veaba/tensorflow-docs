

Compute the polygamma function \(\psi^{(n)}(x)\).

**别名** : [ `tf.compat.v1.math.polygamma` ](/api_docs/python/tf/math/polygamma), [ `tf.compat.v1.polygamma` ](/api_docs/python/tf/math/polygamma), [ `tf.compat.v2.math.polygamma` ](/api_docs/python/tf/math/polygamma)

```
 tf.math.polygamma(
    a,
    x,
    name=None
)
 
```

polygamma函数定义为：

ψ(a)(x)=dadxaψ(x)

where ψ(x) is the digamma function.The polygamma function is defined only for non-negative integer orders \a\.

#### 参数：
- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .
- **`x`** : A  `Tensor` . Must have the same type as  `a` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `a` .

