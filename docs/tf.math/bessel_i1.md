Computes the Bessel i1 function of  `x`  element-wise.

**别名** : [ `tf.compat.v1.math.bessel_i1` ](/api_docs/python/tf/math/bessel_i1), [ `tf.compat.v2.math.bessel_i1` ](/api_docs/python/tf/math/bessel_i1)

```
 tf.math.bessel_i1(
    x,
    name=None
)
 
```

一阶修正贝塞尔函数。

It is preferable to use the numerically stabler function  `i1e(x)`  instead.

#### 参数：
- **`x`** : A  `Tensor`  or  `SparseTensor` . Must be one of the following types:  `half` , `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  or  `SparseTensor` , respectively. Has the same type as  `x` .

#### scipy兼容性
相当于scipy.special.i1

