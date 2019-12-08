Defined in generated file:  `python/ops/gen_math_ops.py` 

Computes inverse hyperbolic cosine of x element-wise.



### Aliases:

- [ `tf.acosh` ](/api_docs/python/tf/math/acosh)

- [ `tf.compat.v1.acosh` ](/api_docs/python/tf/math/acosh)

- [ `tf.compat.v1.math.acosh` ](/api_docs/python/tf/math/acosh)

- [ `tf.compat.v2.acosh` ](/api_docs/python/tf/math/acosh)

- [ `tf.compat.v2.math.acosh` ](/api_docs/python/tf/math/acosh)



```
 tf.math.acosh(
    x,
    name=None
)
 
```

Given an input tensor, the function computes inverse hyperbolic cosine of every element.
Input range is  `[1, inf]` . It returns  `nan`  if the input lies outside the range.



```
 x = tf.constant([-2, -0.5, 1, 1.2, 200, 10000, float("inf")])
tf.math.acosh(x) ==> [nan nan 0. 0.62236255 5.9914584 9.903487 inf]
 
```



#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

