Logical XOR function.

**Aliases** : [ `tf.compat.v1.logical_xor` ](/api_docs/python/tf/math/logical_xor), [ `tf.compat.v1.math.logical_xor` ](/api_docs/python/tf/math/logical_xor), [ `tf.compat.v2.math.logical_xor` ](/api_docs/python/tf/math/logical_xor)

```
 tf.math.logical_xor(    x,    y,    name='LogicalXor') 
```

x ^ y = (x | y) &amp; ~(x &amp; y)

Inputs are tensor and if the tensors contains more than one element, anelement-wise logical XOR is computed.

#### Usage:


```
 x)
#  here z = [False  True  True False]
 
```

#### Args:
- **`x`** : A  `Tensor`  type bool.
- **`y`** : A  `Tensor`  of type bool.


#### Returns:
A  `Tensor`  of type bool with the same size as that of x or y.

