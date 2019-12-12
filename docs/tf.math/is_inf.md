Returns which elements of x are Inf.

**Aliases** : [ `tf.compat.v1.debugging.is_inf` ](/api_docs/python/tf/math/is_inf), [ `tf.compat.v1.is_inf` ](/api_docs/python/tf/math/is_inf), [ `tf.compat.v1.math.is_inf` ](/api_docs/python/tf/math/is_inf), [ `tf.compat.v2.math.is_inf` ](/api_docs/python/tf/math/is_inf)

```
 tf.math.is_inf(    x,    name=None) 
```

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `bool` .

#### Numpy Compatibility
Equivalent to np.isinf

