Returns the next representable value of  `x1`  in the direction of  `x2` , element-wise.

**Aliases** : [ `tf.compat.v1.math.nextafter` ](/api_docs/python/tf/math/nextafter), [ `tf.compat.v2.math.nextafter` ](/api_docs/python/tf/math/nextafter)

```
 tf.math.nextafter(
    x1,
    x2,
    name=None
)
 
```

This operation returns the same result as the C++ std::nextafter function.

It can also return a subnormal number.

#### Args:
- **`x1`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` .
- **`x2`** : A  `Tensor` . Must have the same type as  `x1` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `x1` .

#### Cpp Compatibility
Equivalent to C++ std::nextafter function.

