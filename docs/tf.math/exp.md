

Defined in generated file:  `python/ops/gen_math_ops.py` 

Computes exponential of x element-wise.  \(y = e^x\).



### Aliases:

- [ `tf.compat.v1.exp` ](/api_docs/python/tf/math/exp)

- [ `tf.compat.v1.math.exp` ](/api_docs/python/tf/math/exp)

- [ `tf.compat.v2.exp` ](/api_docs/python/tf/math/exp)

- [ `tf.compat.v2.math.exp` ](/api_docs/python/tf/math/exp)

- [ `tf.exp` ](/api_docs/python/tf/math/exp)



```
 tf.math.exp(
    x,
    name=None
)
 
```



### Used in the guide:

- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)

- [Eager execution](https://tensorflow.google.cn/guide/eager)



### Used in the tutorials:

- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)

This function computes the exponential of every element in the input tensor.
i.e.  `exp(x)`  or  `e^(x)` , where  `x`  is the input tensor.
 `e`  denotes Euler's number and is approximately equal to 2.718281.
Output is positive for any real input.




>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = tf.constant(2.0)<br>tf.math.exp(x) ==> 7.389056<br><br>x = tf.constant([2.0, 8.0])<br>tf.math.exp(x) ==> array([7.389056, 2980.958], dtype=float32)<br>` </pre></devsite-code>
For complex numbers, the exponential value is calculated as follows:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `e^(x+iy) = e^x * e^iy = e^x * (cos y + i sin y)<br>` </pre></devsite-code>
Let's consider complex number 1+1j as an example.
  e^1 * (cos 1 + i sin 1) = 2.7182818284590 * (0.54030230586+0.8414709848j)


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `x = tf.constant(1 + 1j)<br>tf.math.exp(x) ==> 1.4686939399158851+2.2873552871788423j<br>` </pre></devsite-code>


#### Args:

- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `x` .

