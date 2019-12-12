Assert the condition  `x <= 0`  holds element-wise.

```
 tf.debugging.assert_non_positive(    x,    message=None,    summarize=None,    name=None) 
```

This Op checks that  `x[i] <= 0`  holds for every element of  `x` . If  `x`  isempty, this is trivially satisfied.

If  `x`  is not <= 0 everywhere,  `message` , as well as the first  `summarize` entries of  `x`  are printed, and  `InvalidArgumentError`  is raised.

#### Args:
- **`x`** :  Numeric  `Tensor` .
- **`message`** : A string to prefix to the default message.
- **`summarize`** : Print this many entries of each tensor.
- **`name`** : A name for this operation (optional).  Defaults to"assert_non_positive".


#### Returns:
Op raising  `InvalidArgumentError`  unless  `x`  is all non-positive. This can  be used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s to block  followup computation until the check has executed.

#### Raises:
- **`InvalidArgumentError`** : if the check can be performed immediately and `x[i] <= 0`  is False. The check can be performed immediately during eagerexecution or if  `x`  is statically known.


#### Eager Compatibility
returns None

