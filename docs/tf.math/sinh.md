Computes hyperbolic sine of x element-wise.

**Aliases** : [ `tf.compat.v1.math.sinh` ](/api_docs/python/tf/math/sinh), [ `tf.compat.v1.sinh` ](/api_docs/python/tf/math/sinh), [ `tf.compat.v2.math.sinh` ](/api_docs/python/tf/math/sinh), [ `tf.compat.v2.sinh` ](/api_docs/python/tf/math/sinh), [ `tf.sinh` ](/api_docs/python/tf/math/sinh)

```
 tf.math.sinh(
    x,
    name=None
)
 
```

Given an input tensor, this function computes hyperbolic sine of every  element in the tensor. Input range is  `[-inf,inf]`  and output range  is  `[-inf,inf]` .

```
 x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 2, 10, float("inf")])
tf.math.sinh(x) ==> [-inf -4.0515420e+03 -5.2109528e-01 1.1752012e+00 1.5094614e+00 3.6268604e+00 1.1013232e+04 inf]
 
```

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `x` .

