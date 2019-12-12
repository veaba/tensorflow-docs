Assert the condition  `x`  and  `y`  are close element-wise.

```
 tf.debugging.assert_near(    x,    y,    rtol=None,    atol=None,    message=None,    summarize=None,    name=None) 
```

This Op checks that  `x[i] - y[i] < atol + rtol * tf.abs(y[i])`  holds for everypair of (possibly broadcast) elements of  `x`  and  `y` . If both  `x`  and  `y`  areempty, this is trivially satisfied.

If any elements of  `x`  and  `y`  are not close,  `message` , as well as the first `summarize`  entries of  `x`  and  `y`  are printed, and  `InvalidArgumentError` is raised.

The default  `atol`  and  `rtol`  is  `10 * eps` , where  `eps`  is the smallestrepresentable positive number such that  `1 + eps != 1` .  This is about `1.2e-6`  in  `32bit` ,  `2.22e-15`  in  `64bit` , and  `0.00977`  in  `16bit` .See  `numpy.finfo` .

#### 参数：
- **`x`** : Float or complex  `Tensor` .
- **`y`** : Float or complex  `Tensor` , same dtype as and broadcastable to  `x` .
- **`rtol`** :   `Tensor` .  Same  `dtype`  as, and broadcastable to,  `x` .The relative tolerance.  Default is  `10 * eps` .
- **`atol`** :   `Tensor` .  Same  `dtype`  as, and broadcastable to,  `x` .The absolute tolerance.  Default is  `10 * eps` .
- **`message`** : A string to prefix to the default message.
- **`summarize`** : Print this many entries of each tensor.
- **`name`** : A name for this operation (optional).  Defaults to "assert_near".


#### 返回：
Op that raises  `InvalidArgumentError`  if  `x`  and  `y`  are not close enough.  This can be used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s  to block followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** : if the check can be performed immediately and `x != y`  is False for any pair of elements in  `x`  and  `y` . The check canbe performed immediately during eager execution or if  `x`  and  `y`  arestatically known.


#### 迫切的兼容性
returns None

#### numpy兼容性
Similar to  `numpy.assert_allclose` , except tolerance depends on data type.This is due to the fact that  `TensorFlow`  is often used with  `32bit` ,  `64bit` ,and even  `16bit`  data.

