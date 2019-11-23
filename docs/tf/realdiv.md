
Defined in generated file:  `python/ops/gen_math_ops.py` 

Returns x / y element-wise for real types.


### Aliases:
- [ `tf.compat.v1.realdiv` ](/api_docs/python/tf/realdiv)
- [ `tf.compat.v2.realdiv` ](/api_docs/python/tf/realdiv)


```
tf.realdiv(
    x,
    y,
    name=None
)

```


If  `x`  and  `y`  are reals, this will return the floating-point division.

<em>NOTE</em>:  `Div`  supports broadcasting. More about broadcasting[here](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)


#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `uint8` ,  `int8` ,  `uint16` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`y`** : A  `Tensor` . Must have the same type as  `x` .
- **`name`** : A name for the operation (optional).


#### Returns:

A  `Tensor` . Has the same type as  `x` .
