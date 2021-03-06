

Computes \(ln(|Beta(x)|)\), reducing along the last dimension.

**别名** : [ `tf.compat.v1.lbeta` ](/api_docs/python/tf/math/lbeta), [ `tf.compat.v1.math.lbeta` ](/api_docs/python/tf/math/lbeta), [ `tf.compat.v2.math.lbeta` ](/api_docs/python/tf/math/lbeta)

```
 tf.math.lbeta(
    x,
    name=None
)
 
```

Given one-dimensional  `z = [z_0,...,z_{K-1}]` , we define


Beta(z)=∏jGamma(zj)/Gamma(∑jzj)
And for  `n + 1`  dimensional  `x`  with shape  `[N1, ..., Nn, K]` , we define


lbeta(x)[i1,...,in]=Log(|Beta(x[i1,...,in,:])|)


In other words, the last dimension is treated as the  `z`  vector.

Note that if  `z = [u, v]` , thenBeta(z)=int10tu−1(1−t)v−1dt, which defines thetraditional bivariate beta function.

If the last dimension is empty, we follow the convention that the sum overthe empty set is zero, and the product is one.

#### 参数：
- **`x`** : A rank  `n + 1`   `Tensor` ,  `n >= 0`  with type  `float` , or  `double` .
- **`name`** : A name for the operation (optional).


#### 返回：
The logarithm of |Beta(x)| reducing along the last dimension.

