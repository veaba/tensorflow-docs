Computes the Bessel i0 function of  `x`  element-wise.



### Aliases:

- [ `tf.compat.v1.math.bessel_i0` ](/api_docs/python/tf/math/bessel_i0)

- [ `tf.compat.v2.math.bessel_i0` ](/api_docs/python/tf/math/bessel_i0)



```
 tf.math.bessel_i0(
    x,
    name=None
)
 
```

Modified Bessel function of order 0.

It is preferable to use the numerically stabler function  `i0e(x)`  instead.



#### Args:

- **`x`** : A  `Tensor`  or  `SparseTensor` . Must be one of the following types:  `half` ,
 `float32` ,  `float64` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  or  `SparseTensor` , respectively. Has the same type as  `x` .



#### Scipy Compatibility
Equivalent to scipy.special.i0

