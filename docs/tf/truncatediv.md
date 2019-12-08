Defined in generated file:  `python/ops/gen_math_ops.py` 

Returns x / y element-wise for integer types.



### Aliases:

- [ `tf.compat.v1.truncatediv` ](/api_docs/python/tf/truncatediv)

- [ `tf.compat.v2.truncatediv` ](/api_docs/python/tf/truncatediv)



```
 tf.truncatediv(
    x,
    y,
    name=None
)
 
```

Truncation designates that negative numbers will round fractional quantities
toward zero. I.e. -7 / 5 = -1. This matches C semantics but it is different
than Python semantics. See  `FloorDiv`  for a division function that matches
Python Semantics.

<em>NOTE</em>:  `truncatediv`  supports broadcasting. More about broadcasting
[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)



#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `uint8` ,  `int8` ,  `uint16` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .

- **`y`** : A  `Tensor` . Must have the same type as  `x` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

