Assert the condition  `x > 0`  holds element-wise.

```
 tf.debugging.assert_positive(    x,    message=None,    summarize=None,    name=None) 
```

This Op checks that  `x[i] > 0`  holds for every element of  `x` . If  `x`  isempty, this is trivially satisfied.

If  `x`  is not positive everywhere,  `message` , as well as the first  `summarize` entries of  `x`  are printed, and  `InvalidArgumentError`  is raised.

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`message`** : A string to prefix to the default message.
- **`summarize`** : Print this many entries of each tensor.
- **`name`** : A name for this operation (optional). Defaults to "assert_positive".


#### 返回：
Op raising  `InvalidArgumentError`  unless  `x`  is all positive. This can be  used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s to block  followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** : if the check can be performed immediately and `x[i] > 0`  is False. The check can be performed immediately during eagerexecution or if  `x`  is statically known.


#### 迫切的兼容性
returns None

