Returns x / y element-wise for integer types.

**别名** : [ `tf.compat.v1.truncatediv` ](/api_docs/python/tf/truncatediv), [ `tf.compat.v2.truncatediv` ](/api_docs/python/tf/truncatediv)

```
 tf.truncatediv(
    x,
    y,
    name=None
)
 
```

Truncation designates that negative numbers will round fractional quantitiestoward zero. I.e. -7 / 5 = -1. This matches C semantics but it is differentthan Python semantics. See  `FloorDiv`  for a division function that matchesPython Semantics.

*NOTE*:  `truncatediv`  supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `uint8` ,  `int8` ,  `uint16` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

