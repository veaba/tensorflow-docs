计算多项式的元素值。

**别名** : [ `tf.compat.v1.math.polyval` ](/api_docs/python/tf/math/polyval), [ `tf.compat.v2.math.polyval` ](/api_docs/python/tf/math/polyval)

```
 tf.math.polyval(
    coeffs,
    x,
    name=None
)
 
```

If  `x`  is a tensor and  `coeffs`  is a list n + 1 tensors, this function returnsthe value of the n-th order polynomial

p(x) = coeffs[n-1] + coeffs[n-2] * x + ...  + coeffs[0] * x**(n-1)

evaluated using Horner's method, i.e.

p(x) = coeffs[n-1] + x * (coeffs[n-2] + ... + x * (coeffs[1] +          x * coeffs[0]))

#### 参数：
- **`coeffs`** : A list of  `Tensor`  representing the coefficients of the polynomial.
- **`x`** : A  `Tensor`  representing the variable of the polynomial.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `tensor`  of the shape as the expression p(x) with usual broadcasting rulesfor element-wise addition and multiplication applied.

#### numpy兼容性
相当于numpy.polyval。

