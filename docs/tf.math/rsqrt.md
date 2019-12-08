

Defined in generated file:  `python/ops/gen_math_ops.py` 

Computes reciprocal of square root of x element-wise.



### Aliases:

- [ `tf.compat.v1.math.rsqrt` ](/api_docs/python/tf/math/rsqrt)

- [ `tf.compat.v1.rsqrt` ](/api_docs/python/tf/math/rsqrt)

- [ `tf.compat.v2.math.rsqrt` ](/api_docs/python/tf/math/rsqrt)



```
 tf.math.rsqrt(
    x,
    name=None
)
 
```



### Used in the tutorials:

- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

I.e., y=1/√x.



#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

