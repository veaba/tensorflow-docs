Defined in generated file:  `python/ops/gen_math_ops.py` 

Computes  `exp(x) - 1`  element-wise.



### Aliases:

- [ `tf.compat.v1.expm1` ](/api_docs/python/tf/math/expm1)

- [ `tf.compat.v1.math.expm1` ](/api_docs/python/tf/math/expm1)

- [ `tf.compat.v2.math.expm1` ](/api_docs/python/tf/math/expm1)



```
 tf.math.expm1(
    x,
    name=None
)
 
```

i.e.  `exp(x) - 1`  or  `e^(x) - 1` , where  `x`  is the input tensor.
   `e`  denotes Euler's number and is approximately equal to 2.718281.


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = tf.constant(2.0)<br>tf.math.expm1(x) ==> 6.389056<br><br>x = tf.constant([2.0, 8.0])<br>tf.math.expm1(x) ==> array([6.389056, 2979.958], dtype=float32)<br><br>x = tf.constant(1 + 1j)<br>tf.math.expm1(x) ==> (0.46869393991588515+2.2873552871788423j)<br>` </pre></devsite-code>


#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

