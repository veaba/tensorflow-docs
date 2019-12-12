

Compute the lower regularized incomplete Gamma function  `P(a, x)` .

**别名** : [ `tf.compat.v1.igamma` ](/api_docs/python/tf/math/igamma), [ `tf.compat.v1.math.igamma` ](/api_docs/python/tf/math/igamma), [ `tf.compat.v2.math.igamma` ](/api_docs/python/tf/math/igamma)

```
 tf.math.igamma(
    a,
    x,
    name=None
)
 
```

下正则化不完全伽马函数定义为：

P(a,x)=gamma(a,x)/Gamma(a)=1−Q(a,x)

where

gamma(a,x)=intx0ta−1exp(−t)dt

是下不完全伽马函数。

Note, above  `Q(a, x)`  ( `Igammac` ) is the upper regularized completeGamma function.

#### 参数：
- **`a`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .
- **`x`** : A  `Tensor` . Must have the same type as  `a` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `a` .

