

Computes \(ln(|Beta(x)|)\), reducing along the last dimension.



### Aliases:

- [ `tf.compat.v1.lbeta` ](/api_docs/python/tf/math/lbeta)

- [ `tf.compat.v1.math.lbeta` ](/api_docs/python/tf/math/lbeta)

- [ `tf.compat.v2.math.lbeta` ](/api_docs/python/tf/math/lbeta)



```
 tf.math.lbeta(
    x,
    name=None
)
 
```

Given one-dimensional  `z = [z_0,...,z_{K-1}]` , we define


$$Beta(z) = \prod_j Gamma(z_j) / Gamma(\sum_j z_j)$$
And for  `n + 1`  dimensional  `x`  with shape  `[N1, ..., Nn, K]` , we define



\(lbeta(x)[i1, ..., in] = Log(|Beta(x[i1, ..., in, :])|)\)


In other words, the last dimension is treated as the  `z`  vector.

Note that if  `z = [u, v]` , then
Beta(z)=int10tu−1(1−t)v−1dt, which defines the
traditional bivariate beta function.

If the last dimension is empty, we follow the convention that the sum over
the empty set is zero, and the product is one.



#### Args:

- **`x`** : A rank  `n + 1`   `Tensor` ,  `n >= 0`  with type  `float` , or  `double` .

- **`name`** : A name for the operation (optional).



#### Returns:
The logarithm of |Beta(x)| reducing along the last dimension.

