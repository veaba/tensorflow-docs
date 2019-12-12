Assert the condition  `x != y`  holds for all elements.

```
 tf.debugging.assert_none_equal(    x,    y,    summarize=None,    message=None,    name=None) 
```

This Op checks that  `x[i] != y[i]`  holds for every pair of (possiblybroadcast) elements of  `x`  and  `y` . If both  `x`  and  `y`  are empty, this istrivially satisfied.

If any elements of  `x`  and  `y`  are equal,  `message` , as well as the first `summarize`  entries of  `x`  and  `y`  are printed, and  `InvalidArgumentError` is raised.

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`y`** :  Numeric  `Tensor` , same dtype as and broadcastable to  `x` .
- **`summarize`** : Print this many entries of each tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to"assert_none_equal".


#### 返回：
Op that raises  `InvalidArgumentError`  if  `x != y`  is ever False. This can  be used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)s to block  followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** : if the check can be performed immediately and `x != y`  is False for any pair of elements in  `x`  and  `y` . The check canbe performed immediately during eager execution or if  `x`  and  `y`  arestatically known.


#### 迫切的兼容性
returns None

