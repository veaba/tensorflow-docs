

Computes exponential of x element-wise.  \(y = e^x\).

**别名** : [ `tf.compat.v1.exp` ](/api_docs/python/tf/math/exp), [ `tf.compat.v1.math.exp` ](/api_docs/python/tf/math/exp), [ `tf.compat.v2.exp` ](/api_docs/python/tf/math/exp), [ `tf.compat.v2.math.exp` ](/api_docs/python/tf/math/exp), [ `tf.exp` ](/api_docs/python/tf/math/exp)

```
 tf.math.exp(
    x,
    name=None
)
 
```

### 在指南中使用：
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)

This function computes the exponential of every element in the input tensor.i.e.  `exp(x)`  or  `e^(x)` , where  `x`  is the input tensor. `e`  denotes Euler's number and is approximately equal to 2.718281.Output is positive for any real input.


```
 x = tf.constant(2.0)
tf.math.exp(x) ==> 7.389056

x = tf.constant([2.0, 8.0])
tf.math.exp(x) ==> array([7.389056, 2980.958], dtype=float32)
 
```

For complex numbers, the exponential value is calculated as follows:

```
 e^(x+iy) = e^x * e^iy = e^x * (cos y + i sin y)
 
```

Let's consider complex number 1+1j as an example.  e^1 * (cos 1 + i sin 1) = 2.7182818284590 * (0.54030230586+0.8414709848j)

```
 x = tf.constant(1 + 1j)
tf.math.exp(x) ==> 1.4686939399158851+2.2873552871788423j
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

