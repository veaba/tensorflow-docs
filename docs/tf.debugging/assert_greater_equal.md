Assert the condition  `x >= y`  holds element-wise.

```
 tf.debugging.assert_greater_equal(    x,    y,    message=None,    summarize=None,    name=None) 
```

This Op checks that  `x[i] >= y[i]`  holds for every pair of (possiblybroadcast) elements of  `x`  and  `y` . If both  `x`  and  `y`  are empty, this istrivially satisfied.

If  `x`  is not greater or equal to  `y`  element-wise,  `message` , as well as thefirst  `summarize`  entries of  `x`  and  `y`  are printed, and `InvalidArgumentError`  is raised.

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`y`** :  Numeric  `Tensor` , same dtype as and broadcastable to  `x` .
- **`message`** : A string to prefix to the default message.
- **`summarize`** : Print this many entries of each tensor.
- **`name`** : A name for this operation (optional).  Defaults to"assert_greater_equal".


#### 返回：
Op that raises  `InvalidArgumentError`  if  `x >= y`  is False. This can be  used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s to block  followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** : if the check can be performed immediately and `x >= y`  is False. The check can be performed immediately during eagerexecution or if  `x`  and  `y`  are statically known.


#### 迫切的兼容性
returns None

