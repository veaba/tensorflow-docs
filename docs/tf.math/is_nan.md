Returns which elements of x are NaN.

**Aliases** : [ `tf.compat.v1.debugging.is_nan` ](/api_docs/python/tf/math/is_nan), [ `tf.compat.v1.is_nan` ](/api_docs/python/tf/math/is_nan), [ `tf.compat.v1.math.is_nan` ](/api_docs/python/tf/math/is_nan), [ `tf.compat.v2.math.is_nan` ](/api_docs/python/tf/math/is_nan)

```
 tf.math.is_nan(    x,    name=None) 
```

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `bool` .

#### Numpy Compatibility
Equivalent to np.isnan

