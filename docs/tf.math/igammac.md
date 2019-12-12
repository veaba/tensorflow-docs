

Compute the upper regularized incomplete Gamma function  `Q(a, x)` .

**别名** : [ `tf.compat.v1.igammac` ](/api_docs/python/tf/math/igammac), [ `tf.compat.v1.math.igammac` ](/api_docs/python/tf/math/igammac), [ `tf.compat.v2.math.igammac` ](/api_docs/python/tf/math/igammac)

```
 tf.math.igammac(
    a,
    x,
    name=None
)
 
```

上正则化不完全伽马函数定义为：

\(Q(a, x) = Gamma(a, x) / Gamma(a) = 1 - P(a, x)\)

where

Gamma(a,x)=int∞xta−1exp(−t)dt

是上不完全gama函数。

Note, above  `P(a, x)`  ( `Igamma` ) is the lower regularized completeGamma function.

#### 参数：
- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .
- **`x`** : A  `Tensor` . Must have the same type as  `a` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `a` .

