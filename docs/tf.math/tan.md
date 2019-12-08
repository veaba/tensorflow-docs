Defined in generated file:  `python/ops/gen_math_ops.py` 

Computes tan of x element-wise.



### Aliases:

- [ `tf.compat.v1.math.tan` ](/api_docs/python/tf/math/tan)

- [ `tf.compat.v1.tan` ](/api_docs/python/tf/math/tan)

- [ `tf.compat.v2.math.tan` ](/api_docs/python/tf/math/tan)

- [ `tf.compat.v2.tan` ](/api_docs/python/tf/math/tan)

- [ `tf.tan` ](/api_docs/python/tf/math/tan)



```
 tf.math.tan(
    x,
    name=None
)
 
```

Given an input tensor, this function computes tangent of every
  element in the tensor. Input range is  `(-inf, inf)`  and
  output range is  `(-inf, inf)` . If input lies outside the boundary,  `nan` 
  is returned.


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 200, 10000, float("inf")])<br>tf.math.tan(x) ==> [nan 0.45231566 -0.5463025 1.5574077 2.572152 -1.7925274 0.32097113 nan]<br>` </pre></devsite-code>


#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

