

Returns the element-wise argument of a complex (or real) tensor.

**别名** : [ `tf.compat.v1.angle` ](/api_docs/python/tf/math/angle), [ `tf.compat.v1.math.angle` ](/api_docs/python/tf/math/angle), [ `tf.compat.v2.math.angle` ](/api_docs/python/tf/math/angle)

```
 tf.math.angle(
    input,
    name=None
)
 
```

Given a tensor  `input` , this operation returns a tensor of type  `float`  thatis the argument of each element in  `input`  considered as a complex number.

The elements in  `input`  are considered to be complex numbers of the form\(a + bj\), where *a* is the real part and *b* is the imaginary part.If  `input`  is real then *b* is zero by definition.

The argument returned by this function is of the form atan2(b,a).If  `input`  is real, a tensor of all zeros is returned.

#### 例如：


```
 input = tf.constant([-2.25 + 4.75j, 3.25 + 5.75j], dtype=tf.complex64)
tf.math.angle(input).numpy()
# ==> array([2.0131705, 1.056345 ], dtype=float32)
 
```

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float` ,  `double` , `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32`  or  `float64` .

