Computes the Bessel i1e function of  `x`  element-wise.

**别名** : [ `tf.compat.v1.math.bessel_i1e` ](/api_docs/python/tf/math/bessel_i1e), [ `tf.compat.v2.math.bessel_i1e` ](/api_docs/python/tf/math/bessel_i1e)

```
 tf.math.bessel_i1e(
    x,
    name=None
)
 
```

Exponentially scaled modified Bessel function of order 0 defined as `bessel_i1e(x) = exp(-abs(x)) bessel_i1(x)` .

This function is faster and numerically stabler than  `bessel_i1(x)` .

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.bessel_i1e(x.values, ...), x.dense_shape)` 

